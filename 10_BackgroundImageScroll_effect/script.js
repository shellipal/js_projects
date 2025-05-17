const BgImageEl = document.getElementById("bg-image");


window.addEventListener("scroll", () => {
  updateImage();
});


function updateImage()
{
  BgImageEl.style.opacity = 1 - window.pageYOffset / 800;
  
  BgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}
