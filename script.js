const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
  let isValid = true;

  // Check if name input is empty
  if (nameInput.value.trim() === '') {
    isValid = false;
    document.getElementById('name').style.borderColor = 'red';
  } else {
    nameInput.style.borderColor = '';
  }

  // Check if email input is empty or invalid
  if (emailInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailInput.value)) {
    isValid = false;
    emailInput.style.borderColor = 'red';
  } else {
    emailInput.style.borderColor = '';
  }

  // If form is not valid, prevent submission
  if (!isValid) {
    event.preventDefault();
  }
});


const darkModeBtn = document.getElementById('dark-mode-btn');
const elementsToToggle = document.querySelectorAll('body, h1, p');

darkModeBtn.addEventListener('click', () => {
  elementsToToggle.forEach(element => {
    element.classList.toggle('dark-mode');
  });
});
