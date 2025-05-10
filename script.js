document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 700,      // Animation duration
        easing: 'ease-out-cubic', // Animation easing
        once: true,         // Whether animation should happen only once - while scrolling down
        offset: 50,         // Offset (in px) from the original trigger point
    });

    // Scroll to Top Button Functionality
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const rootElement = document.documentElement; // For scrolling the whole page

    function handleScroll() {
        // Show button if scrolled down more than 300px
        if (rootElement.scrollTop > 300) {
            if (scrollToTopBtn.style.display !== "block") {
                 // Fade in effect
                scrollToTopBtn.style.opacity = "0";
                scrollToTopBtn.style.display = "block";
                setTimeout(() => { scrollToTopBtn.style.opacity = "1"; }, 10);
            }
        } else {
            if (scrollToTopBtn.style.display !== "none") {
                // Fade out effect
                scrollToTopBtn.style.opacity = "0";
                setTimeout(() => { scrollToTopBtn.style.display = "none"; }, 300); // Match transition duration
            }
        }
    }

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling
        });
    }

    // Event listeners
    document.addEventListener("scroll", handleScroll);
    scrollToTopBtn.addEventListener("click", scrollToTop);

});