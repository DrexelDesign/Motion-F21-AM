import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

const tl = gsap.timeline();
tl.from("#jar-line",{duration:1, drawSVG:"0%"});
tl.fromTo("#jar-line",{drawSVG:"0% 100%"},{duration:1, drawSVG:"100% 100%"});

GSDevTools.create();