// Initialization engine specific to the Weekly Performance Audit Room
document.addEventListener("DOMContentLoaded", () => {
    const livePanel = document.getElementById("tab-live");
    
    if (livePanel) {
        console.log("BankBugs | FX Weekly Performance Audit Desk initialized.");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const livePanel = document.getElementById("tab-live");
    
    if (livePanel) {
        console.log("BankBugs | FX Performance Audit Terminal Active.");
        
        // Target all swipable image carousel boxes on the page
        const viewports = livePanel.querySelectorAll(".review-image-viewport");
        
        viewports.forEach(viewport => {
            let isDown = false;
            let startX;
            let scrollLeft;
            
            // Mouse button clicked down
            viewport.addEventListener("mousedown", (e) => {
                isDown = true;
                viewport.style.cursor = "grabbing";
                // Calculate position relative to the container
                startX = e.pageX - viewport.offsetLeft;
                scrollLeft = viewport.scrollLeft;
            });
            
            // Mouse leaves the bounding container box
            viewport.addEventListener("mouseleave", () => {
                isDown = false;
                viewport.style.cursor = "pointer";
            });
            
            // Mouse button released
            viewport.addEventListener("mouseup", () => {
                isDown = false;
                viewport.style.cursor = "pointer";
            });
            
            // Mouse dragging across the grid coordinates
            viewport.addEventListener("mousemove", (e) => {
                if (!isDown) return; // Halt script execution if mouse isn't clicked down
                e.preventDefault();
                
                const x = e.pageX - viewport.offsetLeft;
                const walk = (x - startX) * 1.5; // Controls the dragging movement multiplier speed
                viewport.scrollLeft = scrollLeft - walk;
            });
        });
    }
});
