function print(...args) {
    console.log(...args)
 }

if (false) {
    
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
console.log(arr);
// splice removes or replace elements upto a range
console.log(arr.splice(1,2,10,30));
console.log(arr);

// same as name 
arr.forEach(element => {
    console.log(element);
});
    


//Map Filter Reduce



let arr11 = [1,2,3,4,5]

// Map creates new array after aplying some funtion onn every element of an array
let arr1=arr.map((e,index)=>{
    console.log(index,e);
    return e**2;
})
console.log(arr,arr1)

// Filter helps to distinguish elements
arr1.filter((e)=>{
    if (e>10){
        console.log(e);
        print(e);
    }
})
// Works in pair of 2 elements , perform operation on kind of whole array
print(arr1.reduce((a,b)=>{
    print(a,b)
    return a>=b;
}))

arr=[5,4,3,2,1]
print(arr.reduce((a,b)=>{
        return a*b;
    }))

    let cont=document.body.childNodes[1]
undefined
cont.firstElementChild.style.backgroundColor="red";
'red';

document.querySelector(".box")
//<div class=​"box" style=​"background-color:​ red;​">​a​</div>​
document.querySelector(".box").style.backgroundColor="yellow";
//'yellow'

document.querySelectorAll(".box")
// NodeList(5) [div.box, div.box, div.box, div.box, div.box]
document.querySelectorAll("div")
// NodeList(6) [div.container, div.box, div.box, div.box, div.box, div.box]
arr=document.querySelectorAll("div")
arr.forEach(element => {
    element.style.backgroundColor="cyan";
});

}

let button = document.getElementById("click");
button.style.backgroundColor="red";
button.style.borderRadius="25%";

button.addEventListener("click",()=>{
    print("clicked");
})

print("a");
setTimeout(()=>{
    print("b");
},5000)
print("c");

// callback fnc+ function used at event/time to do something

let prom = new Promise((resolve,reject)=>{
    a=Math.random();
    a>0.5?reject("Not harry"):
    setTimeout(()=>{
        console.log("Yes I am Done")
        resolve("Harry")
    },5000);    
})

prom.then((a)=>{
    print(a)
}).catch((a)=>{
    print(a)

})