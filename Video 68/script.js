console.log("Lakshay")

let bhupendraJogis = document.getElementsByClassName("box")
console.log(bhupendraJogis)
bhupendraJogis[2].style.backgroundColor = "red"

document.getElementById("red").style.backgroundColor = "red"

document.querySelector(".box").style.backgroundColor = "green" // It will select the first box which have class box
console.log(document.querySelectorAll(".box")) //It will return html colllection of elements having class box
// console.log(document.querySelectorAll(".box")) = "green" It will not work as array doesnt have style we have to use loop

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "pink"
});

// for (let i = 0; i < document.querySelectorAll(".box").length; i++) {
//     const e = document.querySelectorAll(".box")[i];
//     e.style.backgroundColor = "pink"
// }

console.log(document.getElementsByTagName("div"))

let divs = document.getElementsByTagName("div")
console.log(divs[5].matches("#red"))
console.log(divs[5].matches(".box"))
console.log(divs[4].matches("#red"))

console.log(divs[4].closest("#red"))
console.log(divs[4].closest(".container"))

console.log(divs[0].contains(divs[1]))
//This is same as
console.log(document.querySelector(".container").contains(divs[1]))
console.log(document.querySelector(".container").contains(divs[0]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))