var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {

   crsr.style.left = dets.x-10+"px"
   crsr.style.top = dets.y-10+"px"
   blur.style.left = dets.x-80+"px"
   blur.style.top = dets.y-80+"px"
});




// const toggleBtn = document.querySelector(".toggle_btn")
// const toggleBtnIcon = document.querySelector(".toggle_btn i")
// const dropDownMenu = document.querySelector(".dropdown_menu")

// toggleBtn.onClick = function () {
//     dropDownMenu.classList.toggle('Open')
//     const isOpen = dropDownMenu.classList.contains('Open')

//     toggleBtnIcon.classList = isOpen
//     ? 'fa-solid fa-xmark'
//     : 'fa-solid fa-list'
// }




// main scroller                      

gsap.to("nav", {
    backgroundColor: "#000000",
    color:"white",
    duration: 1,
    height: "80px",
    scrollTrigger: {
        trigger: "nav",
        
        scroller: "body",
        start:"top -30%",
        end:"top -31%",
        scrub:2
    }
})

gsap.to("#main1",{
    backgroundColor: "#000000",
    scrollTrigger:{
        trigger:"#main1",
        scroller:"body",
        
        start:"top -5%",
        end:"top -50%",
        scrub:2
    }
})

gsap.from("#cards-container",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#cards-container",
        scroller:"body",
        start:"top 80%",
        end:"top 55%",
        scrub:3

    }
})

gsap.from("#colon1", {
y:-70,
x:-70,
scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 70%",
    end:"top 40%",
    scrub:4
}
})

gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 70%",
        end:"top 20%",
        scrub:4
    }
    })


    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(".abs", {
        rotate: 216,
        duration: 2.8,
        ease: "easeOut",
        scrollTrigger: {
          trigger: ".abs",
          scroller:"body",

          start: "top 80%", // Starts the animation when the top of the SVG container reaches 80% of the viewport height
          end: "top 81%",
          
        }
      });