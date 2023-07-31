// sidebar
const sidebarTabs = document.querySelectorAll(".sidebar ul li");
const mainSections = document.querySelectorAll(".main section");

sidebarTabs.forEach((tab ,index) => {
    tab.addEventListener("click", () => {
        sidebarTabs.forEach(tabs => {
            tabs.classList.remove("hover");
            mainSections.forEach((section, sectionIndex) => {
                if(sectionIndex === index){
                    section.setAttribute("style", "display: block")
                }
                else{
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
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };
    var utcPlus8Time = utcDate.toLocaleString('en-US', options);
    
    return utcPlus8Time;
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
    if(hours >= 0 && minutes <= 22){
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
  var period = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  if(hours == 24){
    hours = 12;
    period = "AM";
  } else{
    hours = hours % 12;
    hours = hours ? hours : 12;

  }
  // Format the time string
  const timeString = hours.toString().padStart(2, '0') + ':' + minutes_set.toString().padStart(2, '0') + ' ' + period;
  return timeString;
}

function convertTo24HourFormat(timeStr) {
  // Split the time string into hour, minute, and AM/PM components
  const [time, amPm] = timeStr.split(' ');

  // Convert hour and minute to integers
  const [hour, minute] = time.split(':').map(Number);

  // Convert to 24-hour format if PM
  let hour24 = hour;
  if (amPm.toLowerCase() === 'pm') {
    hour24 = (hour + 12) % 24;
  }

  // Return the formatted time
  return `${hour24.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
}

function convertToOrdinal(cardinal) {
    var lastDigit = cardinal % 10;
    var lastTwoDigits = cardinal % 100;
  
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return cardinal + "th";
    } else if (lastDigit === 1) {
      return cardinal + "st";
    } else if (lastDigit === 2) {
      return cardinal + "nd";
    } else if (lastDigit === 3) {
      return cardinal + "rd";
    } else {
      return cardinal + "th";
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
      "December"
    ];
  
    if (number >= 1 && number <= 12) {
      return months[number - 1];
    } else {
      return "Invalid month number";
    }
}
      
// General Code
function GetClientCategory(){
  const ClientCategoryValue = document.getElementById("type_of_waste").value;
  const sub_category_list = document.getElementById("sub_category");

  if(ClientCategoryValue === "HW"){
      const sub_category = `
      <label for="supporting_document">
          <i class="fa-solid fa-file-invoice"></i>
          <input type="hidden" name="supporting_document" value="Manifest Form #">
          Manifest Form #
      </label>
      <input class="form-control" autocomplete="off" name="supporting_document_input" type="text" placeholder="Enter Document #"><br>        
      <label for="ptt_form_no">
          <i class="fa-solid fa-file-invoice"></i>
          Permit to Transport Form #
      </label>
      <input class="form-control" autocomplete="off" name="ptt_form_no" required type="text" placeholder="Enter Document #"><br>        
      `
      sub_category_list.innerHTML = sub_category
  }
  else if(ClientCategoryValue === "RW" || ClientCategoryValue === "NHW"){
      const sub_category = `
      <label for="supporting_document">
        <i class="fa-solid fa-file-invoice"></i>
        Type of Document
      </label>
      <select class="form-control" name="supporting_document" id="supporting_document" required>
          <option value="">Select Type of Document</option>
          <option value="Sales Invoice #">Sales Invoice #</option>
          <option value="Sales Order #">Sales Order #</option>
          <option value="Delivery Receipt #">Delivery Receipt #</option>
          <option value="Scrap Withdrawal Form #">Scrap Withdrawal Form #</option>
      </select>
      <input class="form-control" autocomplete="off" name="supporting_document_input" required type="text" placeholder="Enter Document #"><br>        
      `
      sub_category_list.innerHTML = sub_category
  }
  else{
      const sub_category = ``
      sub_category_list.innerHTML = sub_category

  }
}

// Weight Calculator
var gross_weight = document.getElementById("gross_weight");
var tare_weight = document.getElementById("tare_weight");
var net_weight = document.getElementById("net_weight");

function weight_calculator(){
  net_weight.value = gross_weight.value - tare_weight.value;
}

function pushUniqueElement(arr, element) {
  if (!arr.includes(element)) {
    arr.push(element);
  }
}

// Set the idle time in milliseconds (e.g., 1 minutes)
const idleTime = 1 * 60 * 1000; // 1 minute

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
window.addEventListener('load', function() {
  resetIdleTimer();
});

// Add event listeners for user activity
window.addEventListener('mousemove', resetIdleTimer);
window.addEventListener('keydown', resetIdleTimer);
window.addEventListener('scroll', resetIdleTimer);
// Add any other relevant event listeners

function calculateTravelTime(departureDate, departureTime, arrivalDate, arrivalTime) {
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
    const pluralDays = days > 1 ? 'days' : 'day';
    const pluralHours = hours > 1 ? 'hrs' : 'hr';
    const pluralMinutes = minutes > 1 ? 'mins' : 'min';

    return `${days} ${pluralDays} ${hours} ${pluralHours} ${minutes} ${pluralMinutes}`;
  } else {
    let travelTime = '';

    // Determine the correct plural form for hours and minutes
    const pluralHours = hours > 1 ? 'hrs' : 'hr';
    const pluralMinutes = minutes > 1 ? 'mins' : 'min';

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
  const inputs = form.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = inputs[i].value.toUpperCase();
  }
}

// Get all the forms on the page
const forms = document.getElementsByTagName('form');

// Attach the event listener to each form
for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener('submit', capitalizeInputs);
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
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Get the date components
  var month = monthNames[now.getMonth()];
  var day = now.getDate();
  var year = now.getFullYear();

  // Define the day names
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Get the day of the week
  var dayOfWeek = dayNames[now.getDay()];

  // Format the date
  var formattedDate = month.toUpperCase() + " " + day + ", " + year + "<br>" + dayOfWeek.toUpperCase();

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
    const [time, meridian] = timeStr.split(' ');
    const [hour, minute] = time.split(':').map(Number);
    
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
      if(hours >= 0 && minutes <= 22){
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
    const timeString = hours.toString().padStart(2, '0') + ':' + minutes_set.toString().padStart(2, '0');
    return timeString;
  }
    
    
    
  