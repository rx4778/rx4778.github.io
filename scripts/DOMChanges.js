import {
  // Vars
  uploadedImageSizes,
  // Nodes
  selectedImage,
  skeletons,
  imagesToHide
} from "./data.js";
import {
  findOutImageSizes,
  arrayBufferToObjectUrl
} from "./helpers.js";


/**
 * Show loading skeletons and hide pictures
 * @param {Node | null} e - clicked image (example nodes) data.
 * is null if we want to start loading after some other action - after upload new user's image for example
*/
export function setLoading(e = null) {
  e && e.target.classList.add("selected");

  skeletons.forEach((skeleton, i) => {
    if (!imagesToHide[i].classList.contains("selected")) {
      skeleton.classList.add("active");
      imagesToHide[i].classList.add("hide");
    }
  });

  // Only to test it
  // TODO - Remove later
  setTimeout(() => {
    skeletons.forEach((skeleton, i) => {
      skeleton.classList.remove("active");
      imagesToHide[i].classList.remove("hide");
    });
  }, 1000)

  e && e.target.classList.remove("selected");
}


/**
 * Change main picture of the clothes on the left side
 * @param {ArrayBuffer} arrayBufferImage - user's selected image converted to an array buffer
*/
export function changeSelectedImage(arrayBufferImage) {
  const objectUrl = arrayBufferToObjectUrl(arrayBufferImage);
  selectedImage.src = objectUrl;
  findOutImageSizes(objectUrl, setOrientationToSelectedImage);
}


/**
 * If the image has width more than height so this one will be placed horizontally in the container
 * and if it is the other way around, it will be placed vertically
*/
export function setOrientationToSelectedImage() {
  const imageWidth = uploadedImageSizes.width;
  const imageHeight = uploadedImageSizes.height;

  if (imageWidth > imageHeight) {
    selectedImage.style.width = "100%";
    selectedImage.style.height = "auto";
  } else {
    selectedImage.style.width = "auto";
    selectedImage.style.height = "100%";
  }
}


//TODO
/**
 * The function to change images on the right side of the demo
 * with images received from the server
 * @param {Object} imageLinks - links of the given images
*/
export function changeWhatSuitImages(imageLinks) {
  const images = document.querySelectorAll(".request-result");

  images.forEach((img, i) => {
    img.src = imageLinks[i];
  })
}