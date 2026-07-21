// --- BankBugs|FX Session & Router Engine ---

document.addEventListener("DOMContentLoaded", () => {
    // 1. Core Config Hardcoded Validation Check Token
    const ADMIN_PASSKEY = "bugsadmin123"; 

    // 2. DOM Elements Cache
    const loginWrapper = document.querySelector(".login-wrapper");
    const loginForm = document.getElementById("loginForm");
    const mt5Input = document.getElementById("mt5Id");
    
    // Create reference zones for Dashboard components dynamically or select them if present
    const appShell = document.getElementById("app-shell");
    const logoutBtn = document.getElementById("logoutBtn");

    // 3. Simple Authentication Check Cycle
    function checkSession() {
        const sessionActive = localStorage.getItem("bb_fx_session");
        
        if (sessionActive === "authenticated") {
            // Hide login box and reveal core app structure
            if (loginWrapper) loginWrapper.classList.add("view-hidden");
            if (appShell) {
                appShell.classList.remove("view-hidden");
                appShell.classList.add("view-active");
            }
        } else {
            // Restore structural login state safely
            if (loginWrapper) loginWrapper.classList.remove("view-hidden");
            if (appShell) {
                appShell.classList.add("view-hidden");
                appShell.classList.remove("view-active");
            }
        }
    }

    // 4. Intercept Form Submission Behavior
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const inputVal = mt5Input.value.trim();

            if (inputVal === ADMIN_PASSKEY) {
                // Set native local validation tokens
                localStorage.setItem("bb_fx_session", "authenticated");
                localStorage.setItem("bb_active_user", inputVal);
                
                // Animate change instantly
                checkSession();
                alert("Terminal Connected Successfully. Welcom back to BankBugs|FX.");
            } else {
                // Shake effect fallback error alert
                mt5Input.style.borderColor = "#EF4444";
                alert("ACCESS DENIED: Invalid MT5 ID Authentication Token.");
                setTimeout(() => {
                    mt5Input.style.borderColor = "#009900";
                }, 2000);
            }
        });
    }

    // 5. Native Dashboard Route Switch Listener System
    const navButtons = document.querySelectorAll(".footer-nav-btn");
    const appViews = document.querySelectorAll(".dashboard-view-pane");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetViewId = button.getAttribute("data-target");

            // Wipe active markers from other controls
            navButtons.forEach(btn => btn.classList.remove("nav-active"));
            appViews.forEach(view => {
                view.classList.add("view-hidden");
                view.classList.remove("view-active");
            });

            // Target selected element components
            button.classList.add("nav-active");
            const activeView = document.getElementById(targetViewId);
            if (activeView) {
                activeView.classList.remove("view-hidden");
                activeView.classList.add("view-active");
            }
        });
    });

    // 6. Universal Destruction Handling (Logout Trigger)
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("bb_fx_session");
            localStorage.removeItem("bb_active_user");
            window.location.reload(); // Hard boot reset UI cleanly
        });
    }

    // Initial check lifecycle initialization
    checkSession();
});
