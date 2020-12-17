// Vars
export const mimeType = "image/*";
export let uploadedImageSizes = {
  width: 0,
  height: 0
}
export let uploadType = "blazer";
export let endpoint = "/get_ties";


// DOM nodes
export let selectedImage = document.getElementById(`selected-${uploadType}`);
export const skeletons = document.querySelectorAll(".skeleton__card");
export const imagesToHide = document.querySelectorAll(".hide-while-loading");


// Set data functions
/**
 * Set width and height user's uploaded image
 * @param {Number} width
 * @param {Number} height
*/
export function setUploadedImageSizes(width, height) {
  uploadedImageSizes.width = width;
  uploadedImageSizes.height = height;
}

/**
 * Set type of the uploaded clothes (blazer, tie)
 * @param {String} type
*/
export function setUploadType(type) {
  uploadType = type;
  selectedImage = document.getElementById(`selected-${uploadType}`);
}

export function setEndpoint(point) {
  endpoint = point;
}