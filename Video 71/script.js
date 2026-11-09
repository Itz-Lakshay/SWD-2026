console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".container").innerHTML)

console.log(document.querySelector(".box").innerText)
console.log(document.querySelector(".container").innerText)

console.log(document.querySelector(".container").outerHTML)
console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".container").nodeName)
console.log(document.querySelector(".container").textContent)

console.log(document.querySelector(".container").hidden)
// console.log(document.querySelector(".container").hidden = true)

document.querySelector(".box").innerHTML = "Hey I am Lakshay"
console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
document.querySelector(".box").setAttribute("style","display:inline")
console.log(document.querySelector(".box").attributes)
document.querySelector(".box").removeAttribute("style")

console.log(document.querySelector(".box").dataset)

// let div = document.createElement("div")
// div.innerHTML = "I have been inserted by <b>by Lakshay</b>"
// div.setAttribute("class","created")
// document.querySelector(".container").append(div)
// document.querySelector(".container").prepend(div)
// document.querySelector(".container").before(div)
// document.querySelector(".container").after(div)

let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("afterend","<b>I am undet the water. Please help me here too much raining.... iuoooo</b>")
// cont.insertAdjacentHTML("beforeend","<b>I am undet the water. Please help me here too much raining.... iuoooo</b>")
// cont.insertAdjacentHTML("afterbegin","<b>I am undet the water. Please help me here too much raining.... iuoooo</b>")
// cont.insertAdjacentHTML("beforebegin","<b>I am undet the water. Please help me here too much raining.... iuoooo</b>")

// document.querySelector(".box").remove()
// document.querySelector(".box").remove()

console.log(cont.classList)
console.log(cont.className)
cont.classList.add("harry")
cont.classList.add("harry")
cont.classList.remove("harry")
cont.classList.toggle("red")
cont.classList.toggle("red")