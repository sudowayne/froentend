//dom selection

//querry selector-- find one element-- first element
const title = document.querySelector("#main-title")
console.log(title);
console.log(title.textContent);
const info = document.querySelector(".info")
console.log(info);

//qerySelectorAll--- first all macthing elements in the dom
const infoss = document.querySelectorAll(".info")
console.log(infoss);

//looping over the nodelist
infoss.forEach((info) => {
    console.log(info)
})

//CHNAGING context and styles
title.textContent =  " Welcome to cih student dashboard"
info.textContent = "Learning dom manipulation"  

//chnaging styles
info.style.color = "red"
info.style.backgroundColor = "yellow"
info.style.padding = "10px"
info.style.margin = "10px"  


//working with classes
title.classList.add("new-class")
title.classList.remove("new-class")
title.classList.toggle("new-class")
title.classList.contains("new-class")

//attributes
const btn = document.querySelector("#change-button")

btn.setAttribute("disabled", "true");
console.log(btn.getAttribute("disabled"));

// btn.removeAttribute("disabled")
// console.log(btn.getAttribute("disabled"));
