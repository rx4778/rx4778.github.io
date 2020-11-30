import {
  parseImage,
  putImageInFormData
  // arrayBufferToObjectUrl
} from "./helpers.js";
import {
  changeSelectedImage,
  setLoading
} from "./DOMChanges.js";
import apiClient from "./apiClient.js";
// import { compressImage } from "./compress.js";


/**
 * The function to call all 'demo' actions
*/
function launch(file) {
  parseImage(file, e => {
    const arrayBufferImage = e.target.result;
    const formData = putImageInFormData(arrayBufferImage, file.name);
    changeSelectedImage(arrayBufferImage);

    // TODO change position
    // const objectUrl = arrayBufferToObjectUrl(arrayBufferImage);
    // compressImage(objectUrl);

    apiClient.sendRequest(formData)
    setLoading();
  });
}


export default launch;