let boxs = document.querySelectorAll(".box");
let btn = document.querySelectorAll("button");

let discoBtn = document.querySelector("#disco");
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    boxs.forEach((box) => {
      box.style.backgroundColor = "gray";
    });
    let bgcolor = btn.getAttribute("data-id");
    let box = document.getElementById(bgcolor);
    box.style.backgroundColor = bgcolor;
  });
});

discoBtn.addEventListener("click", () => {
  let time = 1000;
  for (let i = 0; i < boxs.length; i++) {
    let boxBgColor = boxs[i].getAttribute("id");
    setInterval(() => {
      boxs[i].style.backgroundColor = boxBgColor;
    }, time);

    if (i > 0) {
      setInterval(() => {
        boxs[i - 1].style.backgroundColor = "gray";
      }, 2000);
    }

    time += 1000;
  }
});
