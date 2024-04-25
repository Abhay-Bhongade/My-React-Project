import React from 'react'

const DeepCopy = () => {

function deeplyCopied(obj){
    if(obj === null || typeof obj !== "object"){
        return obj
    }

    let newObj = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        newObj[key] = deeplyCopied(obj[key])
    }
    return newObj
    
}

    let obj1 = {
        name:"Aman",
        age : 27,
        address:{
            city:"Indore",
            state:"MP"
        }
    }

let obj2 = deeplyCopied(obj1);

obj2.address.city = "Bhopal"

console.log("obj1",obj1);
console.log("obj2",obj2);


//So, in simple terms, deeplyCopied(obj[key]) is saying: "If the value of the current property (obj[key]) is an object or an array, create a deep copy of it using the deeplyCopied function, and assign that copy to the corresponding property in the new object we're creating." This ensures that all nested objects and arrays are deeply copied, maintaining their own separate copies in the new object.


//closure 

function outer(){
    var a = 10;
    return function inner(){
        console.log("a",a);
    }
}
let output = outer();
output();

  return (
    <div>DeepCopy</div>
  )
}

export default DeepCopy