// sidebar
const sidebarTabs = document.querySelectorAll(".sidebar ul li");
const mainSections = document.querySelectorAll(".main section");

sidebarTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    sidebarTabs.forEach((tabs) => {
      tabs.classList.remove("hover");
      mainSections.forEach((section, sectionIndex) => {
        if (sectionIndex === index) {
          section.setAttribute("style", "display: block");
        } else {
          section.setAttribute("style", "display: none");
        }
      });
    });
    tab.setAttribute("class", "hover");
  });
});

// Date and Time Decoder
function date_decoder(utcTime) {
  var utcDate = new Date(utcTime);
  var options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  var utcPlus8Time = utcDate.toLocaleString("en-US", options);

  return utcPlus8Time;
}

function date_decoder2(utcTime) {
  var utcDate = new Date(utcTime);
  var options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  var formattedDate = utcDate.toLocaleString("en-US", options);

  // Extract the parts and format them as yyyy-MM-dd
  var parts = formattedDate.split("/");
  if (parts.length === 3) {
    var year = parts[2];
    var month = parts[0].padStart(2, "0");
    var day = parts[1].padStart(2, "0");
    return year + "-" + month + "-" + day;
  }

  // If the date format is not as expected, return the original formatted date.
  return formattedDate;
}

function date_decoder3(utcTime) {
  var utcDate = new Date(utcTime);
  var day = utcDate.getDate();
  var month = utcDate.toLocaleString("default", { month: "short" });
  var year = utcDate.getFullYear().toString().slice(-2);

  var formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

function date_decoder4(utcTime, plusDays) {
  var utcDate = new Date(utcTime);
  utcDate.setDate(utcDate.getDate() + plusDays);

  var options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  var formattedDate = utcDate.toLocaleString("en-US", options);

  return formattedDate;
}

function date_decoder5(utcTime) {
  var utcDate = new Date(utcTime);
  var day = utcDate.getDate();
  var month = utcDate.toLocaleString("default", { month: "2-digit" });
  var year = utcDate.getFullYear();

  var formattedDate = `${year}-${month}-${day.toString().padStart(2, "0")}`;

  return formattedDate;
}

function time_decoder(timestamp) {
  const date = new Date(timestamp);

  // Add the timezone offset to the timestamp
  date.setUTCHours(date.getUTCHours() + 8);
  // date.setUTCMinutes(date.getUTCMinutes() + 23);

  // Retrieve the hour and minute components
  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();
  var minutes_set = 0;
  if (minutes >= 0 && minutes <= 22) {
    // Code to be executed if minutes is between 0 and 22
    if (hours >= 0 && minutes <= 22 && hours != 12) {
      hours = parseInt(hours) + 24 - 1;
      minutes_set = parseInt(minutes) + 60 - 23;
    } else {
      hours = parseInt(hours) - 1;
      minutes_set = parseInt(minutes) + 60 - 23;
    }
  } else {
    minutes_set = parseInt(minutes) - 23;
  }
  // Determine AM or PM
  var period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  if (hours == 24) {
    hours = 12;
    period = "AM";
  } else {
    hours = hours % 12;
    hours = hours ? hours : 12;
  }
  // Format the time string
  const timeString =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes_set.toString().padStart(2, "0") +
    " " +
    period;
  return timeString;
}

function time_decoder2(timestamp) {
  const date = new Date(timestamp);

  // Add the timezone offset to the timestamp
  date.setUTCHours(date.getUTCHours() + 8);
  // date.setUTCMinutes(date.getUTCMinutes() + 23);

  // Retrieve the hour and minute components
  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();
  var minutes_set = 0;

  if (minutes >= 0 && minutes <= 22) {
    // Code to be executed if minutes is between 0 and 22
    if (hours >= 0 && minutes <= 22) {
      hours = parseInt(hours);
      minutes_set = parseInt(minutes);
    } else {
      hours = parseInt(hours);
      minutes_set = parseInt(minutes);
    }
  } else {
    minutes_set = parseInt(minutes);
  }
  // Determine AM or PM
  var period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  if (hours == 24) {
    hours = 12;
    period = "AM";
  } else {
    hours = hours % 12;
    hours = hours ? hours : 12;
  }
  // Format the time string
  const timeString =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes_set.toString().padStart(2, "0") +
    " " +
    period;
  return timeString;
}

function time_decoder3(timestamp) {
  var date = new Date(timestamp);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var period = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, set it to 12

  // Add leading zero to single-digit minutes
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes} ${period}`;
}

function time_decoder5(timestamp) {
  const date = new Date(timestamp);

  // Add the timezone offset to the timestamp
  date.setUTCHours(date.getUTCHours() + 8);
  // date.setUTCMinutes(date.getUTCMinutes() + 23);

  // Retrieve the hour and minute components
  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();
  var minutes_set = 0;
  if (minutes >= 0 && minutes <= 22) {
    // Code to be executed if minutes is between 0 and 22
    if (hours >= 0 && minutes <= 22 && hours != 12) {
      hours = parseInt(hours) + 24 - 1;
      minutes_set = parseInt(minutes) + 60 - 23;
    } else {
      hours = parseInt(hours) - 1;
      minutes_set = parseInt(minutes) + 60 - 23;
    }
  } else {
    minutes_set = parseInt(minutes) - 23;
  }

  // Format the time string
  const timeString =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes_set.toString().padStart(2, "0");
  return timeString;
}

function convertTo24HourFormat(timeStr) {
  // Split the time string into hour, minute, and AM/PM components
  const [time, amPm] = timeStr.split(" ");

  // Convert hour and minute to integers
  const [hour, minute] = time.split(":").map(Number);

  // Convert to 24-hour format if PM
  let hour24 = hour;
  if (amPm.toLowerCase() === "pm") {
    hour24 = (hour + 12) % 24;
  }

  // Return the formatted time
  return `${hour24.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}`;
}

function convertTo24HourFormat2(timeStr) {
  if (timeStr == "") {
    return "";
  }
  // Convert hour and minute to integers
  const [hour, minute] = timeStr.split(":");
  // Convert to 24-hour format if PM

  var amPm = "AM";
  let hour24 = hour;
  if (hour24 / 12 > 1) {
    hour24 = hour24 % 12;
    amPm = "PM";
  }

  // Return the formatted time
  return `${hour24.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")} ${amPm}`;
}

function convertToOrdinal(cardinal) {
  var lastDigit = cardinal % 10;
  var lastTwoDigits = cardinal % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return "th";
  } else if (lastDigit === 1) {
    return "st";
  } else if (lastDigit === 2) {
    return "nd";
  } else if (lastDigit === 3) {
    return "rd";
  } else {
    return "th";
  }
}

function convertToMonthName(number) {
  var months = [
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

  if (number >= 1 && number <= 12) {
    return months[number - 1];
  } else {
    return "Invalid month number";
  }
}

// General Code
// Weight Calculator
var gross_weight = document.getElementById("gross_weight");
var tare_weight = document.getElementById("tare_weight");
var net_weight = document.getElementById("net_weight");

function weight_calculator() {
  net_weight.value = gross_weight.value - tare_weight.value;
}

function pushUniqueElement(arr, element) {
  if (!arr.includes(element)) {
    arr.push(element);
  }
}

// Set the idle time in milliseconds (e.g., 1 minutes)
const idleTime = 2 * 60 * 10000; // 2 minute

let idleTimer;

// Reset the timer when there is user activity
function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(reloadPage, idleTime);
}

// Reload the page
function reloadPage() {
  location.reload();
}

// Start the idle timer when the page loads
window.addEventListener("load", function () {
  resetIdleTimer();
});

// Add event listeners for user activity
window.addEventListener("mousemove", resetIdleTimer);
window.addEventListener("keydown", resetIdleTimer);
window.addEventListener("scroll", resetIdleTimer);
// Add any other relevant event listeners

function calculateTravelTime(
  departureDate,
  departureTime,
  arrivalDate,
  arrivalTime
) {
  const departureDateTime = new Date(`${departureDate} ${departureTime}`);
  const arrivalDateTime = new Date(`${arrivalDate} ${arrivalTime}`);

  // Calculate the time difference in milliseconds
  const timeDifference = arrivalDateTime - departureDateTime;

  // Convert milliseconds to hours and minutes
  let hours = Math.floor(timeDifference / (1000 * 60 * 60));
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // Check if travel time exceeds 24 hours
  if (hours >= 24) {
    const days = Math.floor(hours / 24);
    hours = hours % 24;

    // Determine the correct plural form for days, hours, and minutes
    const pluralDays = days > 1 ? "days" : "day";
    const pluralHours = hours > 1 ? "hrs" : "hr";
    const pluralMinutes = minutes > 1 ? "mins" : "min";

    return `${days} ${pluralDays} ${hours} ${pluralHours} ${minutes} ${pluralMinutes}`;
  } else {
    let travelTime = "";

    // Determine the correct plural form for hours and minutes
    const pluralHours = hours > 1 ? "hrs" : "hr";
    const pluralMinutes = minutes > 1 ? "mins" : "min";

    if (hours > 0) {
      travelTime += `${hours} ${pluralHours} `;
    }
    if (minutes > 0) {
      travelTime += `${minutes} ${pluralMinutes}`;
    }
    return travelTime.trim();
  }
}

function capitalizeInputs(event) {
  const form = event.target;
  const inputs = form.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = inputs[i].value.toUpperCase();
  }
}

// Get all the forms on the page
const forms = document.getElementsByTagName("form");

// Attach the event listener to each form
for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", capitalizeInputs);
}

function refreshPage() {
  location.reload();
}

function generateExactTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, set it to 12

  // Format the time to ensure leading zeros for single-digit values
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var exactTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  return exactTime;
}

// Update the content of the HTML element with the exact time every second
function updateExactTime() {
  var exactTimeElement = document.getElementById("exactTime");
  exactTimeElement.textContent = generateExactTime();
}

// Call the updateExactTime function every second
setInterval(updateExactTime, 1000);

function generateFormattedDate() {
  var now = new Date();

  // Define the month names
  var monthNames = [
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

  // Get the date components
  var month = monthNames[now.getMonth()];
  var day = now.getDate();
  var year = now.getFullYear();

  // Define the day names
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day of the week
  var dayOfWeek = dayNames[now.getDay()];

  // Format the date
  var formattedDate =
    month.toUpperCase() +
    " " +
    day +
    ", " +
    year +
    "<br>" +
    dayOfWeek.toUpperCase();

  return formattedDate;
}

function updateDate() {
  var dateElement = document.getElementById("exactDate");
  dateElement.innerHTML = generateFormattedDate();
}

// Update the date every second (1000 milliseconds)
setInterval(updateDate, 1000);

function goBack() {
  history.back();
}

function calculateWorkHours(timeInValue, timeOutValue) {
  // Convert time strings to Date objects
  const timeInDate = new Date(`2000-01-01T${timeInValue}`);
  const timeOutDate = new Date(`2000-01-01T${timeOutValue}`);

  // Calculate the time difference in milliseconds
  let timeDiff = timeOutDate - timeInDate;

  // Handle overnight work scenario
  if (timeDiff < 0) {
    const nextDay = new Date(timeOutDate);
    nextDay.setDate(nextDay.getDate() + 1);
    timeDiff = nextDay - timeInDate;
  }

  // Convert time difference from milliseconds to hours
  const hours = timeDiff / (1000 * 60 * 60);

  // Round down to the nearest whole hour or half-hour
  const roundedHours = Math.floor(hours * 2) / 2;

  // Display the result
  return roundedHours;
}

function roundHourRate(rate) {
  const roundedRate = Math.floor(rate * 2) / 2;
  return roundedRate;
}

function roundDownTime(timeStr) {
  // Parse the time string to get hours and minutes
  const [time, meridian] = timeStr.split(" ");
  const [hour, minute] = time.split(":").map(Number);

  // Calculate the decimal representation of the time
  const decimalTime = hour + minute / 60;

  // Round down to the nearest 0, 0.5, or 1
  const roundedTime = Math.floor(decimalTime * 2) / 2;

  return roundedTime;
}

function formatDateToInputValue(dateString) {
  // Convert the date string to a Date object
  const dateObject = new Date(dateString);

  // Get the year, month, and day from the Date object
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");

  // Format the date in "YYYY-MM-DD" format
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

function formatTimeToInputValue(timestamp) {
  const date = new Date(timestamp);

  // Add the timezone offset to the timestamp
  date.setUTCHours(date.getUTCHours() + 8);
  // date.setUTCMinutes(date.getUTCMinutes() + 23);

  // Retrieve the hour and minute components
  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();
  var minutes_set = 0;

  if (minutes >= 0 && minutes <= 22) {
    // Code to be executed if minutes is between 0 and 22
    if (hours >= 0 && minutes <= 22) {
      hours = parseInt(hours) + 24 - 1;
      minutes_set = parseInt(minutes) + 60 - 23;
    } else {
      hours = parseInt(hours) - 1;
      minutes_set = parseInt(minutes) + 60 - 23;
    }
  } else {
    minutes_set = parseInt(minutes) - 23;
  }

  // Format the time string
  const timeString =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes_set.toString().padStart(2, "0");
  return timeString;
}

// Get all input elements of type "number"
const numberInputs = document.querySelectorAll('input[type="number"]');

// Loop through each input and set the "step" attribute
numberInputs.forEach((input) => {
  input.setAttribute("step", "0.01"); // Set the desired step value
});

function formatNumber(number) {
  return number.toLocaleString("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
function formatNumber2(number) {
  return number.toLocaleString("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

function addConfirmationListener(form, validateFunction = null) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    if (window.confirm("Are you sure you want to submit the data?")) {
      if (validateFunction) {
        if (!validateFunction()) {
          return; // Do not submit if validation fails
        }
      }

      spinner.style.display = "block";
      form.submit(); // Use the form's submit() method
    } else {
      // If user clicks Cancel, do nothing or perform other actions
      // For example, you can reset form fields or show a message
    }
  });
}

// Example of a custom validation function for a form
function customValidation() {
  const remaining = parseInt(document.getElementById("rem_weight").value);

  if (remaining !== 0) {
    alert("Batch Weight must be 0 to submit the form.");
    return false;
  }

  return true;
}

function customValidation2() {
  const remaining = parseInt(document.getElementById("remaining").value);

  if (remaining !== 0) {
    alert("Remaining budget must be 0 to submit the form.");
    return false;
  }

  return true;
}

function customValidation3() {
  const data_counter = document.getElementById("data_counter");
  const fund_sources = document.querySelectorAll(`.fund_source`);
  const fund_source_amounts = document.querySelectorAll(`.fund_source_amount`);
  const fund_amounts = document.querySelectorAll(`.fund_amount`);
  const fund_allocations = document.querySelectorAll(`.fund_allocation`);
  let validationFailed = false;
  fund_sources.forEach((fund_source, i) => {
    if (
      fund_source.value == "OTHERS" &&
      fund_allocations[i].value == "OTHERS"
    ) {
      alert("Invalid Transaction!");
      validationFailed = true; // Set the flag to indicate validation failure
    }
    if (fund_source.value !== "BANK" && fund_source.value !== "OTHERS") {
      if (
        parseFloat(fund_amounts[i].value) >
        parseFloat(fund_source_amounts[i].value)
      ) {
        alert(
          "Invalid Transaction! Fund Amount is Greater than Fund Source Amount."
        );
        validationFailed = true; // Set the flag to indicate validation failure
      }
    }
  });
  return !validationFailed;
}

function customValidation4() {
  const available_funds = parseFloat(
    document.querySelector("#budget_form #available_funds").value
  );
  const budget = parseFloat(
    document.querySelector("#budget_form #budget").value
  );

  if (budget > available_funds) {
    alert("Invalid Transaction! Insufficient Funds.");

    return false;
  }

  return true;
}

var form_elements = document.querySelectorAll("form");

form_elements.forEach(function (form) {
  if (form.id === "sorting_form_id") {
    addConfirmationListener(form, customValidation);
  } else if (form.id === "liquidation_form") {
    addConfirmationListener(form, customValidation2);
  } else if (form.id === "fund_transfer_form_id") {
    addConfirmationListener(form, customValidation3);
  } else if (form.id === "budget_form") {
    addConfirmationListener(form, customValidation4);
  } else {
    addConfirmationListener(form);
  }
});

function getWeekNumber(dateString) {
  const date = new Date(dateString);

  if (isNaN(date)) {
    throw new Error("Invalid date format");
  }

  const currentDate = new Date(date);
  currentDate.setHours(0, 0, 0, 0);
  currentDate.setDate(currentDate.getDate() + 4 - (currentDate.getDay() || 7));
  const yearStart = new Date(currentDate.getFullYear(), 0, 1);
  const weekNumber = Math.ceil(((currentDate - yearStart) / 86400000 + 1) / 7);

  return weekNumber;
}

function getYearFromDate(dateString) {
  const date = new Date(dateString);

  if (isNaN(date)) {
    throw new Error("Invalid date format");
  }

  const year = date.getFullYear();
  return year;
}

function getWeekDates(dateString) {
  const date = new Date(dateString);

  if (isNaN(date)) {
    throw new Error("Invalid date format");
  }

  const currentDate = new Date(date);
  const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)

  // Calculate the date of the Monday of the same week
  currentDate.setDate(currentDate.getDate() - dayOfWeek + 1);

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + i);
    weekDates.push(newDate);
  }

  return weekDates;
}

function getWeekDates2(dateString) {
  const date = new Date(dateString);

  if (isNaN(date)) {
    throw new Error("Invalid date format");
  }

  const currentDate = new Date(date);
  const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)

  // Calculate the date of the Saturday of the same week
  currentDate.setDate(currentDate.getDate() - dayOfWeek - 1);

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + i);
    weekDates.push(newDate);
  }

  return weekDates;
}

function findTextInArray(textArray, targetText) {
  for (let q = 0; q < textArray.content[0].length; q++) {
    if (textArray.content[0][q] == targetText) {
      return q; // Found the target text, return its index
    }
  }
  return -1; // Target text not found in the array
}
function findTextInArray2(textArray, targetText) {
  for (let q = 0; q < textArray.length; q++) {
    if (textArray[q] == targetText) {
      return q; // Found the target text, return its index
    }
  }
  return -1; // Target text not found in the array
}

function getNumberOfDays(month, year, cutoffPeriod) {
  // Create an array to map month names to month numbers
  const monthArray = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  // Ensure that the month parameter is a string before converting to uppercase
  if (typeof month === "string") {
    month = month.toUpperCase();
  } else {
    return "Invalid month"; // Return an error message for invalid input
  }

  // Convert the month name to a month number (case-insensitive)
  const monthNumber = monthArray.findIndex((m) => m.toUpperCase() === month);

  // Check if the month name is valid
  if (monthNumber === -1) {
    return "Invalid month";
  }

  // Create a Date object using the month number and year
  const date = new Date(year, monthNumber);

  // Determine the start and end dates based on the cutoff period
  let startDate, endDate;
  if (cutoffPeriod === "1ST CUT OFF") {
    startDate = new Date(year, monthNumber, 11);
    endDate = new Date(year, monthNumber, 25);
  } else if (cutoffPeriod === "2ND CUT OFF") {
    const nextMonth = monthNumber === 11 ? 0 : monthNumber + 1;
    const nextYear = monthNumber === 11 ? year + 1 : year;
    startDate = new Date(nextYear, monthNumber, 26);
    endDate = new Date(nextYear, nextMonth, 10);
  } else {
    return "Invalid cutoffPeriod"; // Return an error message for invalid input
  }

  // Calculate the number of days between startDate and endDate
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
  const daysDifference = Math.round((endDate - startDate) / oneDay);

  return daysDifference + 1; // Include both the start and end days
}

function getDayNamesForCutoffPeriod(month, year, cutoffPeriod) {
  const monthArray = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  if (typeof month === "string") {
    month = month.toUpperCase();
  } else {
    return ["Invalid month"]; // Return an array with an error message for invalid input
  }

  const monthNumber = monthArray.findIndex((m) => m.toUpperCase() === month);

  if (monthNumber === -1) {
    return ["Invalid month"];
  }
  let startDate, endDate;

  if (cutoffPeriod === "2ND CUT OFF") {
    startDate = new Date(year, monthNumber, 11);
    endDate = new Date(year, monthNumber, 25);
  } else if (cutoffPeriod === "1ST CUT OFF") {
    if (monthNumber === 0) {
      startDate = new Date(year, monthNumber - 1, 26);
      endDate = new Date(year, monthNumber, 10);
    } else {
      startDate = new Date(year, monthNumber - 1, 26);
      endDate = new Date(year, monthNumber, 10);
    }
  } else {
    return ["Invalid cutoffPeriod"];
  }

  const dayNames = [];

  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const options = { weekday: "long" };
    const dayName = new Intl.DateTimeFormat("en-US", options).format(
      currentDate
    );
    dayNames.push(dayName);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dayNames;
}

function getDatesForCutoffPeriod(month, year, cutoffPeriod) {
  const monthArray = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  if (typeof month === "string") {
    month = month.toUpperCase();
  } else {
    return ["Invalid month"]; // Return an array with an error message for invalid input
  }

  const monthNumber = monthArray.findIndex((m) => m.toUpperCase() === month);

  if (monthNumber === -1) {
    return ["Invalid month"];
  }

  let startDate, endDate;

  if (cutoffPeriod === "2ND CUT OFF") {
    startDate = new Date(year, monthNumber, 11);
    endDate = new Date(year, monthNumber, 25);
  } else if (cutoffPeriod === "1ST CUT OFF") {
    if (monthNumber === 0) {
      startDate = new Date(year, monthNumber - 1, 26);
      endDate = new Date(year, monthNumber, 10);
    } else {
      startDate = new Date(year, monthNumber - 1, 26);
      endDate = new Date(year, monthNumber, 10);
    }
  } else {
    return ["Invalid cutoffPeriod"];
  }

  const formattedDates = [];

  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    formattedDates.push(formatDate(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return formattedDates;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getCutoffPeriodAndMonth(cutoffNumber) {
  if (
    typeof cutoffNumber !== "number" ||
    cutoffNumber < 1 ||
    cutoffNumber > 24
  ) {
    return ["Invalid input"]; // Return an array with an error message for invalid input
  }

  const months = [
    "JANUARY",
    "JANUARY",
    "FEBRUARY",
    "FEBRUARY",
    "MARCH",
    "MARCH",
    "APRIL",
    "APRIL",
    "MAY",
    "MAY",
    "JUNE",
    "JUNE",
    "JULY",
    "JULY",
    "AUGUST",
    "AUGUST",
    "SEPTEMBER",
    "SEPTEMBER",
    "OCTOBER",
    "OCTOBER",
    "NOVEMBER",
    "NOVEMBER",
    "DECEMBER",
    "DECEMBER",
  ];

  const cutoffPeriods = [
    "1ST CUT OFF",
    "2ND CUT OFF",
    "1ST CUT OFF",
    "2ND CUT OFF",
    "1ST CUT OFF",
    "2ND CUT OFF",
    "1ST CUT OFF",
    "2ND CUT OFF",
    "1ST CUT OFF",
    "2ND CUT OFF",
    "1ST CUT OFF",
    "2ND CUT OFF",
    "1ST CUT OFF",
    "2ND CUT OFF",
    "1ST CUT OFF",
    "2ND CUT OFF",
    "1ST CUT OFF",
    "2ND CUT OFF",
    "1ST CUT OFF",
    "2ND CUT OFF",
    "1ST CUT OFF",
    "2ND CUT OFF",
    "1ST CUT OFF",
    "2ND CUT OFF",
  ];

  return [cutoffPeriods[cutoffNumber - 1], months[cutoffNumber - 1]];
}

function getDatesInWeek(year, weekNumber) {
  // Check if the input year and week number are valid
  if (
    typeof parseInt(year) !== "number" ||
    typeof parseInt(weekNumber) !== "number" ||
    weekNumber < 1 ||
    weekNumber > 53
  ) {
    return ["Invalid input"];
  }

  // Create a date object for January 1st of the specified year
  const januaryFirst = new Date(year, 0, 1);

  // Calculate the day of the week for January 1st (0 for Sunday, 1 for Monday, etc.)
  const januaryFirstDay = januaryFirst.getDay();

  // Calculate the date for the first day of the specified week
  let firstDayOfWeek = new Date(
    year,
    0,
    1 + (weekNumber - 1) * 7 - januaryFirstDay
  );

  // Adjust to make Monday the first day
  firstDayOfWeek.setDate(
    firstDayOfWeek.getDate() + (firstDayOfWeek.getDay() === 0 ? 1 : -1)
  );

  // Create an array to store the formatted dates in the week
  const formattedDatesInWeek = [];

  // Calculate the dates for each day in the week and format them
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(firstDayOfWeek);
    currentDate.setDate(firstDayOfWeek.getDate() + i);
    formattedDatesInWeek.push(formatDate(currentDate));
  }

  return formattedDatesInWeek;
}

function formatMonth(dateString) {
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const monthIndex = date.getMonth();

  if (monthIndex >= 0 && monthIndex < 12) {
    return months[monthIndex];
  } else {
    return "Invalid Month";
  }
}

function weekNumberToPrevMonthAbbreviation(weekNumber) {
  // Create a Date object based on the week number and assume it's in the current year
  var date = new Date(new Date().getFullYear(), 0, (weekNumber - 1) * 7 + 1);

  // Subtract 1 month from the date
  date.setMonth(date.getMonth() - 1);

  // Get the month abbreviation (e.g., "JAN", "FEB", etc.)
  var monthAbbreviation = date
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();

  return monthAbbreviation;
}

function amountInWords(amount) {
  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function convertToWords(num) {
    if (num === 0) {
      return "";
    } else if (num < 10) {
      return units[num];
    } else if (num == 10) {
      return "Ten";
    } else if (num < 20) {
      return teens[num - 10];
    } else {
      const digit = num % 10;
      const tenDigit = Math.floor(num / 10);
      return tens[tenDigit] + " " + units[digit];
    }
  }

  function convertGroupToWords(num) {
    if (num === 0) {
      return "";
    } else {
      return (
        convertToWords(Math.floor(num / 100)) +
        " Hundred " +
        convertToWords(num % 100)
      );
    }
  }

  function convertDecimalToWords(decimal) {
    const centavos = Math.round(decimal * 100);
    return convertGroupToWords(centavos) + " Centavos";
  }

  if (amount === 0) {
    return "Zero Pesos";
  }

  const pesos = Math.floor(amount);
  const centavos = amount - pesos;

  let result = "";
  if (pesos > 0) {
    result += convertGroupToWords(pesos) + " Pesos";
  }

  if (centavos > 0) {
    result += " and " + convertDecimalToWords(centavos);
  }

  return result.trim();
}

function convertTo24HourFormat(time) {
  const [timePart, modifier] = time.split(" ");
  let [hours, minutes] = timePart.split(":");

  if (modifier === "PM" && hours !== "12") {
    hours = parseInt(hours, 10) + 12;
  } else if (modifier === "AM" && hours === "12") {
    hours = "00";
  }

  return `${hours}:${minutes}:00`;
}

function convertTo24HourFormat(time) {
  const [timePart, modifier] = time.split(" ");
  let [hours, minutes] = timePart.split(":");

  if (modifier === "PM" && hours !== "12") {
    hours = parseInt(hours, 10) + 12;
  } else if (modifier === "AM" && hours === "12") {
    hours = "00";
  }

  return `${hours}:${minutes}:00`;
}

function calculateDuration(start, end) {
  // Convert times to 24-hour format
  const startTime24 = convertTo24HourFormat(start);
  const endTime24 = convertTo24HourFormat(end);

  // Parse the start and end times into Date objects
  let startTime = new Date(`1970-01-01T${startTime24}`);
  let endTime = new Date(`1970-01-01T${endTime24}`);

  // If the end time is before the start time, add 24 hours to the end time
  if (endTime < startTime) {
    endTime.setDate(endTime.getDate() + 1);
  }

  // Calculate the difference in milliseconds
  const durationMs = endTime - startTime;

  // Convert the difference to hours with a decimal fraction for minutes
  const hours = durationMs / (1000 * 60 * 60);

  // Return the duration as a decimal value representing the total hours
  return hours.toFixed(2); // Rounds to 2 decimal places
}

// Function to get the day of the week, considering time zone adjustment
function getDayOfWeek(dateString) {
  var daysInWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Create a date object from the ISO string
  const date = new Date(dateString);

  // Add the offset (e.g., 8 hours) to the date
  date.setHours(date.getHours() + 8);

  // Get the day index (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayIndex = date.getDay();

  return daysInWeek[dayIndex];
}

function removeEmptyKey(obj) {
  for (const key in obj) {
    if (key === "") {
      delete obj[key]; // Remove the key-value pair if the key is an empty string
    }
  }
  return obj;
}

// You might need to call adjustLayout whenever the content changes dynamically
// For example, after adding or removing li elements.

// const forms_input = document.querySelectorAll('form'); // Select the spinner globally
// const spinner = document.querySelector('.spinner'); // Select the spinner globally

// forms_input.forEach(form => {
//   const submitBtn = form.querySelector('button[type="submit"]');

//   submitBtn.addEventListener('click', (event) => {
//       // Prevent the default form submission
//       event.preventDefault();

//       // Show the spinner
//       spinner.style.display = "block";

//       // You may want to perform additional actions here, such as AJAX requests or form validation.

//       // For the sake of example, here's a simulated successful form submission
//       setTimeout(() => {
//           // Hide the spinner (simulated delay of 2 seconds)
//           spinner.style.display = "none";

//           // Submit the form (optional, remove if you're using AJAX)
//           form.submit();
//       }, 2000);
//   });
// });
