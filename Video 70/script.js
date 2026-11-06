function getRandomColor(){
    let a = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    let c = Math.floor(Math.random()*256)

    return `rgb(${a},${b},${c})`
}

let x = document.querySelectorAll(".box")
for (let i = 0; i < x.length; i++) {
    const e = x[i];

    e.style.color = getRandomColor()
    e.style.backgroundColor = getRandomColor()
}