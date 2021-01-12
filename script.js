gsap.from(".about-me", { opacity: 0, y: 100, duration: 1 });
gsap.from(".social-media", {
  opacity: 0,
  x: 100,
  duration: 1,
});

TweenMax.to(".fullrotate", 1, {
  rotationX: "360",
});

// Light Mode

// Script For Resolution page
// toggle = document.querySelector("#toggle");
// hidden = document.querySelector(".hidden");

// toggle.addEventListener("click", () => {
//   if ((hidden.style.display = "none")) {
//     hidden.style.display = "block";
//   }
// });
