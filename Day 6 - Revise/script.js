"use strict"

let animal={
    eats:true
};
let rabbit={
    jumps:true
};

rabbit.__proto__=animal
console.log(animal);
console.log(rabbit);


// IIFE
async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    }) 
}
(async function main(){

    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
})()


// Deconstructing
let [x,y, ...rest]=[10,15,1,2,3,4,5];
console.log(x,y,rest);

let obj={
    a:1,
    b:2
}
 
let {a,b}=obj
console.log(a,b);
console.log(...rest);