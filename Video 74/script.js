let button = document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b>Yay you were clicked.</b>Enjoy Your Click"
})

button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by right click please!")
})

document.addEventListener("keydown",(e)=>{
    console.log(e,e.key,e.keyCode)
})

