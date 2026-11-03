let arr = [1,13,5,7,11];
let newArr = []
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newArr.push(element**2)
}
console.log(newArr)

//The above can be done in easy way->

let arrNew = arr.map((e,index,array)=>{
    return e**2
})
console.log(arrNew)

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]
const mul = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(mul))

console.log(Array.from("Lakshay"))