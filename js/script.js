import { SlideNav } from "./slide.js";

const slide = new SlideNav('.slide', '.slide-wrapper')
slide.init()

slide.changeSlide(5)
slide.addArrow('.prev', '.next')
console.log(slide)
// slide.changeSlide(2)