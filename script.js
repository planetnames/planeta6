document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll(".shake-word");

    words.forEach((word) => {
        word.addEventListener("mouseenter", () => {
            word.classList.add("shaking");
        });

        word.addEventListener("mouseleave", () => {
            // Remove the class after the animation ends
            setTimeout(() => {
                word.classList.remove("shaking");
            }, 500); // Match this duration to the CSS animation duration
        });
    });
});
