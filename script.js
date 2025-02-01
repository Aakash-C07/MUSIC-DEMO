// Select elements by their IDs
const ids = ['heading1', 'heading2', 'heading3'];

// Function to handle scroll and toggle visibility
function handleScroll() {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('show'); // Add 'show' when in view
      } else {
        el.classList.remove('show'); // Remove 'show' when out of view
      }
    }
  });
}

// Attach the scroll event
window.addEventListener('scroll', handleScroll);

// Trigger on page load to check visible elements
window.addEventListener('load', handleScroll);



// Function to open the login popup
function openPopup() {
  document.getElementById('loginPopup').style.display = 'flex'; // Display overlay as flex
}

// Function to close the login popup
function closePopup() {
  document.getElementById('loginPopup').style.display = 'none'; // Hide overlay
}

// Function to open the signup popup
function openPopups() {
  document.getElementById('loginPopups').style.display = 'flex'; // Display overlay as flex
}

// Function to close the signup popup
function closePopups() {
  document.getElementById('loginPopups').style.display = 'none'; // Hide overlay
}

// Function to open the login success popup
function openPopups1() {
  const urlParams = new URLSearchParams(window.location.search);

  // Check if login=success exists in the URL and prevent opening the popup
  if (urlParams.has('login') && urlParams.get('login') === 'success') {
    return; // Don't open the popup if login is successful
  }

  document.getElementById('as').style.display = 'flex'; // Display overlay as flex
}

// Function to close the login success popup

function ticketopen() {
  document.getElementById('loginPopups1').style.display = 'flex'; // show overlay
}

function closePopups1() {
  document.getElementById('loginPopups1').style.display = 'none'; // Hide overlay
}

// Function to open the signup success popup
function openSignupSuccessPopup() {
  document.getElementById('signupSuccessPopup1').style.display = 'flex'; // Display overlay as flex
}

// Function to close the signup success popup
function closeSignupSuccessPopup() {
  document.getElementById('signupSuccessPopup1').style.display = 'none'; // Hide overlay
}

// Closing signup success popup and opening login
function closing() {
  document.getElementById('signupSuccessPopup1').style.display = 'none';
  document.getElementById('loginPopup').style.display = 'flex';
}

// Function to open the login success popup
function openLoginSuccessPopup() {
  const popup = document.getElementById('as');
  popup.style.display = 'flex'; // Show login success popup

  // Automatically redirect after 3 seconds
  setTimeout(() => {
    window.location.href = 'event.html'; // Redirect after 3 seconds
  }, 3000);
}

// Function to open error popup
function openErrorPopup(message) {
  document.getElementById('errorPopup').style.display = 'flex';
  document.querySelector('#errorPopup .errorMsg').textContent = message;
}

// Function to close the error popup
function closeErrorPopup() {
  document.getElementById('errorPopup').style.display = 'none';
}

// Check URL parameters for success and error messages
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const newUrl = window.location.origin + window.location.pathname;


  // Show login success popup if login=success is in the URL
  if (urlParams.has('login') && urlParams.get('login') === 'success') {
    openLoginSuccessPopup(); // Open the login success popup
    history.replaceState(null, "", newUrl); // Remove query parameters from URL
  }

  // Show error popup if login=error is in the URL
  if (urlParams.has('login') && urlParams.get('login') === 'error') {
    openErrorPopup('Invalid credentials. Please try again.'); // Show error message for login failure
    history.replaceState(null, "", newUrl); // Remove query parameters from URL
  }

  // Other checks (for signup, errors, etc.)
  if (urlParams.has('signup') && urlParams.get('signup') === 'success') {
    openSignupSuccessPopup(); // Open the signup success popup
    history.replaceState(null, "", newUrl); // Remove query parameters from URL
  }

  if (urlParams.has('signup') && urlParams.get('signup') === 'error') {
    openErrorPopup('There was an error with your signup. Please try again.'); // Show error message for signup failure
    history.replaceState(null, "", newUrl); // Remove query parameters from URL
  }





  if (urlParams.has('ticket') && urlParams.get('ticket') === 'success') {
    openticketpopup(); // Open the signup success popup
    history.replaceState(null, "", newUrl); // Remove query parameters from URL
  }

  if (urlParams.has('ticket') && urlParams.get('ticket') === 'error') {
    openErrorPopup('There was an error with your booking. Please try again.'); // Show error message for signup failure
    history.replaceState(null, "", newUrl); // Remove query parameters from URL
  }
};

function openticketpopup() {
  document.getElementById('ast').style.display = 'flex'; // Display overlay as flex
}

function toggleMenu() {
  document.querySelector(".list-container").classList.toggle("show");
}


