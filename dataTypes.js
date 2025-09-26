//Primitive DataTypes
//There are 7 primitive data types in JS
//number, string, boolean, undefined, null, bigint,symbol
let a=10; //number
let b=10.6; //floatong points (comes under number)
let c="Hello"; //string
let d=false; //bool
let e; //undefined=>jb koi bhi variable ko decalir kiya hai par value nahi assign karte hain to undefined hota hai 
//const ke sath undefine nahi ho sakta hume value deni parti hai
let f=null; //null
let g=10000000001; //bigint

const id1=Symbol("id");  //Symbol
const id2=Symbol("id");
console.log(id1==id2)



//Non Primitive Data types in JS
//Array, Object and function
let arr=[10,"Akshita",true];
console.log(arr)

let obj={        //objects are present in key value pair
    name:"Akshita",
    rollnum:14,
    section:'B',
    pass:true,
}

let fun=function add()
{
    console.log("Hello");
}
add(); //function 
//Functions in JS can be stored in a datatype


