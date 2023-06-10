var navbarLinks = document.querySelectorAll('.navbar-center a');

navbarLinks.forEach(link => {
    link.addEventListener('click', event => {

    navbarLinks.forEach(navLink => {
        navLink.classList.remove('active');
    });

    link.classList.add('active');
    });
});

//changing of words

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

// Call the changeWord function every 3 seconds (3000 milliseconds)
setInterval(changeWord, 1000);

