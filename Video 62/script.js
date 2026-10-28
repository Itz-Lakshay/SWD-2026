let adjectives = "Crazy Amazing Fire"
let shopName = "Engine Foods Garments"
let anotherWord = "Bros Limited Hub"

let x = Math.random()
let y = Math.random()
let z = Math.random()

let adj
let sn
let aw

if(x<=0.33){
    adj = adjectives.slice(0,5)
}
else if(x<=0.66){
    adj = adjectives.slice(6,13)
}
else{
    adj = adjectives.slice(14)
}

if(y<=0.33){
    sn = shopName.slice(0,6)
}
else if(y<=0.66){
    sn = shopName.slice(7,11)
}
else{
    sn = shopName.slice(12)
}

if(z<=0.33){
    aw = anotherWord.slice(0,4)
}
else if(z<=0.66){
    aw = anotherWord.slice(5,12)
}
else{
    aw = anotherWord.slice(13)
}

console.log(`The random Business Name is ${adj.trim()} ${sn.trim()} ${aw.trim()}`)
