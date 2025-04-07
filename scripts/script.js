document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            // Remove active class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove("active"));

            // Add active class to clicked button
            this.classList.add("active");

            // Show or hide gallery items
            galleryItems.forEach((item) => {
                if (filter === "all" || item.getAttribute("data-category") === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            // Scroll to the first visible image smoothly
            const firstVisibleImage = document.querySelector(`.gallery-item[data-category="${filter}"]`);
            if (firstVisibleImage) {
                firstVisibleImage.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
