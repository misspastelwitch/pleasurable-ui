let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".title-section",
    markers: true,
    start: "top top",
    end: "+=1200",
    pin: true,
    scrub: 1,
  }
})
tl.to(".title-section", {
  "--target": "0%",
  ease: "none"})

console.log(tl.duration(), "duration")