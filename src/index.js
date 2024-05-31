import "./style.css"
import { pageLoad } from "./pageLoad"
import menu from "./menu";
import aboutPage from "./about";
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
window.addEventListener("load", pageLoad)
homeBtn.addEventListener("click", pageLoad);

menuBtn.addEventListener("click", menu);

aboutBtn.addEventListener("click", aboutPage);


