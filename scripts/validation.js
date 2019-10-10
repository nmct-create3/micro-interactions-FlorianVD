let email = {},
    password = {},
    signInButton;

const isEmpty = function(fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const isValidPassword = function(value) {
  return value.length > 1;
}

const addErrors = function(field) {
  field.classList.add('has-error');
}

const removeErrors = function(field) {
  field.classList.remove('has-error');
}

const doubleCheckEmail = function(e) {
  if (isValidEmailAddress(e.target.value)) {
    removeErrors(email.field);
    email.input.removeEventListener('input', doubleCheckEmail);
  }
}

const enableListeners = function() {
  email.input.addEventListener('blur', function(e){
    if (isEmpty(e.target.value))
      addErrors(email.field);
    else if(!isValidEmailAddress(e.target.value)) {
      addErrors(email.field);
      email.errorMessage.innerHTML = 'Invalid email address';
      email.input.addEventListener('input', doubleCheckEmail);
    }
    else
      email.field.classList.remove('has-error')
  });

  password.input.addEventListener('blur', function(e) {
    if (isEmpty(e.target.value))
      addErrors(password.field);
    else if(!isValidPassword(e.target.value)) {
      addErrors(password.field);
      password.errorMessage.innerHTML = 'Invalid password'; 
    } else
      password.field.classList.remove('has-error')
  });

  signInButton.addEventListener('click', function(e) {
    console.log('clicked');
  });
} 

const isValidEmailAddress = function(emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const getDOMElements = (selector) => {
  email.field = document.querySelector('.js-username-field');
  email.input = document.querySelector('.js-username-input');
  email.errorMessage = document.querySelector('.js-username-error-message');

  password.field = document.querySelector('.js-password-field');
  password.input = document.querySelector('.js-password-input');
  password.errorMessage = document.querySelector('.js-password-error-message');

  signInButton = document.querySelector('.js-sign-in-button');
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM is ready to roll... 😒');
  getDOMElements();
  enableListeners();
});