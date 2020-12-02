import {
  // Vars
  mimeType,
  // Functions
  setUploadedImageSizes
} from "./data.js";


/**
 * take an image file and read it as array buffer
 * @param {File} file - image loaded by an user
 * @param {Function} onLoadCallback - callback function to return fileReader's result to the init function
*/
export function parseImage(file, onLoadCallback) {
  const fileReader = new FileReader();
  fileReader.onload = onLoadCallback;
  fileReader.readAsArrayBuffer(file);
}


/**
 * put an array buffer (loaded image by an user) into FormData
 * @param {ArrayBuffer} arrayBufferImage - An image represented as array buffer
 * @param {String} fileName - name of a loaded image
 * @returns {FormData}
*/
export function putImageInFormData(arrayBufferImage, fileName) {
  const data = new FormData();

  data.append("file", new Blob([arrayBufferImage], {
    type: mimeType
  }), fileName);

  return data;
}


/**
 * The function to find out width and height of the uploaded image
 * @param {String} objectUrl - url of the uploaded image
 * @param {Function} onLoadCallback
*/
export function findOutImageSizes(objectUrl, onLoadCallback) {
  let img = document.createElement("img");

  img.onload = function () {
    setUploadedImageSizes(this.width, this.height);
    onLoadCallback({ width: this.width, height: this.height });
  }

  img.src = objectUrl;
}


/**
 * Convert array buffer to object url
 * @param {ArrayBuffer} arrayBufferImage - An image represented as array buffer
 * @returns {objectUrl}
*/
export function arrayBufferToObjectUrl(arrayBufferImage) {
  const blob = new Blob([arrayBufferImage], { type: mimeType })
  const objectUrl = URL.createObjectURL(blob);

  return objectUrl;
}