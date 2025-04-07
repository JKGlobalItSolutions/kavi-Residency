document.addEventListener("DOMContentLoaded", function () {
    let scrollWrapper = document.getElementById("scrollGallery");
    let images = document.querySelectorAll(".scroll-wrapper img");
    let lightbox = document.getElementById("lightbox");
    let lightboxImage = document.getElementById("lightboxImage");
    let currentIndex = 0;

    // Auto-scroll function
    function startAutoScroll() {
        let clone = scrollWrapper.innerHTML;
        scrollWrapper.innerHTML += clone;
    }
    startAutoScroll();

    // Open lightbox
    window.openLightbox = function(index) {
        currentIndex = index;
        lightboxImage.src = images[index].src;
        lightbox.style.display = "flex";
    };

    // Close lightbox when clicking anywhere outside the image
    window.closeLightbox = function() {
        lightbox.style.display = "none";
    };

    // Change image in lightbox
    window.changeImage = function(step) {
        currentIndex += step;
        if (currentIndex < 0) currentIndex = images.length - 1;
        if (currentIndex >= images.length) currentIndex = 0;
        lightboxImage.src = images[currentIndex].src;
    };
});
