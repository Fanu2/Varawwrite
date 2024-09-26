import Vara from "vara";  // Import Vara.js

document.addEventListener("DOMContentLoaded", () => {
    const text = `Jodha,you are the light of my life, illuminating my path even in the darkest moments. You are the dream that decorates my mornings and fills my heart with joy.Every moment spent with you becomes a cherished memory, forever living in my heart.`;

    // Create a new Vara instance
    new Vara("#vara-container", "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json", [
        {
            text: text,
            fontSize: 60,
            strokeWidth: 0.7,
            color: "green",
            id: "romantic-text",
            duration: 2000,
            textAlign: "left",
            x: 0,
            y: 0,
            fromCurrentPosition: {
                x: true,
                y: true
            },
            autoAnimation: true,
            queued: true,
            delay: 10,
            letterSpacing: 0
        },
    ]);
});
