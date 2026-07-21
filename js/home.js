document.addEventListener('DOMContentLoaded', () => {
    // Selection Element References
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebarDashboard = document.getElementById('sidebar-dashboard');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-item');
    const claimButton = document.getElementById('claim-btn');

    // NEW SELECTOR: Grabs your entire main content container body section
    const mainContentBody = document.querySelector('.main-layout-container');
    
    // TAB SELECTOR: Selects all your 6 content sub-panels hidden inside the main container
    const layoutPanels = document.querySelectorAll('.menu-panel');

    function openSidebar() {
        sidebarDashboard.classList.add('open');
        sidebarOverlay.classList.add('visible');
    }

    function closeSidebar() {
        sidebarDashboard.classList.remove('open');
        sidebarOverlay.classList.remove('visible');
    }

    // High Compatibility Action Event Registration Engine Blocks
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Stops click from bleeding into background components
            openSidebar();
        });
    }

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeSidebar();
        });
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', (e) => {
            e.preventDefault();
            closeSidebar();
        });
    }

    // NEW INTERACTION MECHANISM: Auto-closes sidebar if user clicks main page content text or backgrounds
    if (mainContentBody) {
        mainContentBody.addEventListener('click', () => {
            // Only fires close protocol if the sidebar dashboard is actually open
            if (sidebarDashboard.classList.contains('open')) {
                closeSidebar();
            }
        });
    }

    // Prevent clicks inside the actual sidebar panel from triggering background screen close events
    if (sidebarDashboard) {
        sidebarDashboard.addEventListener('click', (e) => {
            e.stopPropagation(); 
        });
    }

    // UPDATED INTERACTION MECHANISM: Handles both sidebar auto-closing AND instant content panel switching
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetPanelId = link.getAttribute('data-target');
            
            // Only process tab switching if the link actually has a data-target defined
            if (targetPanelId) {
                e.preventDefault(); // Prevents standard link jumps/Vercel reloads

                // 1. Remove active markers from all link elements and panels
                sidebarLinks.forEach(l => l.classList.remove('active'));
                layoutPanels.forEach(p => p.classList.remove('active'));

                // 2. Set chosen tab and container layout view blocks to active
                link.classList.add('active');
                const targetPanel = document.getElementById(targetPanelId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            }
            
            // Keeps your existing closing drawer functionality completely operational
            closeSidebar();
        });
    });

    // Verification WhatsApp redirection processing logic
    if (claimButton) {
        claimButton.addEventListener('click', () => {
            const yourWhatsAppNumber = "67570000000"; // Ensure your live number is here
            const accountID = prompt("Please enter your funded Broker Account ID to verify your position status:");
            
            if (accountID && accountID.trim() !== "") {
                alert(`Account ID (${accountID}) logged. Redirecting to WhatsApp verification...`);
                
                const messageText = encodeURIComponent(
                    `Hello Otto! I just registered and funded my account under your partner broker. My Broker Account ID is: ${accountID}. Please verify me and add me to the VIP Signals WhatsApp Group!`
                );
                
                window.open(`https://wa.me/67576766296?text=${messageText}`, '_blank');
            } else if (accountID !== null) {
                alert("Please enter a valid Account ID to claim your free VIP trading setups.");
            }
        });
    }
});

// --- Hardware-Accelerated Desktop Slider Engine ---
const viewport = document.getElementById('inventory-viewport');
const slideLeftBtn = document.getElementById('slide-left-btn');
const slideRightBtn = document.getElementById('slide-right-btn');

if (viewport && slideLeftBtn && slideRightBtn) {
    // Calculates width parameters dynamically (1 card width + 1 gap size spacing parameter)
    const amountToScroll = 350; 

    slideRightBtn.addEventListener('click', (e) => {
        e.preventDefault();
        viewport.scrollBy({
            left: amountToScroll,
            behavior: 'smooth' // Forces smooth shifting math animation
        });
    });

    slideLeftBtn.addEventListener('click', (e) => {
        e.preventDefault();
        viewport.scrollBy({
            left: -amountToScroll,
            behavior: 'smooth'
        });
    });
}

// --- Hardware-Accelerated 3-Step Funnel Slider Engine ---
const funnelViewport = document.getElementById('funnel-viewport-track');
const funnelLeftBtn = document.getElementById('funnel-left-btn');
const funnelRightBtn = document.getElementById('funnel-right-btn');

if (funnelViewport && funnelLeftBtn && funnelRightBtn) {
    // Shifts the width dynamically based on the exact size layout configurations of the step cards
    const stepCardWidth = 450; 

    funnelRightBtn.addEventListener('click', (e) => {
        e.preventDefault();
        funnelViewport.scrollBy({
            left: stepCardWidth,
            behavior: 'smooth'
        });
    });

    funnelLeftBtn.addEventListener('click', (e) => {
        e.preventDefault();
        funnelViewport.scrollBy({
            left: -stepCardWidth,
            behavior: 'smooth'
        });
    });
}
