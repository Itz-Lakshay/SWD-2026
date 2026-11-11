console.log("Lakshay is a cracker")
console.log("Rohan is a hecker")

setTimeout(() => {
    console.log("I am inside timeout 1")
}, 0);

setTimeout(() => {
    console.log("I am inside timeout 2")
}, 2);

console.log("The end")

const fn = () =>{
    console.log("Nothing!")
}

const callback = (arg,fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src,callback) => {
    let script = document.createElement("script")
    script.src = src
    script.onload = callback("Lakshay",fn)
    document.head.append(script)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.js",callback)