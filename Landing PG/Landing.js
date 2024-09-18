const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
  function circleFollow(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      console.log(dets)
  
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale( ${xscale} ,${yscale})`;
    });
  }
  //----------------  OR ------------------->>>>>>>   //
  // function circleFollow() {
  //     window.addEventListener("mousemove", function(event) {
  //         const { clientX, clientY } = event; // Destructure clientX and clientY from the event object
  
  //         // Log the coordinates to the console
  //         console.log(`Mouse Position: X=${clientX}, Y=${clientY}`);
  //     });
  // }
  

  function FirstPageAnimation() {
    var t1 = gsap.timeline();
    
    t1.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
    .to(".bonding-elem", {
      y: "-10",
      duration: 2,
      stagger: 0.2,
      delay: -1,
      ease: Expo.easeInOut,
    })
    .from("#home-footer", {
      y: "-10",
      opacity: 0,
      duration: 1.2,
      delay: -1,
      ease: Expo.easeInOut,
    });
  }
  document.querySelector("#menu").addEventListener("click", function() {
    var tl = gsap.timeline();
    document.querySelector("#menu").style.display = "none";
    
    // Set the opacity to 1 for all .btn elements so that they can be animated
    document.querySelectorAll(".btn").forEach(function(btn) {
        btn.style.opacity = "1";  // Makes all .btn elements visible
    });
    
    tl.from(".btn", {
        y: -30,
        duration: 1.4,
        delay: 0.3,
        color: "white",
        opacity: 0,
        stagger: 0.35
    });
});
document.getElementById("log-btn").addEventListener("click", function() {
  window.location.href = "/100_PROJECTS/Mini Project/Login PG/Login_pg.html";
});
    
  window.onload = function () {
    // circleFollow();
    FirstPageAnimation();
    // CircleSkew();
  };  