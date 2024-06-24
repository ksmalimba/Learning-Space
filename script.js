document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('img');
    const slideWidth = slides[0].clientWidth;
    const maxSlides = 2; // Maximum number of slides to display
    let slideIndex = 0;
    let direction = 1; // Initial direction of sliding (1 for right, -1 for left)

    function slide() {
        slideIndex += direction;
        const lastSlideIndex = slides.length - maxSlides; // Index of the last slide
        if (slideIndex >= lastSlideIndex || slideIndex <= 0) {
            direction *= -1; // Reverse direction when reaching the last or first slide
            slideIndex = slideIndex < 0 ? 0 : lastSlideIndex; // Reset slideIndex if reached the end
        }
        const translateValue = -slideIndex * slideWidth;
        slider.style.transform = `translateX(${translateValue}px)`;
    }

    setInterval(slide, 2000); // Change slide every 2 seconds
});

