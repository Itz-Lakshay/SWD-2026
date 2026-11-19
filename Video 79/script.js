let a = prompt("Enter first number")
let b = prompt("Enter second number")
// let c = a+b
// console.log("The sum is",c)

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry! This is not allowed")
}

let c = parseInt(a) + parseInt(b)
console.log("The sum is",c)

function main(){
    let x = 10
    try{
        console.log(c*x)
        return true
    }
    catch(error){
        console.log('Error agya bhaiii');
        return false
    }
    finally{
        console.log('The files are being closed and db connection is being closed');
    }
}

main()