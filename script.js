const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const year = document.getElementById("year");

// Show or hide mobile navigation
menuToggle.addEventListener("click", function () {
    const isOpen = navbar.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu after clicking a navigation link
document.querySelectorAll(".navbar a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Display current year automatically
year.textContent = new Date().getFullYear();