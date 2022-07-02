// Object to store user details

let userDetailsDatabase = {};

// Function to obtain user details

function getUserDetails() {
  
  // Username
  let userName = prompt("Enter your username");
  
  if (userName == null || userName == "") {
    return;
  }

  function validateUsername(username) {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
  while (!validateUsername(userName)) {
    userName = prompt("Username must be less than 10 and greater than 0");
  }

  userDetailsDatabase['userName'] = userName;
  
  // Email Address
  let email = prompt("Enter your email");
  
  if (email == null || email == "") {
    return;
  }

  function validateEmail(email) {
    const emailCheck =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailCheckResult = emailCheck.test(email);
    if (emailCheckResult) {
      return true;
    }
    else {
      return false;
    }
  }
  
  while (!validateEmail(email)) {
    email = prompt("Please enter a valid email address!");
  }
  
  userDetailsDatabase['email'] = email;

  // phone Number
  let phoneNumber = prompt("Enter your phone number");
  
  if (phoneNumber == null || phoneNumber == "") {
    return;
  }

  function validatePhoneNumber (phoneNumber) {
    if (phoneNumber.length === 11) {
      return true;
    }
    else {
      return false;
    }
  }
  
  while (!validatePhoneNumber(phoneNumber)) {
    phoneNumber = prompt("Phone number must be 11 digits!");
  }
  
  userDetailsDatabase['phoneNumber'] = phoneNumber;

  // PASSWORD
  let password = prompt("Enter your password");
  
  if (password == null || password == "") {
    return;
  }

  function validatePassword(password) {
    if (password.length < 6) {
      return false;
    }
    else {
      return true;
    }
  }
  
  while (!validatePassword(password)) {
    password = prompt("Password must be at least 6 characters!");
  }
  
  userDetailsDatabase['password'] = password;

  // Confirm Password
  let confirmPassword = prompt("Confirm your password");
  
  if (confirmPassword == null || confirmPassword == "") {
    return;
  }

  function validateConfirmPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
      return false;
    }
    else {
      return true;
    }
  }
  
  while (!validateConfirmPassword(password, confirmPassword)) {
    confirmPassword = prompt("Confirm password do not match password, try again!");
  }

}

// Display user details
function displayUserDetails() {
  alert(`Your Details\n\nUsername: ${userDetailsDatabase.userName}\nEmail: ${userDetailsDatabase.email}\nPhone Number: ${userDetailsDatabase.phoneNumber}`);
}
