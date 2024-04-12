import { data } from 'autoprefixer';
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


//Given an array of objects [{banana: 5, apples:5}, {pear: 6}, {apples: 5}, {banana:2}], return an object with the sum of all the fruits
// Ex: { apples: 10, banana: 7, pear:6 }

function addFruites(arr){
  let fruitsCount = {};
  arr.forEach((obj)=>{
      Object.keys(obj).forEach((key)=>{
        fruitsCount[key] = (fruitsCount[key] || 0) + obj[key]
      })
  })
  return fruitsCount;
}

const arrOfFruits = [{banana: 5, apples:5}, {pear: 6}, {apples: 5}, {banana:2}]

let result = addFruites(arrOfFruits)

console.log("addFruites result",result);

//Write a JavaScript program to find the maximum number in an array. 

function findMaxNum(arr){
  let maxNum = 0;
  for(let i = 0;i<arr.length;i++){
    if(arr[i] > maxNum){
      maxNum = arr[i]
    }
  }
  return maxNum;
}
let arrOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,55,88,99];
console.log("findMaxNum",findMaxNum(arrOfNumbers));

//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function stringIsPalindrome(str){
let reverseStr = str.split("").reverse().join("");
return str === reverseStr
}

let string = "MADAM"
let string2 = "abba"
console.log("stringIsPalindrome",stringIsPalindrome(string2));

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function findEvenNumbers(arr){
  let evenNums = [];
for(let i =0; i<arr.length;i++){
  if(arr[i] % 2 === 0){
    evenNums.push(arr[i]);
  }
}
return evenNums;
}
console.log("findEvenNumbers",findEvenNumbers(arrOfNumbers));

//with filter method

const filterEvenNums = arrOfNumbers.filter((item)=> item % 2 === 0)

console.log("filterEvenNums",filterEvenNums);

//Write a JavaScript program to calculate the factorial of a given number. (look once again)

function factorialOfNums(num){
    if(num === 0 || num === 1){
      return 1;
    }

    let factorial = 1;
    for(let i = 1; i<=num ; i++){
      factorial *= i;
    }
    return factorial
}

console.log("factorialOfNums",factorialOfNums(5));

//Write a JavaScript function to check if a given number is prime. (look once again)

function NumberIsPrime(num){
if(num <= 1){
  return false;
}
for(let i = 2 ; i <= num /2 ; i++){
  if(num % 2 === 0){
    return false
  }
}
return true;

}

console.log("NumberIsPrime",NumberIsPrime(4));

//Write a JavaScript program to find the largest element in a nested array. (look once again)

function nestedArrFun(nestedArr){
  let largest = nestedArr[0][0];
  console.log("largestnested",largest);
  for(let arr of nestedArr){
    for(let num of arr){
      if(num > largest){
        largest = num
      }
    }
  }
  return largest;
}

let nestedArrNum = [[9,4,5,6]];

console.log("nestedArr",nestedArrFun(nestedArrNum));

//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function firstLetterCapital(str){
  
  return str.replace(/\b\w/g,l=>l.toUpperCase())
  
}
let sentence = "i am javascript developer";
console.log("firstLetterCapital",firstLetterCapital(sentence));

//How can you uppercase first character in string from  the array.


function upperCasefirstChar(arr){
  let newMonths = [];
  for(let day of arr){
    day = day.charAt(0).toUpperCase() + day.substring(1);
    console.log("day",day);
    newMonths.push(day)
  }
  return newMonths
}

let months = ["january","febuary","march","april"];

console.log("upperCasefirstChar",upperCasefirstChar(months));




//Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame. 
function debounceFunc(func,delay){
let timer ; 
return function(){
  clearTimeout(timer);
 timer = setTimeout(func,delay)
}
}


//Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

function sortByKey(arr,key){
  return arr.sort((a,b)=>a[key]-b[key])
}

//Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 
function deepClone(obj){
return JSON.parse(JSON.stringify(obj))
}


let person = {
  name:"Abhay",
  age:25,
  address:{
    city:"Indore",
    state:"Madhya Pradesh"
  }
}

console.log("deepClone",deepClone(person));

person.address.city = "Mumbai";


//Write a recursive function to calculate the factorial of a given number. (look once again)

function recursiveFunc(num){
  if(num <=1){
    return 1 ;
  }
  return num * recursiveFunc(num -1)
}
console.log("recursiveFunc",recursiveFunc(5));


//Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 

function mergeTwoArr(arr1,arr2){
return [...arr1,...arr2].sort((a,b)=>a-b)
}
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

console.log("mergeTwoArr",mergeTwoArr(arr2,arr1));

//Implement a function that flattens a nested array in JavaScript, converting it into a single-level array.

function flatternArray(arr){
    return arr.flat(Infinity);
}

let nestedArr2 = [1,[2,3,4,[5,6,7],8,9,[10]]];
console.log("flatternArray",flatternArray(nestedArr2));

//without using method

function recursiveArr(arr){
  return arr.reduce((prev,curr)=>{
    return prev.concat(Array.isArray(curr) ? recursiveArr(curr) : curr )
  },[])
}

console.log("recursiveArr",recursiveArr(nestedArr2));

//Implement a function to reverse a string without using the built-in reverse() method. (look once again)
function reversString(str){

  let reversestr = "";
  for(let i = str.length-1 ; i >=0; i--){
    reversestr += str[i];
  }
  return reversestr;
}
let str = "name"
console.log("reversString",reversString(str));

//Given an array of numbers, write a function to find the largest and smallest numbers in the array. 

function findMaxandMinNum(arr){
let minNum = Math.min(...arr);
let maxNum = Math.max(...arr)
return `smallest num is ${minNum} and largest num is ${maxNum}`;
// return [minNum,maxNum]
}

let arr11 = [1,2,3,4,5,6,7,8,9,10,20]

console.log("findMaxandMinNum",findMaxandMinNum(arr11));

//Implement a function to find the sum of all the numbers in an array. 

function sumOfAllNum(arr){
let result = 0;
for(let i = 0 ; i < arr.length ; i++){
  result += arr[i]
}
return result;
}
console.log("sumOfAllNum",sumOfAllNum(arr11));

//Given a string, write a function to count the occurrences of each character in the string. 

function countCharOccurances(str){
let count = {};

for(let word of str){
  count[word] = (count[word] || 0) + 1 ;
}
return count
}

let str33 = "aabbccddefgh"

console.log("countCharOccurances",countCharOccurances(str33));

//Write a function that reverses the order of words in a sentence without using the built-in reverse() method. (look once again)

function reverseWords(sentence){
let result = "";

for(let i = sentence.length-1 ; i>=0 ; i--){
  result += sentence[i]
}
return result
}


let sentence21 = "How are You"

console.log("reverseWords",reverseWords(sentence21));

//Implement a function that finds the second smallest element in an array of integers. 

function secondSmallestEle(arr){
  if(arr.length < 2){
    alert("Array should be greater than 2");
    return;
  }else{
    let sortedArr = arr.sort((a,b)=> a - b);
    return sortedArr[1];
  }
    
}
let arr22 = [11,22,33,44,55,66,77];

console.log("secondSmallestEle",secondSmallestEle(arr22));

//Write a function that generates a random alphanumeric string of a given length. 

function randomAlphaNumString(length){
let AlphaNumString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
let result = ""

for(let i = 0 ; i<length ; i++){
  let random = Math.floor(Math.random() * AlphaNumString.length) ;
  result += AlphaNumString.charAt(random);
}

return result;

  }

console.log("randomAlphaNumString",randomAlphaNumString(7));

//Implement a function that returns the average value of numbers in an array. 

function findAverageValue(arr){
  let result = 0;
  for(let i = 0;i< arr.length;i++){
    result += arr[i];
  }
  return result/arr.length;
}

console.log("findAverageValue",findAverageValue(arr22));

//Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1. 

function findIndexOfEle(arr,element){
const index = arr.indexOf(element);
return index !== -1 ? index : -1
}
let arr33 = [11,22,33,44,55,66,77,88,99,100]
console.log("findIndexOfEle",findIndexOfEle(arr33,33));

//Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array.
function removeFalsyValues(arr){
  let notFalsyValues = [];
  for(let i =0; i<arr.length;i++){
    if(arr[i]){
      notFalsyValues.push(arr[i])
    }
  }
  return notFalsyValues;
}

let falsyVaues = ["hi",false, null, 0, "", undefined, , NaN,11,22,33,44,"Banana","Mango"];
console.log("removeFalsyValues",removeFalsyValues(falsyVaues));

//Implement a function that merges two arrays into a single array, alternating elements from each array.

function alternateElements(arr1,arr2){
let result = [];
let maxEle = Math.max(arr1.length,arr2.length)

for(let i = 0 ; i< maxEle ; i++){
  if(i < arr1.length) result.push(arr1[i]);
  if(i < arr2.length) result.push(arr2[i])
}
return result ;
}

let arr91 = [1,2,3,4,5];
let arr92 = [6,7,8,9,10,11,12,13,14,15];
console.log("alternateElements",alternateElements(arr91,arr92));

//Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays. 

function groupEvenOdd(arr){
let evenNums = [];
let oddNums = [];
for(let i = 0 ; i<arr.length;i++){
  if(arr[i] % 2 === 0){
    evenNums.push(arr[i]);
  }else{
    oddNums.push(arr[i])
  }
}
return `even Numbers are ${evenNums} and odd Numbers are ${oddNums}`

}

let nums3 = [1,2,3,4,5,6,7,8,9,10]

console.log("groupEvenOdd",groupEvenOdd(nums3));

//write a function to  find three largest element from  the array in js

function findThreeLargestNums(arr){
  if(arr.length < 3){
    return 'Array length should be at least 3';
  }
    let sortedArr = arr.sort((a,b)=>b-a);
    return [sortedArr[0],sortedArr[1],sortedArr[2]]
}
console.log("findThreeLargestNums",findThreeLargestNums(nums3));

//without method
//NEGATIVE_INFINITY
//A value that is less than the largest negative number that can be represented in JavaScript. JavaScript displays NEGATIVE_INFINITY values as -infinity.

function findLargestThreeNum(arr){
  if(arr.length < 3){
    alert("Array should contain at least 3 elements");
    return;
  }

let firstLargestNum = Number.NEGATIVE_INFINITY;
let secondLargestNum = Number.NEGATIVE_INFINITY;
let thirdLargestNum = Number.NEGATIVE_INFINITY;

for(let num of arr){
  if(num > firstLargestNum){
    thirdLargestNum = secondLargestNum;
    secondLargestNum = firstLargestNum;
    firstLargestNum = num
  }
  else if(num > secondLargestNum){
    thirdLargestNum = secondLargestNum;
    secondLargestNum = num
  }
  else if(num > firstLargestNum){
    firstLargestNum = num
  }
}

return [firstLargestNum,secondLargestNum,thirdLargestNum]
}
let arr39 = [10,20,30,40,50]
console.log("findLargestThreeNum",findLargestThreeNum(arr39));

//write a function to remove  middle element from the array

function removeMiddleNum(arr){
  if(arr.length < 3){
    alert("Array should contain at least three elements");
    return;
  }
let middleIndex = Math.floor(arr.length / 2);
if(arr.length % 2 === 0){
  arr.splice(middleIndex - 1,2)
}else{
  arr.splice(middleIndex,1)
}
}

let arrMain = [1,2,3,4,5]
removeMiddleNum(arrMain);

console.log("arrMain",arrMain);

//how to make sentence out of array

function makeSentence(arr){
 // return arr.join(" ")
    let sentence = "";
    for(let word of arr){
      sentence += word + " "
    }
    return sentence

}
let arrOfSentence = ["My","Name","Is","David"];
console.log("makeSentence",makeSentence(arrOfSentence));


//How to check if array contains any elements  of another array 

function arrayContainAnother(arr1,arr2){
    let result = arr1.some(item=>arr2.includes(item));
   return result
}

let arr100 = [1,2,3,4,5];
let  arr101 = [6,7,8,9,10];
console.log("arrayContainAnother",arrayContainAnother(arr100,arr101));

//How we can extract few fields from the given json object and form a new array out of it

let jsonData = {
  "students" : [
    {
      id:1,
      name:"Sahil",
      email:"shahil@gmail.com",
      note:"how are you"
    },
    {
      id:2,
      name:"Rahul",
      email:"rahul@gmail.com",
      note:"how are you"
    },
    {
      id:3,
      name:"Aman",
      email:"aman@gmail.com",
      note:"how are you"
    },
    {
      id:4,
      name:"Rajiv",
      email:"rajiv@gmail.com",
      note:"how are you"
    },
    {
      id:5,
      name:"Kunal",
      email:"kunal@gmail.com",
      note:"how are you"
    },
  ]
}

const newFormData = jsonData.students.map((item)=>{
  let obj = {
    id:item.id,
    name:item.name,
    email:item.email
  }
  return obj
})

console.log("newFormData",newFormData);

 //What is IIFE (Immediately Invoke function expression) 

 (function(){
  console.log("I am IIFE");
 })()


  return (
    <div>PracticeCodingRoundQuestions</div>
  )
}

export default PracticeCodingRoundQuestions;