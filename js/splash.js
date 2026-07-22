const messages = [
    "Initializing BankBugs|FX...",
    "Loading Trading systems...",
    "Preparing Dashboard...",
    "Loading Member content...",
    "Syncing Platform...",
    "Ready..."
];

const loadingText = document.getElementById("loading-text");
let index = 0;

// Set initial first text string explicitly
if (loadingText) {
    loadingText.textContent = messages[0];
}

// Tick evenly through all 6 status states across the 5-second duration (5000ms / 5 intervals = 1000ms)
const interval = setInterval(() => {
    index++;
    if (index < messages.length && loadingText) {
        loadingText.textContent = messages[index];
    }
}, 1000);

// Unified 5-Second Institutional Redirect Chain
setTimeout(() => {
    clearInterval(interval);
    
    // Initiate premium fade transition out of splash workspace
    document.body.style.transition = "opacity 0.8s ease-in-out";
    document.body.style.opacity = "0";

    // Wait for opacity fade layout animation window to finish before routing window location
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 800);

}, 5000); // Absolute 5-Second Total Runtime Limit
