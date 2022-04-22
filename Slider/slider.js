const bannerElement = document.querySelector(".banner");
const bannerImageElement = document.querySelector("#banner-image");
const imageStore = createStore("image", []);
const images = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
];
imageStore.set(images);

function run() {
  let images = imageStore.get();
  let i = 0;
  setInterval(function () {
    changeImage(images[i])
    // if (i == images.length - 1) {
    //   i = 0;
    // } else {
    //   i++;
    // }
    // Thay the cho toan bo cau if else tren
    i = (i + 1) % images.length;
  }, 2000);
}

function changeImage(newSrc) {
  let bannerImageElement_temp = bannerImageElement;
  bannerImageElement_temp.src = newSrc;
  bannerImageElement.remove();
  bannerElement.appendChild(bannerImageElement_temp);
}

run();