function getNumberOfDays(month, year, cutoffPeriod) {
  // Convert the month string to a JavaScript Date object
  const date = new Date(year, new Date(Date.parse(month + " 1, " + year)).getMonth());

  // Determine the start and end dates based on the cutoff period
  let startDate, endDate;
  if (cutoffPeriod === "1ST CUT OFF") {
    startDate = new Date(year, date.getMonth(), 11);
    endDate = new Date(year, date.getMonth(), 25);
  } else if (cutoffPeriod === "2ND CUT OFF") {
    const nextMonth = date.getMonth() === 11 ? 0 : date.getMonth() + 1;
    const nextYear = date.getMonth() === 11 ? year + 1 : year;
    startDate = new Date(nextYear, nextMonth, 26);
    endDate = new Date(nextYear, nextMonth, 10);
  } else {
    return "Invalid cutoffPeriod"; // Return an error message for invalid input
  }

  // Calculate the number of days between startDate and endDate
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
  const daysDifference = Math.round((endDate - startDate) / oneDay);

  return daysDifference + 1; // Include both the start and end days
}

// Example usage:
const month = "JANUARY"; // Month name in uppercase
const year = 2023;
const cutoffPeriod = "2ND CUT OFF";

const numberOfDays = getNumberOfDays(month, year, cutoffPeriod);
console.log(`Number of days in ${cutoffPeriod} of ${month} ${year}: ${numberOfDays}`);
