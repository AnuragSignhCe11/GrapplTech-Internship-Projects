    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });
// Index-feature section
document.addEventListener("DOMContentLoaded", function () {
    const featureBoxes = document.querySelectorAll(".feature-box");
  
    function checkScroll() {
      featureBoxes.forEach((box) => {
        const boxPosition = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (boxPosition < windowHeight - 100) {
          box.classList.add("show");
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check when the page loads
  });
  
 var tl = gsap.timeline()

 tl.from("nav",{
  y:20,
  opacity:0,
  duration:1,
  delay:1,
  
 })
 tl.from(".nav-item",{
  y:-20,
  opacity:0,
  duration:1,
  stagger:0.3
 })
 tl.from(".about-section",{
  y:20,
  opacity:0,
  duration:1
 })
 tl.from(".team-section",{
  y:20,
  opacity:0,
  duration:1
 })
 tl.from(".contact-section",{ 
   y:20,
   opacity:0,
   duration:0.5,
   scale:0.5
 })
 tl.from("hero-content h1",{
  x:20,
  duration:1,
  color:"aqua"
 })