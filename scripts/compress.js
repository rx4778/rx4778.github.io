export function compressImage(objectUrl) {
  let img = document.createElement("img");

  img.onload = function () {
    let { width, height } = this;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const maxWidth = 1200;
    const maxHeight = 900;

    if (width > height) {
      if (width > maxWidth) {
        height = Math.round((height *= maxHeight / width));
        width = maxWidth
      }
    } else {
      if (height > maxHeight) {
        width = Math.round((width *= maxWidth / height));
        height = maxHeight
      }
    }

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(img, 0, 0, width, height);

    const compressedImg = canvas.toDataURL("image/jpeg", 0.7);

    // TODO
    // const a = document.createElement("img");
    // a.src = compressedImg;

    // document.body.appendChild(a)
  }

  img.src = objectUrl;
}