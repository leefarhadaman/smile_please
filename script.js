// Array of random quotes
const quotes = [
    "Keep smiling! You never know who might be falling in love with your smile.",
    "You're never fully dressed without a smile.",
    "Your smile is contagious! Spread it around.",
    "Every smile makes you a day younger.",
    "Smile, it's the key that fits the lock of everybody's heart.",
    "Smile at strangers and you just might change a life.",
    "A smile is happiness you'll find right under your nose.",
    "Your smile is your best accessory.",
    "Life is short. Smile while you still have teeth!",
    "You're never fully dressed without a smile, and a little bit of kindness goes a long way.",
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
}

// Call the function to display a random quote when the page loads
displayRandomQuote();
