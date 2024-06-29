// Function to populate fields
function populateFields() {
    // Replace these selectors and values with your actual target fields and desired values
    document.querySelector('#app_passportNo').value = 'PASSPORT_NO';
    document.querySelector('#fileAckNumber').value = 'FILE_ACK_NO';
  }
  
  // Execute when the page is fully loaded
  window.addEventListener('load', populateFields);