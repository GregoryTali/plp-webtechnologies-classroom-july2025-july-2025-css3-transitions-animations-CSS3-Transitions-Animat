// =================== Box Animation ===================
// Function to toggle animation class
function animateBox() {
    const box = document.getElementById('box');
    box.classList.toggle('animate');
}

// Event listener for box animation
document.getElementById('animateBtn').addEventListener('click', animateBox);

// =================== Calculator Function Demo ===================
// Function to add two numbers
function addNumbers(a, b) {
    return a + b; // returns sum
}

// Event listener for calculator
document.getElementById('calculateBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
    } else {
        const sum = addNumbers(num1, num2); // local scope variables used
        document.getElementById('result').textContent = `Result: ${sum}`;
    }
});

// =================== Notes on Scope ===================
// 'animateBox' and 'addNumbers' demonstrate function scope.
// Variables inside the event listener are local and not accessible outside.
// Global variables can be added if needed, but using local scope reduces conflicts.
