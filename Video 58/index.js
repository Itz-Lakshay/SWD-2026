// console.log("Hey Lakshay you are nice!")
// console.log("Hey Lakshay you are good!")
// console.log("Hey Lakshay your tshirt is nice!")
// console.log("Hey lakshay your course is good too")

function nice(name){
    console.log("Hey " + name +  " you are nice!")
    console.log("Hey " + name +  " you are good!")
    console.log("Hey " + name +  " your tshirt is nice!")
    console.log("Hey " + name +  " your course is good too")
}

nice("Rohan")
nice("Lakshay")

function sum(a,b,c = 3){
    console.log(a,b,c)
    return a+b+c
}
sum(2,3)

r = sum(3,5)
console.log(r)

result1 = sum(15,13)
result2 = sum(1,1)
result3 = sum(1000,19)
console.log("The sum of these numbers is: ",result1)
console.log("The sum of these numbers is: ",result2)
console.log("The sum of these numbers is: ",result3)

r1 = sum(1,2,10)
console.log(r1)

x = sum(3)
console.log(x)

const func1 = (x)=>{
    console.log("I am an arrow function ",x)
}
func1(10)
func1(20)
func1(30)