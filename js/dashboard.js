document.addEventListener("DOMContentLoaded", () => {
   

    // Active state selection routing for Bottom Navigation
    bottomLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            bottomLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});


