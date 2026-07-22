// Initialization engine specific to BankBugs Algorithmic systems
document.addEventListener("DOMContentLoaded", () => {
    const systemPanel = document.getElementById("tab-system");
    
    if (systemPanel) {
        console.log("BankBugs | FX 3-Tier Algorithmic System Panel deployed.");
        
        // Target execution console buttons
        systemPanel.addEventListener("click", (e) => {
            if (e.target.classList.contains("platform-action-btn")) {
                e.preventDefault();
                const systemName = e.target.getAttribute("data-system");
                console.log(`User triggered server gateway for system: ${systemName}`);
            }
        });
    }
});
