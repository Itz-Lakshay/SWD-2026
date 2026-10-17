console.log("I am a tutorial on Loops")

let a = 1
console.log(a)
console.log(a+1)
console.log(a+2)

for (let i = 0; i  < 100; i++) {;
    console.log(a+i)
}

let obj = {
    name : "Lakshay",
    role : "Programmer",
    company : "SpaceX"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
} 

for (const c of "Lakshay") {
    console.log(c)
}

let i = 0
while(i<6){
    console.log(i);
    i++;
}

let j = 10
do{
    console.log(j);
    j++;
}while(j<6)