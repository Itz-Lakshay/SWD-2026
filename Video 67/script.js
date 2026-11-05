console.log("Hello World")
console.log(document.body.childNodes)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1].childNodes)

let cont = document.body.childNodes[1]
console.log(cont)
console.log(cont.firstChild)
console.log(cont.lastChild)
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)

cont.lastElementChild.style.backgroundColor = "red"

console.log(cont.lastElementChild.parentElement)

console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children) //This will only give children which are elements
console.log(document.body.firstElementChild.children[3].nextElementSibling) 
console.log(document.body.firstElementChild.children[3].previousElementSibling)
console.log(document.body.firstElementChild.children[3].previousSibling)
console.log(document.body.firstElementChild.children[3].parentElement)

let tb = document.body.children[1]
console.log(tb.rows)