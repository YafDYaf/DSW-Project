const tl = gsap.timeline({defaults:{ ease: "power1.out"} });

tl.to('.text',{y:'0%', duration: 1, stagger:0.30});
tl.to(".slider",{y: "-100%", duration:1.5, delay:0.5});
tl.to('.intro',{y:"-100%",duration:1},"-=2");
tl.fromTo('nav',{ opacity: 0},{ opacity: 1, duration:1},);
 


document.getElementById("open_popup_btn").addEventListener("click", function(){
    document.getElementsByClassName("popup_center")
    [0].classList.add("active");
})


document.getElementById("dismiss_popup_btn").addEventListener("click", function(){
    document.getElementsByClassName("popup_center")
    [0].classList.remove("active");
})