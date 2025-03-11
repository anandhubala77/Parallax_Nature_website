document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            // Toggle hamburger icon between bars and close (optional)
            menuToggle.innerHTML = navLinks.classList.contains("active")
                ? '<i class="fas fa-times"></i>' // Close icon
                : '<i class="fas fa-bars"></i>'; // Hamburger icon
        });
    }

    function revealOnScroll() {
        let descriptions = document.querySelectorAll(".description");
        descriptions.forEach(desc => {
            let position = desc.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                desc.classList.add("visible");
            }
        });
    }

    revealOnScroll();
    document.addEventListener("scroll", revealOnScroll);
});
