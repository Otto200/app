document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    const bottomLinks = document.querySelectorAll(".bottom-nav-item");

    // UI Toggle Controller
    function toggleSidebar() {
        if (window.innerWidth <= 768) {
            body.classList.toggle("sidebar-open");
        } else {
            body.classList.toggle("sidebar-closed");
        }
    }

    // Auto collapse layout on mobile screen interactions
    function closeSidebarOnMobile() {
        if (window.innerWidth <= 768 && body.classList.contains("sidebar-open")) {
            body.classList.remove("sidebar-open");
        }
    }

    // Event Listeners for explicit layout buttons
    if (sidebarToggleBtn) sidebarToggleBtn.addEventListener("click", toggleSidebar);
    if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", toggleSidebar);

    // Active state selection routing for Sidebar Panel
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            // Prevent default hash jump behaviors if needed
            sidebarLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
            closeSidebarOnMobile();
        });
    });

    // Active state selection routing for Bottom Navigation
    bottomLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            bottomLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// --- HTML5 CANVAS LIVE INTERACTIVE TRADING DESK PULSE ENGINE ---
(function() {
    const canvas = document.getElementById('liveTradingBg');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Dynamic tracking arrays
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const fontSize = 14;
    const columns = Math.floor(width / fontSize) + 1;
    const dropPositions = Array(columns).fill(1);
    
    // Custom color map palette matrix grouping matching your brand guidelines
    const colors = [
        "rgba(38, 38, 38, 0.15)",   /* Faded grid stream charcoal dark */
        "rgba(38, 38, 38, 0.2)",    /* Secondary workspace mid tone */
        "rgba(220, 38, 38, 0.25)",  /* Brand Red accent signal beam */
        "rgba(212, 175, 55, 0.35)"  /* Premium Brand Gold tracking flash */
    ];

    function draw() {
        // Creates a trailing fade memory effect on frames to simulate smooth glowing streaks
        ctx.fillStyle = "rgba(6, 6, 6, 0.08)";
        ctx.fillRect(0, 0, width, height);
        
        ctx.font = fontSize + "px monospace";
        
        for (let i = 0; i < dropPositions.length; i++) {
            // High efficiency pseudorandom logic picker selecting colors from the core array
            const randomChance = Math.random();
            let selectColor = colors[0]; 
            
            if (randomChance > 0.97) {
                selectColor = colors[3]; // Flash a bright Gold signal line
            } else if (randomChance > 0.92) {
                selectColor = colors[2]; // Inject a structural Red trade beam
            } else if (randomChance > 0.70) {
                selectColor = colors[1];
            }
            
            ctx.fillStyle = selectColor;
            
            // Draw discrete tracking markers along the layout vertical sequence array
            const textMarker = Math.random() > 0.5 ? "1" : "0";
            const xCoord = i * fontSize;
            const yCoord = dropPositions[i] * fontSize;
            
            ctx.fillText(textMarker, xCoord, yCoord);
            
            // Reset column marker positions back to peak heights randomly once hitting view threshold
            if (yCoord > height && Math.random() > 0.98) {
                dropPositions[i] = 0;
            }
            
            dropPositions[i]++;
        }
    }

    // Adaptive resizing callback loops updating memory limits automatically on terminal rotation
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        const newColumns = Math.floor(width / fontSize) + 1;
        while(dropPositions.length < newColumns) {
            dropPositions.push(1);
        }
    });

    // Production-ready framerate loop controller driving 30 updates per second
    setInterval(draw, 33);
})();
