document.addEventListener('DOMContentLoaded', () => {
    // Selection Element References
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebarDashboard = document.getElementById('sidebar-dashboard');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-item');

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

    // 1. Open Menu Trigger
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Stops the click from instantly firing a close event
            openSidebar();
        });
    }

    // 2. Close Menu Button Trigger
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', (e) => {
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

    // 4. Safety block: Clicks inside the actual sidebar menu panel will not close it
    if (sidebarDashboard) {
        sidebarDashboard.addEventListener('click', (e) => {
            e.stopPropagation(); 
        });
    }

    // 5. Menu Links Trigger (Closes menu when jumping to content)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeSidebar();
        });
    });
});
