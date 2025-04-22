//#region Page Loader - Fade out when Fully Loaded
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.classList.add("loader--hidden");
        loader.addEventListener("transitionend", () => {
            loader.style.display = "none";
        });
    }
});
//#endregion

//#region Closes the dropdown menu after clicking.
document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll(".nav-link");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // Delay for closing navbar dropdown menu
            setTimeout(function() {
                if (navbarCollapse.classList.contains("show")) {
                    new bootstrap.Collapse(navbarCollapse).toggle();
                }
            }, 1000); // 1 second
        });
    });
});
//#endregion
