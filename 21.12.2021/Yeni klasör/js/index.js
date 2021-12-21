let table = document.querySelector(".table");
let uploadFile = document.querySelector("form i");
let tablo = document.querySelector("#tablo");
let inputName = document.querySelector(".input-name");
let inpurSurname = document.querySelector(".input-surname");
let inputSalary = document.querySelector(".input-salary");
let popup = document.querySelector(".popup");
let close = document.querySelector(".popup .inner .close");
let popupImg = document.querySelector(".popup .inner .slider-image img");

uploadFile.addEventListener("click", function () {
  this.nextElementSibling.click();
});

uploadFile.nextElementSibling.addEventListener("change", function (e) {
  openTablo();
  const { files } = e.target;

  for (let file of files) {
    const fileReader = new FileReader();
    fileReader.onloadend = function (e) {
      const { result } = e.target;
      table.lastElementChild.innerHTML += `<tbody>
      <tr>
        <th>
          <img class="imgg" style="height: 100px; width: 100px; border: 1px solid black; border-radius:50%" src="${result}" alt="" />
        </th>
        <td><span>${inputName.value}</span></td>
        <td><span> ${inpurSurname.value}</span></td>   
        <td><span>${inputSalary.value}</span></td>
      </tr>
    </tbody>`;
      let spans = document.querySelectorAll("span");
      spans.forEach((item) => {
        item.addEventListener("click", () => {
          let input = document.createElement("input");
          input.value = item.innerText;
          item.parentElement.append(input);
          item.style.display = "none";

          input.addEventListener("blur", () => {
            item.innerText = input.value;
            input.remove();
            item.style.display = "block";
          });
        });
      });
      let imggs = document.querySelectorAll(".imgg");
      imggs.forEach((image) => {
        image.addEventListener("click", (e) => {
          changableImage(image);
          openPopup();
        });
      });
    };

    fileReader.readAsDataURL(file);
  }
});

function openTablo() {
  tablo.style.display = "block";
}

function changableImage(item) {
  let imgSrc = item.getAttribute("src");
  popupImg.setAttribute("src", imgSrc);
}

close.addEventListener("click", () => {
  closePopup();
});

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    closePopup();
  }
});

function closePopup() {
  popup.style.display = "none";
}

function openPopup(item) {
  popup.style.display = "block";
}
