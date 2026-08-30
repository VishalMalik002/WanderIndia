// =========================
// DESTINATION FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const destinationCards = document.querySelectorAll(".destination-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active state
        button.classList.add("active");

        const selectedFilter = button.dataset.filter;

        destinationCards.forEach(card => {

            const category = card.dataset.category;

            if (selectedFilter === "all" || category === selectedFilter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});