let arr = [1,2,3,4,7]

console.log(arr, typeof arr)
console.log(arr.length) //It is not written as a function

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

arr[0] = 5466
console.log(arr)

console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.pop())
console.log(arr)

console.log(arr.push(100))
console.log(arr.push("Lakshay"))
console.log(arr)

console.log(arr.shift())
console.log(arr)

console.log(arr.unshift("Jack"))
console.log(arr)

console.log(delete arr[0])
console.log(arr)
console.log(arr.length)
console.log(arr[0])

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
console.log(a1.concat(a2,a3))
console.log(a1)
console.log(a2)
console.log(a3)

let numbers = [1,2,3,4,5]
// console.log(numbers.splice(1,2)) //splice(start,number of elements)
// console.log(numbers)
console.log(numbers.splice(1,3,999,777))
console.log(numbers)

let num = [1,2,3,4]
console.log(num.slice(2))
console.log(num.slice(1,3))
