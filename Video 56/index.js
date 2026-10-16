console.log("Hello i am conditional tutorial")

let age = 1
grace = 2

// console.log(age+grace)
// console.log(age-grace)
// console.log(age*grace)
// console.log(age/grace)
// console.log(age**grace)
// console.log(age%grace)

// age += grace
// console.log(age)

if((age)==18){
    console.log("You can drive")
}

else if(age == 0){
    console.log("Are You Kidding!")
}

else if(age == 1){
    console.log("Are you again kidding?")
}

else{
    console.log("You cannot drive")
}

x = 3 == "3"
y = 3 === "3"
console.log(x,y)

// comment1
// comment2

/* 
i am a
multiline
comment
*/

a = 6
b = 8
let c = a>b? a-b:b-a;
console.log(c)

// let c = a>b? a-b:b-a
/*
translates to:
if(a>b){
    let c = a-b
}
else{
    let c = b-a
}
*/