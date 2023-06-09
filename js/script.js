
function recipes(){
}


//changing of words
// script.js

// Array of words to cycle through
const words = [
   { text: 'Learn...', color: '#8B8000' },
   { text: 'Connect...', color: '#c65102' },
   { text: 'Discover...', color: 'red' }
];

// Get the changing-text element
const changingText = document.getElementById('changing-text');

// Index to keep track of the current word
let currentIndex = 0;

// Function to change the word periodically
function changeWord() {
  const { text, color } = words[currentIndex];
  changingText.innerHTML = `A place where food lovers unite to <span class="changing-word" style="color: ${color}">${text}</span>`;

  // Increment the index for the next word
  currentIndex = (currentIndex + 1) % words.length;
}

// Call the changeWord function every 1 seconds (1000 milliseconds)
setInterval(changeWord, 1000);