// DOM nodes
export const selectedImage = document.getElementById("selected-image");
export const skeletons = document.querySelectorAll(".skeleton__card");
export const imagesToHide = document.querySelectorAll(".hide-while-loading");


// Vars
export const mimeType = "image/*";
export let uploadedImageSizes = {
  width: 0,
  height: 0
}


// Set data functions
export function setUploadedImageSizes(width, height) {
  uploadedImageSizes.width = width;
  uploadedImageSizes.height = height;
}