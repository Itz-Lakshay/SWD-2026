// console.log(a1);

async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

(async function main(){
    console.log(a1)
    // let a = await sleep()
    // console.log(a);
    
    // let b = await sleep()
    // console.log(a);

    // let x, y = [1, 5]
    // let [x, y] = [1, 5,7] //Destructuring
    // console.log(x,y);

    // let [a,b,...rest] = [1,5,7,8,9,10] //if we only write rest then it will take 7 in its value
    // console.log(a,b,rest);

    let obj = {
        a : 1,
        b : 2,
        c : 3
    }

    let {a,b} = obj
    console.log(a,b)

    var a1 = 6
    
    
})()  //IIFE - Immediately Invoked Function Expression

hello("Lakshay")

// let hello = (name) => {
//     console.log('hello');
// }

function hello(name){
    console.log('hello');
    
}
