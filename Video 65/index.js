let num = Number(prompt("Enter a number:"))

//Using for loop
let fact = 1
for(let i = 1; i <= num; i++){
    fact *= i
}
alert(`The factorial of ${num} using for loop is ${fact}`)

//Using reduce
let arr = Array.from({length:num},(_,i)=>i+1)

const mul = (a,b)=>{
    return a*b
}
alert(`The factorial of ${num} using reduce is ${arr.reduce(mul,1)}`)
