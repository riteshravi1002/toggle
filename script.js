const toggleButton = document.getElementById('toggle-btn');

// Track the current background state
let isDarkMode = false;

toggleButton.addEventListener('click', () => {
  // Toggle the background color
  if (isDarkMode) {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'black';
  } else {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'red';
  }
  // Toggle the mode state
  isDarkMode = !isDarkMode;
});
