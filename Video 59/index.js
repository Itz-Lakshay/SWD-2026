let a = Number(prompt("Enter first number: "))
let o = prompt("Enter Operator: ")
let b = Number(prompt("Enter second number: "))
let r
let x

function calc(a,b,o){
    x = Math.random()
    if(x<0.1){
        if(o == "+"){
            r = a-b
        }
        else if(o == "*"){
            r = a+b
        }
        else if(o == "-"){
            r = a/b
        }
        else if(o == "/"){
            r = a**b
        }
    }
    
    else{
        if(o == "+"){
            r = a+b
        }
        else if(o == "*"){
            r = a*b
        }
        else if(o == "-"){
            r = a-b
        }
        else if(o == "/"){
            r = a/b
        }
        
    }
    return r
}

let ans = calc(a,b,o)
console.log("The value of "+a+" "+o+" "+b+" is "+ans)
console.log(x)