import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

gsap.set("#stem",{transformOrigin:"center bottom"});
gsap.set("#plant-clip",{transformOrigin:"center bottom"});
gsap.set("#leaf-3",{transformOrigin:"center 70%"});

const mainTl = gsap.timeline();


function growPlantOne(){

    const tl = gsap.timeline();

    // tl.from("#stem",{duration:0.5, scaleY:0});

    tl.from("#plant-clip",{duration:0.5, scaleY:0})
    .from(".leaf",{duration:0.5, scale:0});

    return tl;



}


mainTl.add(growPlantOne());










GSDevTools.create();