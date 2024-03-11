// Check if HTML elements exist
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const loginForm = document.querySelector('#login-form');

if (!sign_in_btn || !sign_up_btn || !container || !loginForm) {
  console.error('One or more HTML elements not found.');
}

// Add event listeners if elements exist
if (sign_up_btn && sign_in_btn) {
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
} else {
  console.error('Sign-in or sign-up button not found.');
}

// Check LocalStorage support
if (typeof Storage === "undefined") {
  console.error('LocalStorage is not supported.');
}

// Check if users data is stored correctly
if (!localStorage.getItem('users')) {
  console.error('Users data not found in LocalStorage.');
}

// Form submission event listener
if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = loginForm.querySelector('input[name="username"]').value;
    const password = loginForm.querySelector('input[name="password"]').value;

    const users = JSON.parse(localStorage.getItem('users'));
    const user = users[username];

    if (user && user.password === password) {
      // User logged in successfully
      localStorage.setItem('currentUser', JSON.stringify(user));
      if (user.role === 'admin') {
        window.location.href = 'dashboard.html';
      } else {
        window.location.href = 'Blogpanel.html';
      }
    } else {
      alert('Invalid username or password');
    }
  });
} else {
  console.error('Login form not found.');
}
