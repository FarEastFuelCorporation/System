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
      <input class="form-control" autocomplete="off" name="supporting_document_input" required type="text" placeholder="Enter Document #"><br>        
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
