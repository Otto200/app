document.addEventListener("DOMContentLoaded", () => {
   

    // Active state selection routing for Bottom Navigation
    bottomLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            bottomLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".bottom-nav-item");
    const tabContents = document.querySelectorAll(".tab-content");

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); // STOPS the browser from scrolling down the page natively

            // 1. Swap active navigation highlighter class
            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");

            // 2. Fetch the target data parameter
            const targetTabId = item.getAttribute("data-tab");

            // 3. Switch panel visibility completely
            tabContents.forEach(tab => {
                if (tab.id === targetTabId) {
                    tab.classList.add("active-view");
                } else {
                    tab.classList.remove("active-view");
                }
            });
        });
    });
});
