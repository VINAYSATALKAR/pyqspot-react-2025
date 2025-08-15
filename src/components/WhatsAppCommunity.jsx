// src/components/WhatsAppCommunity.jsx
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppCommunity = () => {
  return (
    <div className="px-[8vw] mt-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between border border-gray-200">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-2xl font-semibold text-gray-800">Join Our WhatsApp Community</h2>
          <p className="text-gray-600 mt-1 text-sm">
            Get instant updates, paper releases, and important notifications.
          </p>
        </div>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-xl" />
          Join Now
        </a>
      </div>
    </div>
  );
};

export default WhatsAppCommunity;
