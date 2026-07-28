document.addEventListener("DOMContentLoaded", () => {
    console.log("BankBugs | FX Conversion Landing Page Module Active.");

    // 1. DYNAMIC NAVIGATION ROUTING OVERLAY HOOK
    const loginButton = document.querySelector(".login-btn-pad");
    
    if (loginButton) {
        loginButton.addEventListener("click", (e) => {
            // Log interaction for analytics before proceeding to application splash screen
            console.log("Member routing sequence initiated via home entrance panel.");
        });
    }

    // 2. INFINITE CAROUSEL CLONE OVERLAY OPTIMIZATION
    // Automatically duplicates sliding blocks so the infinite track never shows gaps on massive screens
    const track = document.querySelector(".carousel-scroll-track");
    if (track) {
        const slides = Array.from(track.children);
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });
    }
});
