document.addEventListener('DOMContentLoaded', () => {
    // Selection Element References
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebarDashboard = document.getElementById('sidebar-dashboard');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-item');
    const claimButton = document.getElementById('claim-btn');

    // FIXED SELECTOR: Targets the entire services container section on your page
    const mainServicesContent = document.getElementById('our-services');

    function openSidebar() {
        if (sidebarDashboard && sidebarOverlay) {
            sidebarDashboard.classList.add('open');
            sidebarOverlay.classList.add('visible');
        }
    }

    function closeSidebar() {
        if (sidebarDashboard && sidebarOverlay) {
            sidebarDashboard.classList.remove('open');
            sidebarOverlay.classList.remove('visible');
        }
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

    // NEW INTERACTION MECHANISM: Auto-closes sidebar when user taps on the services section layout
    if (mainServicesContent) {
        mainServicesContent.addEventListener('click', () => {
            // Only fires close protocol if the sidebar dashboard is actually open
            if (sidebarDashboard && sidebarDashboard.classList.contains('open')) {
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

    // Auto-closes sidebar when a user clicks on any specific menu list links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeSidebar();
        });
    });
});
