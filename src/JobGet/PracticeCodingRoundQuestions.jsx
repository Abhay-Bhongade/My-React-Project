import React from 'react'

const PracticeCodingRoundQuestions = () => {

    //polyfill of map method
   
    Array.prototype.myMap = function myMap(cb){
    let self = this
    let arr = [];
    for(let i = 0; i<self.length;i++){
      arr[i] = cb(this[i],i,self)
    }
    return arr
}
const arr = [10,20,30,40,50]

const newArray = arr.myMap((item,index,arr)=>{
        return item * item
})

console.log("newArray",newArray);

//polyfill for filter method

Array.prototype.MyFilter = function MyFilter(cb){
let arr = [];
let self = this;

for(let i = 0; i<self.length;i++){
  if(cb(self[i],i,self)){
    arr.push(self[i])
  }
}
return arr
}

const filterArr = arr.MyFilter((item)=>item > 20)

console.log("filterArr",filterArr);


//flatten the Array

function nestedArray(arr){
return arr.reduce((prev,curr)=>{
  return prev.concat(Array.isArray(curr) ? nestedArray(curr) : curr )
},[])
}

var nestedArr = [1, [2, [3, 4], 5], 6];

console.log("nestedArray",nestedArray(nestedArr));
  return (
    <div>PracticeCodingRoundQuestions</div>
  )
}

export default PracticeCodingRoundQuestions;