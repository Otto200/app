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

    // 1. Open Menu Button Interface
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSidebar();
        });
    }

    // 2. Close Menu Cross Button Interface
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeSidebar();
        });
    }

    // 3. GLOBAL SCREEN INTERACTION: Auto-closes sidebar when clicking anywhere on the screen content view
    document.addEventListener('click', (event) => {
        if (sidebarDashboard && sidebarDashboard.classList.contains('open')) {
            // Evaluates if pointer click falls completely outside the layout container boundaries
            if (!sidebarDashboard.contains(event.target) && !menuToggleBtn.contains(event.target)) {
                closeSidebar();
            }
        }
    });

    // 4. Input Protection Layer: Stops internal sidebar menu content adjustments from triggering accidental closes
    if (sidebarDashboard) {
        sidebarDashboard.addEventListener('click', (e) => {
            e.stopPropagation(); 
        });
    }

    // 5. Section Link Jump Clean Closures
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeSidebar();
        });
    });
});
