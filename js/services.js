<!-- Add this right before your </body> tag in services.html -->
<script>
document.addEventListener("DOMContentLoaded", function() {
    // 1. CHANGE THESE STRINGS to match your actual menu HTML classes/IDs
    var menuWrapper = document.querySelector("menu-toggle-btn"); // The actual dropdown/sliding menu drawer
    var menuToggleBtn = document.querySelector("menu-toggle-btn");  // The hamburger menu button icon
    var activeMenuClass = "active";                                         // The class that makes your menu visible
    
    // 2. Auto-close when clicking any link inside the menu
    if (menuWrapper) {
        var menuLinks = menuWrapper.querySelectorAll("a");
        menuLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                menuWrapper.classList.remove(activeMenuClass);
            });
        });
    }

    // 3. Auto-close when tapping anywhere on the main service content screen
    var mainServicesContent = document.getElementById("our-services");
    if (mainServicesContent) {
        mainServicesContent.addEventListener("click", function(event) {
            // Safety check: Don't close if the user is accidentally clicking the menu button itself
            if (menuWrapper && menuWrapper.classList.contains(activeMenuClass) && !menuToggleBtn.contains(event.target)) {
                menuWrapper.classList.remove(activeMenuClass);
            }
        });
    }
});
</script>
