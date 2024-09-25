import Vara from "vara";  // Import Vara.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const text = "In the soft glow of twilight, Jodha feels like a warm embrace, effortlessly bringing light into my world. Her laughter is like music, lifting my spirits and wrapping around me like a comforting hug. Each moment we share feels like a little adventure, as if we’re creating our own secret world together. When I look into her eyes, I see endless possibilities, a connection that goes beyond words. It’s in the quiet moments, just being together, that I realize how lucky I am to have her by my side. With Jodha, every day is special, filled with the kind of love that makes everything else fade away. It’s just us, hand in hand, ready to face whatever comes our way.";  // Set the text to display

  // Create a new Vara instance
  var vara = new Vara(
    "#vara-container",  // ID of the container to draw the text
    "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",  // Font URL
    [
      {
        text: text,
        fontSize: 40,
        strokeWidth: 0.7,
      },
    ]
  );
});
