function processWasteIDs(wasteIDs) {
    const counts = {};
  
    return wasteIDs.map((wasteID) => {
      if (!counts[wasteID]) {
        // First occurrence
        counts[wasteID] = 1;
        return wasteID + '1';
      } else {
        // Subsequent occurrences
        counts[wasteID]++;
        return wasteID + counts[wasteID];
      }
    });
  }
  
  // Example usage
  const wasteIDs = ['W2023021', 'W2023021', 'W2023021', 'W2023022', 'W2023022', 'W2023021', 'W2023021', 'W2023021', 'W2023021', 'W2023021', 'W2023021', 'W2023021', 'W2023021'];
  
  const result = processWasteIDs(wasteIDs);
  
  console.log(result);