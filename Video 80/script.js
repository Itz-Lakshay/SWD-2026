// let obj = {
//     a:1,
//     b:"Lakshay"
// }

// console.log(obj)
// console.log(obj.a);
// console.log(obj.c);

// let animal = {
//     eats:true
// }

// let rabbit = {
//     jumps:true
// }
// rabbit.__proto__ = animal

// console.log(rabbit);
// console.log(rabbit.eats);

class Animal{
    constructor(name){
        console.log('Object is created...');
        this.name = name
    }

    eats(){
        console.log('Kha Rha Hu!');
    }

    jumps(){
        console.log('Kud rha hu');
    }
}

let a = new Animal("Bunny")
console.log(a);
console.log(a.eats());
console.log(a.jumps());

console.log(a.name);

class Lion extends Animal{
    constructor(name){
        console.log('Object is created and he is a lion ...');
        super(name)
    }

    eats(){
        console.log('Kha rha hu Roar');
        super.eats()
    }
}
let l = new Lion("Sheru")
console.log(l);
console.log(l.name);
console.log(l.eats());
console.log(a.eats());

console.log(l instanceof Lion);
console.log(l instanceof Animal);
console.log(a instanceof Animal);
console.log(a instanceof Lion);
