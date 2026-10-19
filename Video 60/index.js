console.log("This is strings tutorial")
let a = "Lakshay"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7]) //this will give undefined instead of an error
// thats why js is known as a forgiving language

console.log(a.length)

let real_name = "Lakshay"
let friend = "Aayush"
console.log("His name is "+real_name+" his friend's name is "+friend)
console.log(`His name is ${real_name} and his friend's name is ${friend}`)

// escape sequence characters
console.log("hello\"\n\tWorld")

let b = "bahubali"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(0,4))
console.log(b.slice(4))

console.log(b.replace("ba","ka"))
console.log(b.concat(a))
console.log(b.concat(b,"Aishwariya","KLR","Angel","Priya"))

let x = "  Hello World "
console.log(x.trim())

// strings are immutable
console.log(b)

console.log(b.charAt(1))
console.log(b.indexOf("ba"))

console.log(b.startsWith("ba"))
console.log(b.endsWith("ii"))