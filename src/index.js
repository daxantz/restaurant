import "./style.css"
import { pageLoad } from "./pageLoad"
import menu from "./menu";
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
window.addEventListener("load", pageLoad)
homeBtn.addEventListener("click", pageLoad);

menuBtn.addEventListener("click", menu)


