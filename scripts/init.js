import {
  uploadFileLaunch,
  exampleLaunch,
  reloadSiteLaunch
} from "./launch.js";
import {
  setUploadType,
  setEndpoint
} from "./data.js";


window.onload = () => {
  reloadSiteLaunch();
}


// User upload file
const file = document.getElementById("file");
file.addEventListener("change", e => {
  uploadFileLaunch(e.target.files[0]);
}, false);


// Button to upload user's document
const uploadBtns = document.querySelectorAll("#upload-blazer, #upload-tie");
uploadBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    const uploadType = e.target.dataset.uploadtype;
    setEndpoint(e.target.dataset.endpoint);
    setUploadType(uploadType);
    file.click();
  }, false)
});


// Set loading state
const exampleImages = document.querySelectorAll(".demo__blazer__examples img, .demo__tie__examples img");
exampleImages.forEach(img => {
  img.addEventListener("click", e => {
    const uploadType = e.target.dataset.uploadtype;
    setEndpoint(e.target.dataset.endpoint);
    setUploadType(uploadType);
    exampleLaunch(e);
  }, false);
});