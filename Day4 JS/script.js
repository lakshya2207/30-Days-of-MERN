
if (true){var a = "used to store data/values";

console.log("Variables :",a);

var b=6,c=80,d=5;
console.log(a + b)

// var : globally , let/const : block {}
console.log(typeof(a),typeof(b))


//Datatypes :
// number,null,obejct, string,boolean

// Conditional Statements
if(b>10){
    console.log("bada h");
}
else if(b=6){
    console.log("barabar h");
    
}
else{
    console.log("chota h");
}

switch (c){
    case 4:
        console.log(c);
        break;
    case 6:
        console.log(c);
        break;
    case 8:
        console.log(c);
        break;
    default :
    console.log("nothing that you expect")
    
}
console.log(13=="13"||13==="13")
// Ternary operator
console.log(13=="13"?"a":"b")




// Type of loops :
// for,for in,for of,while,do while
for( var i=0;i<5;i++){
    console.log(i);
}
while (i!=0){
    console.log(i);
    i--
}
do{
    console.log("chala");
    i++;
    
}while(i<-5)

l=[10,20,30,40,50]

for (a of l){
    console.log(a);
// prints elements 
}

let obj={
    name:"lakshya",
    role:"Student",
    Company:"none"
}
for (const key in obj) {
    const element=obj[key];
    console.log(key,":",element);
 }

function addp(x,y){
    console.log(x+y);
    return x+y;
}
let x
console.log(addp(5,x));
// addp(5,6)
}

let str= "LAkshya";
console.log(str)
console.log(str.slice(1,3))
console.log(str.split(1))
console.log(str[-str.length])
//template literals
console.log(`${str} is a good boy.`)
console.log(`${str.toUpperCase()} is a good boy.`)
console.log(`${str.toLowerCase()} is a good boy.`)
// console.log(`${str.toLocaleUpperCase()} is a good boy.`)


let arr=[4,5,6,7];
console.log(arr.toString());
console.log(arr.join("@"));
console.log(arr.pop());
console.log(arr);

console.log(arr.push("laa"));
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift(5));
console.log(arr);k