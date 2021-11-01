import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const tl = gsap.timeline({repeat:3});
tl.to(".dog",{duration:0.1, stagger:-0.1,ease: "steps(6)", alpha:0})

GSDevTools.create(); 