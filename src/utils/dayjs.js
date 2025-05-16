// src/utils/dayjs.js
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

// Set default timezone if needed (optional)
// dayjs.tz.setDefault("Asia/Kolkata");

export default dayjs;
