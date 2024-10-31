  // Text content of the letter
const letterContent = `Dear Love,

Words cannot express how much you mean to me. Every moment with you is like a dream come true, and I cherish every second we spend together.

Thank you for bringing light and happiness into my life. I look forward to creating more beautiful memories with you.

Forever yours,
Your Name`;

// Selecting elements
const letterElement = document.getElementById("letter-content");
const cursorElement = document.getElementById("cursor");

// Typewriter effect
let index = 0;
function typeLetter() {
    if (index < letterContent.length) {
        letterElement.innerHTML += letterContent.charAt(index);
        index++;
        setTimeout(typeLetter, 100); // Adjust speed of typing here
    } else {
        cursorElement.style.display = "none"; // Hide cursor at end
    }
}

// Start typewriter effect on page load
window.onload = typeLetter;
