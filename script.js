document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bgMusic");

    if (bgMusic) {
        bgMusic.volume = 0.5;

        // Try to play music when the page opens
        bgMusic.play().catch(() => {
            console.log("Browser blocked autoplay.");
        });

        // If autoplay is blocked, start music on first interaction
        const startMusic = () => {
            bgMusic.play().catch(() => {});
        };

        document.addEventListener("click", startMusic, { once: true });
        document.addEventListener("touchstart", startMusic, { once: true });
    }
});