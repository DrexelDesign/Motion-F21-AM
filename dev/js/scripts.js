import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin,TextPlugin,MotionPathPlugin,MotionPathHelper);

const mainTL = gsap.timeline();
const aniTime = 0.5;

gsap.set(".ball",{transformOrigin:"50% 50%", xPercent:-50, yPercent: -50});
gsap.set("#ball-jump",{transformOrigin: "center"});

// --------------
              // the 3 lines below do the same as the line above
              // gsap.set("#ball-1",{transformOrigin:"50% 50%", xPercent:-50, yPercent: -50});
              // gsap.set("#ball-2",{transformOrigin:"50% 50%", xPercent:-50, yPercent: -50});
              // gsap.set("#ball-3",{transformOrigin:"50% 50%", xPercent:-50, yPercent: -50});
// --------------

// gsap.set("#line-2",{scaleX:-1,transformOrigin: "center center"});


function ballDrop(){
       const tl = gsap.timeline();

       // tl.from("#ball-3",{duration: 2, drawSVG: "0%"},"same");
       // tl.from("#line-2",{duration: 2, drawSVG: "-0%"},"same");
       
       tl.from("#outline",{duration: 0.25, drawSVG: "0%"})
              .from(".ball",{duration: aniTime, y:"-=200", ease: "bounce.out", autoAlpha:0, stagger:0.25})
              .from("#welcome-text", {duration: aniTime, autoAlpha:0, ease: "none"})
              .to("#welcome-text", {duration: aniTime, text: "LOADING", ease: "none"});



       // --------------
              // the 3 lines below do the same as the line above
              // tl.from("#ball-1",{duration: 0.5, y:"-=200", ease: "bounce.out", autoAlpha:0});
              // tl.from("#ball-2",{duration: 0.5, y:"-=200", ease: "bounce.out", autoAlpha:0},"-=50%");
              // tl.from("#ball-3",{duration: 0.5, y:"-=200", ease: "bounce.out", autoAlpha:0},"-=50%");
       // --------------

       return tl;
}



function ballJumping(){
       const tl = gsap.timeline({repeat:3});
       tl.to("#ball-1",{duration: aniTime, motionPath:{path:"#path-1", align:"#path-1"}, scale:0.5, ease: "power4.out"})
         .to("#ball-2",{duration: aniTime, motionPath:{path:"#path-2", align:"#path-2"}, scale:0.5, ease: "power4.out"},"-=75%")
         .to("#ball-3",{duration: aniTime, motionPath:{path:"#path-3", align:"#path-3"}, scale:0.5, ease: "power4.out"},"-=75%")
         .to("#ball-1",{duration:aniTime,x:"-=158", scale:1},"-=50%")
         .to("#ball-2",{duration:aniTime,x:"-=158", scale:1},"-=50%")
         .to("#ball-3",{duration:aniTime,x:"-=158", scale:1},"-=50%");


       return tl;
}

mainTL.add(ballDrop())
       .add(ballJumping());


MotionPathHelper.create("#ball-1");

GSDevTools.create();





// mainTL.to("#ball-1",{duration:1, alpha:0, scale:2});

// function growProgress(){
//        const tl = gsap.timeline();
//        tl.from("#fill",{duration: 8, scaleX:0});
//        return tl;
// }

// function fadeOutline(){
//        const tl = gsap.timeline();
//        tl.from("#outline",{duration: 2, drawSVG:"0%"});
//        return tl;
// }


// function textFadeIn(){
//        const tl = gsap.timeline();
       
//        return tl;
// }

































// const duration = 0.75;

// const mainTL = gsap.timeline();

// grab the element you want to get the height or width from

// const heroHeight = document.querySelector("#hero");

// console.log(heroHeight.clientHeight + "px is the height of the hero section");
// console.log(heroHeight.clientWidth + "px is the width of the hero section");

// name of the timeline | do you want to start at the end or the beginning of the timeline?  | What do you want to animate? | { how long is the animation? | what do you want to do?}
// mainTL.to("#hero",{duration:2, alpha:0});

// mainTL.from("#hero >div article",{duration:1, alpha:0, y:-heroHeight.clientHeight})
//        .from("#hero h1",{duration:0.5, alpha:0, y:"+=200", rotation: 180}, "madeUp")
//        .from("#hero h2",{duration:1, alpha:0, y:"+=200"}, "madeUp");
