const present = document.getElementById("present");
const options = {
  colors: [
    "#E57373", // Light red
    "#F06292", // Light pink
    "#BA68C8", // Light purple
    "#9575CD", // Medium purple
    "#7986CB", // Light blue
    "#64B5F6", // Medium blue
    "#4FC3F7", // Light cyan
    "#4DD0E1", // Medium cyan
    "#4DB6AC", // Light teal
    "#81C784", // Medium green
    "#AED581", // Light green
    "#DCE775", // Light yellow
    "#FFF176", // Medium yellow
    "#FFD54F", // Light orange
    "#FFB74D", // Medium orange
    "#FF8A65", // Light red-orange
  ],
};


present.addEventListener("mouseenter", () => {
  confetti(options);
});
present.addEventListener("touchstart", () => {
  confetti(options);
});
