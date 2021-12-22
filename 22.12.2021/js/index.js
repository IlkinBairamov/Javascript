let addToCards=document.querySelectorAll(".add-to-card")

addToCards.forEach(addToCard=>{
    addToCard.addEventListener("click",function(e){
        e.preventDefault();
        

let Id=this.parentElement.parentElement.getAttribute("data-id");
let Img=this.parentElement.previousElementSibling.getAttribute("src")
let Price=this.previousElementSibling.children[0].innerText
let name=this.previousElementSibling.previousElementSibling.innerText


if (localStorage.getItem("basket")==null) {
    localStorage.setItem("basket",JSON.stringify([]))
}

let basket=JSON.parse(localStorage.getItem("basket"))

let isExsistProduct=basket.find(x=>x.id==Id)
if (isExsistProduct==undefined) {
    let Product={
        id:Id,
        name:name,
        img:Img,
        price:Price,
        count:1
        }
        basket.push(Product)
}
else{ 
    isExsistProduct.count+=1
}

localStorage.setItem("basket",JSON.stringify(basket))
counter();
    })   

})
if (localStorage.getItem("basket")!==null) {
   counter();
}


function counter(){
    let sup=document.querySelector("sup")
    let basket=JSON.parse(localStorage.getItem("basket"))
    sup.innerText=basket.length
}



let table=document.querySelector(".table")
let products=JSON.parse(localStorage.getItem("basket"))
products.forEach(product=>{
    table.innerHTML+=` <th scope="row"><img style="width: 100px; height: 100px; object-fit: cover;"  src="${product.img}" alt=""></th>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td>${product.count}</td>
    <td><i  class=" remove-icon fas fa-trash-alt" data-id="${product.id}"></i></td>`
})
let removeIcon=document.querySelectorAll(".remove-icon")

removeIcon.forEach(icon=>{
    icon.addEventListener("click",()=>{
        icon.parentElement.parentElement.remove()
        let idRemove=icon.getAttribute("data-id")
        Delete(idRemove);
    })
})

function Delete(Id){
    let basket=JSON.parse(localStorage.getItem("basket"))
    let removeElement= basket.filter(p=>p.id!==Id)
    localStorage.setItem("basket",JSON.stringify(removeElement))
}



