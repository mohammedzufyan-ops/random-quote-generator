const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal.",
    "Dream big. Start small. Act now.",
    "Push yourself, because no one else will.",
    "Every moment is a fresh beginning."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}