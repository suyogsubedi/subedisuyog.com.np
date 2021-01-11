gsap.from(".about-me", { opacity: 0, y: 100, duration: 1 });
gsap.from(".social-media", {
  opacity: 0,
  x: 100,
  duration: 1,
});

TweenMax.to(".fullrotate", 1, {
  rotationX: "360",
});
