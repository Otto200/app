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


