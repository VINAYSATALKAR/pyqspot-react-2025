import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

// ✅ Set API Base URL using Environment Variable
const API_BASE_URL = import.meta.env.VITE_API_URL || "https://backend-server-sv2t.onrender.com";

const beEceData = {
  sem7: [
    {
      subject: "Coming Soon",
      exams: {
      },
    }
  ],
  sem8: [
    {
      subject: "Artificial Intelligence and Machine Learning",
      exams: {
        "May-June 2025": {
          endsem: { releaseTime: "2026-05-30T12:00:00" },
        },"May-June 2024": {
          endsem: { releaseTime: "2026-05-30T12:00:00" },
        },"Notes": {
          endsem: { releaseTime: "2026-05-30T12:00:00" },
        },
      },
    },
    {
      subject: "VLSI Design and Technology",
      exams: {
        "May-June 2025": {
          endsem: { releaseTime: "2026-06-02T12:00:00" },
        },"May-June 2024": {
          endsem: { releaseTime: "2026-06-02T12:00:00" },
        }
      },
    },
    {
      subject: "Data Mining and Warehousing",
      exams: {
        "May-June 2025": {
          endsem: { releaseTime: "2026-06-05T12:00:00" },
        },"May-June 2024": {
          endsem: { releaseTime: "2026-06-05T12:00:00" },
        },"Notes": {
          endsem: { releaseTime: "2026-06-05T12:00:00" },
        },
      },
    },
  ],
};

// ✅ Razorpay Order Processing
async function openRazorpayCheckout(year, subject, examType, examPeriod) {
  console.log("🔎 Creating Razorpay Order for:", year, subject, examType, examPeriod);

  try {
    const email = prompt("Enter your email for purchase confirmation:");
    if (!email) {
      alert("❌ Email is required!");
      return;
    }

    // ✅ Create Razorpay Order
    const orderResponse = await fetch(`${API_BASE_URL}/razorpay-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 32.96, currency: "INR", year, subject, examType, examPeriod }),
    });

    const orderData = await orderResponse.json();
    if (!orderData.success || !orderData.order?.id) {
      throw new Error("❌ Failed to create Razorpay order.");
    }

    console.log("✅ Razorpay Order Created:", orderData.order);

    const options = {
      key: "rzp_live_wiHVaRq4BJpVc8",
      amount: orderData.order.amount,
      currency: orderData.order.currency,
      order_id: orderData.order.id,
      prefill: { email },
      notes: { year, subject, examType, examPeriod },
      theme: { color: "#3399cc" },
      handler: async function (response) {
        console.log("✅ Payment Successful! Fetching File Link...");
        const fileResponse = await fetch(`${API_BASE_URL}/get-file/${year}/${subject}/${examType}/${examPeriod}`);
        const fileData = await fileResponse.json();

        if (!fileData.success || !fileData.link) {
          console.error("❌ Failed to retrieve file link.");
          alert("An error occurred while fetching the file. Please try again.");
          return;
        }

        console.log("✅ File Link:", fileData.link);
        window.open(fileData.link, "_blank");

        // ✅ Log Download to Google Sheets
        try {
          const logResponse = await fetch(`${API_BASE_URL}/log-download`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, subject }),
          });

          const logData = await logResponse.json();
          if (!logData.success) {
            console.warn("⚠️ Google Sheets logging failed.");
          } else {
            console.log(`📊 User Download Logged: ${email} -> ${subject}`);
          }
        } catch (error) {
          console.error("❌ Error logging user download:", error);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("❌ Error Processing Payment or Fetching File:", error);
  }
}

// ✅ Paper Table Component with Corrected Date Logic
const PaperTable = ({ semName, data }) => {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const examHeaders = [...new Set(data.flatMap((subject) => Object.keys(subject.exams)))];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-purple-900 mb-4">{semName}</h2>
      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-md">
        <table className="min-w-max text-xs sm:text-sm border-collapse w-full">
          <thead className="bg-purple-100 text-purple-950">
            <tr>
              <th className="p-3 border border-gray-300 text-sm font-semibold text-left">Subject</th>
              {examHeaders.map((exam) => (
                <React.Fragment key={exam}>
                  {/* <th className="p-3 border border-gray-300 text-sm font-semibold text-center">In-Sem ({exam})</th> */}
                  <th className="p-3 border border-gray-300 text-sm font-semibold text-center">End-Sem ({exam})</th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((subject) => (
              <tr key={subject.subject} className="bg-white hover:bg-purple-50 transition duration-300">
                <td className="border p-3 text-left text-sm font-medium">{subject.subject}</td>
                {examHeaders.map((exam) => (
                  <React.Fragment key={exam}>
                    <td className="border p-3 text-center">
                      {subject.exams[exam]?.insem?.releaseTime &&
                        dayjs().isAfter(dayjs(subject.exams[exam].insem.releaseTime)) ? (
                        <button
                          onClick={() => openRazorpayCheckout("BE_Ece", subject.subject, "insem", exam)}
                          className="bg-purple-700 text-white px-4 py-1 rounded hover:bg-purple-800 transition duration-200"
                        >
                          Download
                        </button>
                      ) : (
                        <span className="text-gray-500">Coming Soon</span>
                      )}
                    </td>
                    <td className="border p-3 text-center">
                      {subject.exams[exam]?.endsem?.releaseTime &&
                        dayjs().isAfter(dayjs(subject.exams[exam].endsem.releaseTime)) ? (
                        <button
                          onClick={() => openRazorpayCheckout("BE_Ece", subject.subject, "endsem", exam)}
                          className="bg-purple-700 text-white px-4 py-1 rounded hover:bg-purple-800 transition duration-200"
                        >
                          Download
                        </button>
                      ) : (
                        <span className="text-gray-500">Coming Soon</span>
                      )}
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const BEEce = () => (
  <div className="px-[8vw] py-12 bg-gray-50 text-purple-950">
    <h1 className="text-2xl font-bold mb-8">Final Year - ECE Engineering</h1>
    <PaperTable semName="Semester 7" data={beEceData.sem7} />
    <PaperTable semName="Semester 8" data={beEceData.sem8} />
  </div>
);

export default BEEce;
