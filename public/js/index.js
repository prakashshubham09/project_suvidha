const PanelView = document.getElementById("header");

window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    PanelView.classList.add("panelShadow");
  } else {
    PanelView.classList.remove("panelShadow");
  }
};

/* ---------------- Intro Image Scrolling ---------------- */

const slidingImage = document.getElementsByClassName("introImg")[0];
const slidingImage1 = document.getElementsByClassName("introImg")[1];
const images = [
  "assets/images/plomber-removebg-preview.png",
  "/assets/images/teacher-removebg-preview.png",
];
const images1 = [
  "assets/images/travel-removebg-preview.png",
  "/assets/images/dance-removebg-preview.png",
];

let imgIndex = 1;

if (screen.width < 992) {
  console.log("Image Slider has been Stoped!");
} else {
  setInterval(() => {
    slidingImage.src = images[imgIndex];
    slidingImage1.src = images1[imgIndex];
    // console.log(imgIndex)

    if (imgIndex === 1) {
      imgIndex = 0;
    } else {
      imgIndex++;
    }
  }, 4000);

  // console.log(screen.width);
}


