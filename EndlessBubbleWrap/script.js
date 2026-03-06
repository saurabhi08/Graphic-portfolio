const bubbleWrap = document.getElementById("bubble-wrap");
const counter = document.getElementById("counter");
const popSound = document.getElementById("pop-sound");
let popCount = 0;

// Generate a random color from preset palette
function getRandomColor() {
  const colors = ["#ff4d4d", "#4dff4d", "#4da6ff", "#ffff4d", "#ff66cc"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  bubble.addEventListener("click", () => {
    if (!bubble.classList.contains("popped")) {
      // Prevent double-clicking until reset
      bubble.classList.add("popped");
      bubble.style.pointerEvents = "none";
      bubble.style.backgroundColor = getRandomColor();

      // Play pop sound once per click
      try {
        popSound.pause();              // Ensure it's not currently playing
        popSound.currentTime = 0;      // Rewind to start
        popSound.play().catch(err => {
          console.log("Audio play failed:", err);
        });
      } catch (err) {
        console.log("Audio error:", err);
      }

      popCount++;
      counter.textContent = `Bubbles popped: ${popCount}`;

      setTimeout(() => {
        bubble.classList.remove("popped");
        bubble.style.backgroundColor = "#ffffff";
        bubble.style.pointerEvents = "auto"; // Re-enable click
      }, 500);
    }
  });

  return bubble;
}

// Create 100 bubbles
for (let i = 0; i < 100; i++) {
  bubbleWrap.appendChild(createBubble());
}
