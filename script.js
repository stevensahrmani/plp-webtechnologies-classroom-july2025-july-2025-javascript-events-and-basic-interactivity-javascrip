// Light/Dark Mode Togle
const themeToggle = development.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => { 
    document.body.classList.toggle('dark-theme');
});

// Counter
const counterElement = document.getElementsById('counter');
const incrementButton = document.getElementsById('increment-btn');
let counter = 0;
incrementButton.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
});

// Form Validation
const form = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    let valid = true;
    if (nameValue === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    } else {
        nameError.textContent = '';
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailValue === '') {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Email is invalid';
        valid = false;
    } else {
        emailError.textContent = '';
    }
    if (nameValue !== '' && emailRegex.test(emailValue)) {
        // Form is valid, proceed with submission (e.g., send data to server)
        console.log('Form submitted successfully');
    }
}