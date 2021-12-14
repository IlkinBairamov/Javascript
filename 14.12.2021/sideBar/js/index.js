let Nav = document.querySelector(".nav");
let Close = document.querySelector(".close");
Nav.addEventListener("click", () => {
  document.querySelector("#navbar").style.transform = "translateY(0%)";
});
Close.addEventListener("click", () => {
  document.querySelector("#navbar").style.transform = "translateY(-200%)";
});
