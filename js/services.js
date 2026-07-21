document.addEventListener('DOMContentLoaded', () => {
    // Selection Element References
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebarDashboard = document.getElementById('sidebar-dashboard');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-item');
    const claimButton = document.getElementById('claim-btn');

    // NEW SELECTOR: Grabs your entire main content container body section
    const mainContentBody = document.querySelector('menu-toggle-btn');

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

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeSidebar();
        });
    });
