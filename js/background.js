const images = ["2.jpg", "3.jp.jpg", "download-14.jpg", "image.jpg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = "bgimg";
bgImage.src = `img/${choosenImage}`;

console.log(bgImage);
document.body.appendChild(bgImage);
