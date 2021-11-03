import { gsap } from "gsap";
gsap.set("#clipPath-2",{transformOrigin:"center"});

const tl = gsap.timeline();
// ---------------------------------------
//              Demo 1
// ---------------------------------------
// tl.from("#boxes",{duration:2,x:"-=600"});


// ---------------------------------------
//              Demo 2
// ---------------------------------------
// get the width of the wave-1
var wave = document.querySelector("#wave-1");
var wave2 = document.querySelector("#wave-2");

var bBoxGroup = wave.getBBox();
var bBoxGroup2 = wave2.getBBox();

// move wave 1
tl.to("#wave-1",{duration:1, x: -bBoxGroup.width / 2, ease: "none", repeat:2},"start")
tl.to("#wave-2",{duration:2, x: bBoxGroup2.width / 2, ease: "none", repeat:1},"start")
tl.to("#wave-1",{duration:4, y:"-=200"},"start")
tl.to("#wave-2",{duration:4, y:"-=200"},"start")
// tl.to("#clipPath-2",{duration:2, rotation:180},"start");