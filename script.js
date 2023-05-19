window.onload = function () {
  const carousels = Array.from(document.querySelectorAll(".carousel"));

  if (carousels.length) {
    carousels.forEach((carousel) => {
      const slideContainer = carousel.querySelector(".container");
      const slides = carousel.querySelectorAll(".slide");

      const slideContainerWidth = slideContainer.offsetWidth;
      const scrollIncrement = slideContainerWidth / slides.length;
      const previousBtn = carousel.querySelector(".previous");
      const forwardBtn = carousel.querySelector(".forwards");

      forwardBtn.addEventListener("click", () => {
        slideContainer.scrollBy(scrollIncrement, 0);
      });

      previousBtn.addEventListener("click", () => {
        slideContainer.scrollBy(scrollIncrement * -1, 0);
      });
    });
  }
};

// function autoplay() {
//   var t = setTimeout(function () {
//     var button = document.querySelector('[title="Lanov"]') || false;
//     if (button) {
//       console.log("Click", button);
//       button.click();
//     }
//   }, 999);
// }
// document.addEventListener("DOMContentLoaded", (event) => {
//   autoplay();
// });
function setHalfVolume() {
  var myAudio = document.getElementById("audio1");
  myAudio.volume = 0.2; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}
