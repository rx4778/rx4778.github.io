import launch from "./launch.js";
import { setLoading } from "./DOMChanges.js";

// User upload file
const file = document.getElementById("file");
file.addEventListener("change", e => {
  launch(e.target.files[0]);
}, false)

// Button to upload user's document
const uploadBtn = document.getElementById("upload");
uploadBtn.addEventListener("click", () => {
  file.click();
}, false)

// Set loading state
const exampleImages = document.querySelectorAll(".demo__for-what__examples img");
exampleImages.forEach(img => {
  img.addEventListener("click", setLoading, false);
})