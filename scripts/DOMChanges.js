import {
  // Vars
  uploadedImageSizes,
  uploadType,
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
export function setLoading(isLoading, e = null) {
  e && e.target.classList.add("selected");

  skeletons.forEach((skeleton, i) => {
    if (!imagesToHide[i].classList.contains("selected")) {
      if (isLoading && uploadType !== skeleton.dataset.uploadtype) {
        skeleton.classList.add("active");
        imagesToHide[i].classList.add("hide");
      } else {
        skeleton.classList.remove("active");
        imagesToHide[i].classList.remove("hide");
      }
    }
  });

  e && e.target.classList.remove("selected");
}


/**
 * Change main picture of the clothes on the left side
 * @param {ArrayBuffer} arrayBufferImage - user's selected image converted to an array buffer
*/
export function changeSelectedImage(arrayBufferImage, imageUrl) {
  if (arrayBufferImage) {
    const objectUrl = arrayBufferToObjectUrl(arrayBufferImage);
    selectedImage.src = objectUrl;
    findOutImageSizes(objectUrl, setOrientationToSelectedImage);
  } else if (imageUrl) {
    selectedImage.src = imageUrl;
  }
}


/**
 * If the image has width more than height so this one will be placed horizontally in the container
 * and if it is the other way around, it will be placed vertically
*/
export function setOrientationToSelectedImage(sizes, img) {
  const image = !img ? selectedImage : img;
  const { width, height } = !sizes ? uploadedImageSizes : sizes;

  if (width > height) {
    image.style.width = "100%";
    image.style.height = "auto";
  } else {
    image.style.width = "auto";
    image.style.height = "100%";
  }
}


//TODO
/**
 * The function to change images on the right side (ties) of the demo
 * with images received from the server
 * @param {Object} imageLinks - links of the received images
*/
export function changeResultImages(imageLinks) {
  const resultsTo = uploadType === "blazer" ? "tie" : "blazer"
  const oppositeSideImages = document.querySelectorAll(`.request-results-${resultsTo}`);
  const currentSideImages = document.querySelectorAll(`.request-results-${uploadType}`)

  oppositeSideImages.forEach((img, i) => {
    const { url } = imageLinks[i]
    if (i !== 0) currentSideImages[i].src = "./assets/img/white-cover.png";
    findOutImageSizes(url, (sizes) => {
      setOrientationToSelectedImage(sizes, img);
      img.src = url;
      setLoading(false);
    });
  });
}