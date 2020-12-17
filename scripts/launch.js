import {
  parseImage,
  putImageInFormData
} from "./helpers.js";
import { endpoint } from "./data.js";
import {
  changeSelectedImage,
  setLoading,
  changeResultImages
} from "./DOMChanges.js";
import apiClient from "./apiClient.js";


/**
 * The function to call all 'demo' actions after upload button click
*/
export function uploadFileLaunch(file) {
  parseImage(file, e => {
    const arrayBufferImage = e.target.result;
    const formData = putImageInFormData(arrayBufferImage, file.name);
    changeSelectedImage(arrayBufferImage, null);

    setLoading(true);
    const result = apiClient.sendRequest(formData, endpoint)
    result.then(data => {
      changeResultImages(data.ties_list || data.blazer_list);
    })
    .catch(() => setLoading(false));
  });
}


/**
 * The function to call all 'demo' actions after example image click
*/
export function exampleLaunch(e) {
  const { src, dataset } = e.target;
  const { uploadtype } = dataset;

  setLoading(true, e);
  changeSelectedImage(null, src);

  const buffer = apiClient.getImageBufferByLink(src);

  buffer.then(arrayBufferImage => {
    const formData = putImageInFormData(arrayBufferImage, uploadtype);
    const result = apiClient.sendRequest(formData, endpoint);

    result.then(data => {
      changeResultImages(data.ties_list || data.blazer_list);
    })
  })
  .catch(() => setLoading(false));
}


/**
 * The function to call all 'demo' actions after reload page with first example image
*/
export function reloadSiteLaunch() {
  const result = apiClient.sendGetRequest("0", "/template_ties");
  setLoading(true);
  result.then(data => {
    changeResultImages(data.ties_list || data.blazer_list);
  })
  .catch(() => setLoading(false));
}