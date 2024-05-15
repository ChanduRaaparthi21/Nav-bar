let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

window.addEventListener("resize", checkWidth);
checkWidth();

function checkWidth() {
  if (window.innerWidth > 480) {
    toggle.style.display = "none";
  } else {
    toggle.style.display = "block";
  }
}

toggle.addEventListener("click", function() {
  menu.classList.toggle("active");
});