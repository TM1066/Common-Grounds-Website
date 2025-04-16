document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".game-container").forEach((container) => {
        const overlay = container.querySelector(".play-overlay");
        const iframe = container.querySelector(".game-frame");
        const gameName = container.dataset.game;

        // Define the correct game URLs (modify as needed)
        const gameUrls = {
            Game1: "Games/Astrova/index.html",
            Game2: "Games/Bubble Blower/index.html",
            Game3: "Games/Bunny Hop/index.html",
            Game4: "Games/Chronologic/index.html"
        };

        overlay.addEventListener("click", function () {
            if (gameUrls[gameName]) {
                iframe.src = gameUrls[gameName]; // Set the game source dynamically
                iframe.style.display = "block";  // Show the iframe
                overlay.style.display = "none";  // Hide the play button
            } else {
                console.error(`No URL found for game: ${gameName}`);
            }
        });
    });
});
