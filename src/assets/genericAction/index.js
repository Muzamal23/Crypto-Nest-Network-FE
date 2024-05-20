import axios from "axios";
// import moment from "moment";
import { toast } from "react-toastify";
import { TOASTER_STYLING_VALUES } from "../../config";

const moment = require("moment-timezone");

function getTimeFormat(time) {
  const formattedTime = moment(time).format(" h:mm a");
  return formattedTime;
}

function getDateTimeFormat(dateTime) {
  const formattedDateTime = moment(dateTime).format("DD/MM/YYYY, h:mm a");
  return formattedDateTime;
}

function getDateFormat(dateTime) {
  const formattedDateTime = moment(dateTime).format("DD/MM/YYYY");
  return formattedDateTime;
}

function getHourMintFormat(dateTime) {
  const formattedDateTime = moment(dateTime, "H:mm").format("HH:mm A");
  return formattedDateTime;
}

function getHourMintFormatForTimeRange(time) {
  // Get the current date
  const currentDate = moment();

  // Parse the provided time "12:00 PM"
  const providedTime = time;
  const parsedTime = moment(providedTime, "h:mm A");

  // Combine the current date and parsed time
  const combinedDateTime = currentDate
    .set("hour", parsedTime.get("hour"))
    .set("minute", parsedTime.get("minute"));

  // Format the combined date and time as "2022-04-17T15:30"
  const formattedDateTime = combinedDateTime.format("YYYY-MM-DDTHH:mm");

  return formattedDateTime;
}

function getMondayOfCurrentWeek() {
  const today = new Date();
  const first = today.getDate() - today.getDay(2) + 1;

  const monday = new Date(today.setDate(first));

  const momentConvert = moment(monday).format().split("+")[0];
  return momentConvert;
}

function getPreviousDate(date, interval) {
  const toDate = new Date(date);
  const fromDate = new Date(toDate);
  fromDate.setDate(fromDate.getDate() - interval);
  return fromDate;
}

function getNextDate(date, interval) {
  const toDate = new Date(date);
  const fromDate = new Date(toDate);
  fromDate.setDate(fromDate.getDate() + interval);
  return fromDate;
}

function monthOfYearAsString(monthIndex) {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][monthIndex];
}

function dayOfWeekAsString(dayIndex) {
  return ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"][dayIndex];
}

function fullMonthOfYearAsString(monthIndex) {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][monthIndex];
}

function getDateInFormatFormControl(date) {
  return moment(date).format("YYYY-MM-DD");
}

function getTimeInFormatFormControl(value) {
  const today = new Date(value);
  const hour = today.getHours().toString().padStart(2, "0");
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");
  const time = `${hour}:${minutes}:${seconds}`;
  return time;
}

function getDateInFormat(date) {
  return moment(date).format("YYYY/MM/DD");
}

function getTimeInFormat(date) {
  return moment(date).format("LT");
}

function changeTimeZone(date) {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  if (typeof date === "string") {
    return new Date(
      new Date(date).toLocaleString("en-US", {
        timeZone,
      })
    );
  }

  return new Date(
    date.toLocaleString("en-US", {
      timeZone,
    })
  );
}

function dateDifference(createdDate) {
  const date1 = new Date(createdDate);
  const date2 = new Date();
  let diffDays = date2.getDate() - date1.getDate();
  if (diffDays < 0) {
    diffDays *= -1;
  }
  return diffDays;
}

function getDateAndTime(dateTime) {
  const formatDate = moment(dateTime).format();
  const value = dateDifference(formatDate);
  return `${moment(dateTime).format("LT")}, ${
    value === 0 ? "Today" : dayOfWeekAsString(new Date(dateTime).getDay())
  }`;
}

function getUpdateTime(time) {
  const timeToChange = new Date(time);
  const hour =
    timeToChange.getHours() < 10
      ? `0${timeToChange.getHours()}`
      : timeToChange.getHours();
  const minutes =
    timeToChange.getMinutes() < 10
      ? `0${timeToChange.getMinutes()}`
      : timeToChange.getMinutes();
  const newTime = `${hour}:${minutes}`;
  return newTime;
}

function getPageRecordIndex(PageNumber, index) {
  let pg = PageNumber;
  if (pg < 0) {
    pg *= 0;
  }
  const myCount = index + 1;
  const final = pg * 15 + myCount;
  return final;
}

function getZuluTimeFormat(time) {
  if (time) {
    const truncatedTime = time.length > 5 ? time.slice(0, 5) : time;
    return `${truncatedTime.replace(":", "")}Z`;
  }
  return "";
}

function convertBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

function getInitialName(name) {
  let initials = "";

  const nameSplit = name.split(" ");
  const nameLength = nameSplit.length;

  if (nameLength > 1) {
    initials =
      nameSplit[0].substring(0, 1) + nameSplit[nameLength - 1].substring(0, 1);
  } else if (nameLength === 1) {
    initials = nameSplit[0].substring(0, 1);
  }

  return initials.toUpperCase();
}

function createImageFromInitials(size, name, color) {
  if (name == null) return null;
  name = getInitialName(name);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = size;
  canvas.height = size;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, size, size);
  context.fillStyle = `${color}50`;
  context.fillRect(0, 0, size, size);
  context.fillStyle = color;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = `${size / 2}px Roboto`;
  context.fillText(name, size / 2, size / 2);
  return canvas.toDataURL();
}

function getRandomColor() {
  let color = "#";
  const letters = "0123456789ABCDEF";

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function listOfNextYears(number) {
  const expYearArray = [];
  for (let i = 0; i <= number; i += 1) {
    expYearArray.push(new Date().getFullYear() + i);
  }
  return expYearArray;
}

function listOfMonths() {
  return [
    {
      id: 0,
      value: 1,
      month: "January",
    },
    {
      id: 1,
      value: 2,
      month: "Feburary",
    },
    {
      id: 2,
      value: 3,
      month: "March",
    },
    {
      id: 3,
      value: 4,
      month: "April",
    },
    {
      id: 4,
      value: 5,
      month: "May",
    },
    {
      id: 5,
      value: 6,
      month: "June",
    },
    {
      id: 6,
      value: 7,
      month: "July",
    },
    {
      id: 7,
      value: 8,
      month: "August",
    },
    {
      id: 8,
      value: 9,
      month: "September",
    },
    {
      id: 9,
      value: 10,
      month: "October",
    },
    {
      id: 10,
      value: 11,
      month: "November",
    },
    {
      id: 11,
      value: 12,
      month: "December",
    },
  ];
}

function expiryDateCheck(expiryDate) {
  const givenDate = new Date(expiryDate); // Rename to 'givenDate'

  const currentDate = new Date();

  return givenDate > currentDate;
}

function truncate(text, startChars, endChars, maxLength) {
  if (text && text.length > maxLength) {
    const start = text.substring(0, startChars);
    const end = text.substring(text.length - endChars, text.length);
    return `${start} ${end}`;
  }
  return text;
}

function getFileExtension(file) {
  const lastIndexOfDot = file.lastIndexOf(".");
  const ext = file.slice(lastIndexOfDot + 1, file.length);
  return ext;
}

function getCountryTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function allMonthList() {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
}

function getOperatingSystem(window) {
  let operatingSystem = "Not known";
  if (window.navigator.appVersion.indexOf("Win") !== -1) {
    operatingSystem = "Windows OS";
  }
  if (window.navigator.appVersion.indexOf("Mac") !== -1) {
    operatingSystem = "MacOS";
  }
  if (window.navigator.appVersion.indexOf("X11") !== -1) {
    operatingSystem = "UNIX OS";
  }
  if (window.navigator.appVersion.indexOf("Linux") !== -1) {
    operatingSystem = "Linux OS";
  }

  return operatingSystem;
}

function getBrowser(window) {
  let currentBrowser = "Not known";
  if (window.navigator.userAgent.indexOf("Chrome") !== -1) {
    currentBrowser = "Google Chrome";
  } else if (window.navigator.userAgent.indexOf("Firefox") !== -1) {
    currentBrowser = "Mozilla Firefox";
  } else if (window.navigator.userAgent.indexOf("MSIE") !== -1) {
    currentBrowser = "Internet Explorer";
  } else if (window.navigator.userAgent.indexOf("Edge") !== -1) {
    currentBrowser = "Edge";
  } else if (window.navigator.userAgent.indexOf("Safari") !== -1) {
    currentBrowser = "Safari";
  } else if (window.navigator.userAgent.indexOf("Opera") !== -1) {
    currentBrowser = "Opera";
  } else {
    // console.log("Others");
  }

  return currentBrowser;
}

const getDataForIp = async () => {
  const res = await axios.get("https://geolocation-db.com/json/");
  return res.data.IPv4;
};

function getTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function dateAndTimeFormatForSchedular(time) {
  const date = moment().format().split("T")[0];
  const dateTime = `${date}T${time}`;
  const offset = moment(dateTime).format("LLL");
  return offset;
}

const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const convertStringToBoolean = (str) => {
  let value;
  if (str === "true") {
    value = true;
  } else {
    value = false;
  }
  return value;
};

function convertTo24HourFormat(time12Hour) {
  if (!time12Hour) {
    return "Invalid time";
  }

  const [time, modifier] = time12Hour.split(" ");

  if (!time || !modifier) {
    return "Invalid time format";
  }

  const [hours, minutes] = time.split(":");
  let convertedHours = hours;

  if (modifier === "PM" && hours !== "12") {
    convertedHours = String(parseInt(hours, 10) + 12);
  } else if (modifier === "AM" && hours === "12") {
    convertedHours = "00";
  }

  return `${convertedHours}:${minutes}`;
}

function notification(data, condition) {
  if (condition === "success") {
    toast.success(data, TOASTER_STYLING_VALUES);
  } else {
    toast.error(data, TOASTER_STYLING_VALUES);
  }
}

const convertTimeIntoUTC = (dateTime = null) => {
  const utcTime = new Date(dateTime).toISOString();
  return utcTime;
};

function getDashDateFormat(dateTime) {
  const formattedDateTime = moment(dateTime).format("YYYY-MM-DD");
  return formattedDateTime;
}

function getTime24HrFormat(time) {
  const formattedDateTime = moment(time, "h:mm A").format("HH:mm");
  return formattedDateTime;
}

function getUTCFormat(date) {
  const formattedDateTime = moment(date, "D/M/YYYY h:mm A").toDate();
  return formattedDateTime;
}

// function showDateTimeFormat(date) {
//   const inputDate = moment(date);
//   const formattedDateTime = inputDate.format("D/M/YYYY h:mm A");
//   return formattedDateTime;
// }

function showDateTimeFormat(date) {
  const utcFormattedDateTime = moment
    .utc(date)
    .local()
    .format("D/M/YYYY h:mm A");
  // const utcFormattedDateTime = moment.utc(date, "D/M/YYYY h:mm A").tz(timeZone);
  return utcFormattedDateTime;
}

function toPascalCase(str) {
  return str
    .replace(/[-_]\w/g, (match) => match.charAt(1).toUpperCase())
    .replace(/^\w/, (match) => match.toUpperCase());
}

function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function formatMinutesToHHMMSS(minutes) {
  const duration = moment.duration(minutes, "minutes");
  const formattedTime = moment
    .utc(duration.asMilliseconds())
    .format("HH:mm:ss");
  return formattedTime;
}

function getDayName(date = new Date(), locale = "en-US") {
  return date.toLocaleDateString(locale, { weekday: "long" });
}

const timeUtcConversion = (time, date) => {
  const hourFormat = getTime24HrFormat(time);
  const utcFormat = convertTimeIntoUTC(hourFormat, date);
  return utcFormat?.split("Z")[0];
};

function removeLastUnderscoreAndValue(inputString) {
  return inputString.replace(/_\d+$/, ""); // Remove the last underscore and all digits following it
}

export {
  getTimeFormat,
  getFileExtension,
  getDataForIp,
  getBrowser,
  getOperatingSystem,
  getPreviousDate,
  getNextDate,
  monthOfYearAsString,
  dayOfWeekAsString,
  getInitialName,
  getDateInFormat,
  convertBase64,
  createImageFromInitials,
  getRandomColor,
  listOfNextYears,
  getDateInFormatFormControl,
  getTimeInFormatFormControl,
  listOfMonths,
  expiryDateCheck,
  fullMonthOfYearAsString,
  dateDifference,
  getCountryTimeZone,
  allMonthList,
  getTimeInFormat,
  getUpdateTime,
  getPageRecordIndex,
  getZuluTimeFormat,
  truncate,
  changeTimeZone,
  getDateAndTime,
  getTimeZone,
  getMondayOfCurrentWeek,
  dateAndTimeFormatForSchedular,
  getCurrentDate,
  convertStringToBoolean,
  getDateTimeFormat,
  getDateFormat,
  getHourMintFormat,
  convertTo24HourFormat,
  notification,
  convertTimeIntoUTC,
  getDashDateFormat,
  getHourMintFormatForTimeRange,
  getTime24HrFormat,
  toPascalCase,
  debounce,
  getUTCFormat,
  showDateTimeFormat,
  formatMinutesToHHMMSS,
  getDayName,
  timeUtcConversion,
  removeLastUnderscoreAndValue
};
