let login = document.querySelector("#login");
let loginBtn = document.querySelector("#login button");
let inputName = document.querySelector("input");
let images = document.querySelectorAll(".images a");
let gallery = document.querySelector("#gallery");
let popup = document.querySelector(".popup");
let closeIcon = document.querySelector(".close-icon");
let bigImg = document.querySelector(".popup .inner img");
let prevBtn = document.querySelector(".arrows .prev");
let nextBtn = document.querySelector(".arrows .next");

loginBtn.addEventListener("click", () => {
  if (inputName.value.split("").some((item) => item !== " ")) {
    login.style.transform = "translateY(100%)";
    WelcomeOpen();
  } else {
    let span = document.createElement("span");
    span.innerText = "Adınızı daxil edin!";
    document.querySelector(".login").appendChild(span);
  }
});

function WelcomeOpen() {
  gallery.style.display = "block";

  let userName = document.createElement("h2");
  userName.innerText = inputName.value;
  document.querySelector(".welcome-title").appendChild(userName);
}

images.forEach((image) => {
  image.addEventListener("click", function (e) {
    e.preventDefault();
    doOpen();
    changableImage(this);
    this.classList.add("showSlide");
  });
});

nextBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  nextElemSib(showSlide);
});

prevBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  prevElemSib(showSlide);
});

function doOpen() {
  popup.style.display = "flex";
}

function doClose() {
  popup.style.display = "none";
}

closeIcon.addEventListener("click", function () {
  doClose();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && popup.style.display === "flex") {
    doClose();
  }
});

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    doClose();
  }
});

function changableImage(item) {
  let imgSrc = item.getAttribute("href");
  bigImg.setAttribute("src", imgSrc);
}

function nextElemSib(item) {
  if (item.nextElementSibling !== null) {
    item.nextElementSibling.classList.add("showSlide");
    changableImage(item.nextElementSibling);
  } else {
    item.parentElement.children[0].classList.add("showSlide");
    changableImage(item.parentElement.children[0]);
  }

  item.classList.remove("showSlide");
}

function prevElemSib(item) {
  let length = item.parentElement.children.length;

  console.log(length);
  if (item.previousElementSibling !== null) {
    item.previousElementSibling.classList.add("showSlide");
    changableImage(item.previousElementSibling);
  } else {
    item.parentElement.children[length - 1].classList.add("showSlide");
    changableImage(item.parentElement.children[length - 1]);
  }
  item.classList.remove("showSlide");
}
