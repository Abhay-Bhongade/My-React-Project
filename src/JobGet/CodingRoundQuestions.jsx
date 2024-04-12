import { split } from 'postcss/lib/list';
import React, { useEffect, useState } from 'react'

const CodingRoundQuestions = () => {
    //sort function  with numbers and alphabet working.
//1.unique values from array
const numArray = [1,1,2,2,3,4,4,5,6,6];
const uniqueValues = [...new Set(numArray)];
console.log("uniqueValues",uniqueValues);

//1.unique values from array of object
const arrayOfObjects = [
    { id: 1, name: "Object 1" },
    { id: 2, name: "Object 2" },
    { id: 3, name: "Object 3" },
    { id: 1, name: "Object 1" },
    { id: 2, name: "Object 2" },
    { id: 3, name: "Object 3" }
];

const filterUniquearrayofObj = arrayOfObjects.reduce((prev,current)=>{
    const accumlated = prev?.find((item)=>item?.id === current?.id);
    if(!accumlated){
        prev.push(current)
    }
    return prev;
},[])

console.log(arrayOfObjects);
console.log("filterUniquearrayofObj",filterUniquearrayofObj);


//1.unique values from object
//1.unique values from array of object or array or object without using the methods

//2. sum of even number only.
const nums = [1,2,3,4,5,6,7,8,9,10]
const sumOfNumbers = nums?.reduce((prev,current)=> current % 2 === 0 ? current + prev : prev ,0);
console.log("sumOfNumbers",sumOfNumbers);

const nums2 = [1,2,3,4,5,6,7,8,9,10]

const sumOfNumbersfun = (arr)=>{
let result = 0;
for(let i = 0; i <= arr.length -1; i++){
if(arr[i] % 2 === 0){
    result += arr[i];
}
}
return result;
}

console.log("sum of even",sumOfNumbersfun(nums2));

let x = + "5";
let y = - "5";
console.log("x",x);
console.log("y",y);
console.log("add x and y",x+y);

//3. remove the  middle element from the array
const midelems = [1,2,3,4,5,6,7,8,9];
function removeMiddle(arr){
if(arr.length < 3 ){
    alert("array must contain at least three elements");
    return;
}else{
    const middleIndex = Math.floor(arr.length / 2) ;
    if (arr.length % 2 === 0) {
        arr.splice(middleIndex-1,2)
    } else {
        arr.splice(middleIndex,1)  
    }

}
}
removeMiddle(midelems)
console.log("midelems",midelems);

//4 sort number vs string

//sort number
const numbsNew = [1,2,3,4,5,6,7,8,9,10];
const sortedNumValues = numbsNew.sort((a,b)=>a-b);
console.log("sortedNumValues",sortedNumValues);

//sort string
const newStingarr = ["Raj","Gopal","Aman","Kunal"]
const sortedStrings = newStingarr.sort()
console.log("sortedStrings",sortedStrings);

//to print line after every one second
// useEffect(()=>{
//     const interval = setInterval(()=>{
//         console.log("Hi I am Interval function");
//     },[1000])
// return () => clearInterval(interval);
// },[])


//from this object change only secondaddress value to test3
const [obje, setObject] = useState({
    firsname: "ajay",
    lastname: "johar",
    address: {
      firstaddress: "test1",
      secondaddress: "test2"
    }
  });

  const handleChange = () => {
    // Update the state by creating a new object and spreading the previous state
    setObject({
      ...obje,
      address: {
        ...obje.address,
        secondaddress: "test3"
      }
    });
  };

  console.log("obje",obje);

//map method polyfill 
  function myMap(cb){
    let self = this;
    let arr = [];
    for(let i = 0 ; i < self.length;i++){
        arr[i] = cb(self[i],i,self)
    }
    return arr;
    }
    
     Array.prototype.myMap = myMap;
    
    const arr1 = [10,20,30];
    const resultarr = arr1.myMap((item)=> item * 2);
    console.log("resultarr",resultarr)

//create a function in JavaScript to check if one word contains another word

function compareWords(wordArray) {
  let firstWord = wordArray[0].toLowerCase();
  let secondWord = wordArray[1].toLowerCase();
  
  for (let i = 0; i < secondWord.length; i++) {
    let letter = secondWord[i];
    console.log("letter",letter);
    if (firstWord.indexOf(letter) === -1) {
      return false;
    }
  }
  
  return true;
}

// Test the function
const result1 = compareWords(["boy", "oy"]);     // true
const result2 = compareWords(["Mary", "Army"]);  // true
const result3 = compareWords(["Alien", "line"]); // true
const result4 = compareWords(["voodoo", "no"]);  // false

console.log("result1", result1); // true
console.log("result2", result2); // true
console.log("result3", result3); // true
console.log("result4", result4); // false

// for(var i= 0;i<15;i++){
//   setTimeout(function(){
//     console.log(1);
//   },1000)
// }

//it will print 1 (15times)

// for(let i= 0;i<15;i++){
//   setTimeout(function(){
//     console.log(1);
//   },1000)
// }

//it will print 1 (15times) for both

// for both function return or sum will be 5
function sum(x,y){
  if(y== undefined){
      return z => {
          z + x;
      }
  }
  return x + y 
}
console.log(sum(2,3));
console.log(sum((2),(3)));


//merge two string and give the resulted string result

function mergeStrings(a,b){
  let len = Math.min(b.length,x.length);
  let temp = "";
  for(var i =0; i<len ; i++){
      temp = temp + a[i] + b[i]
  }
  return temp + a.slice(i) + b.slice(i)

}
let str1 = 'abcdef';
let str2 = '123'
console.log("mergeStrings",mergeStrings("abcdef","123")
);


//which user has the age 26 return his firstname
//also achieve same thing with the reduce method

const users = [
  {firstName:"Aman",lastName:"Gupta",age:26},
  {firstName:"Raj",lastName:"Bansal",age:35},
  {firstName:"Mahesh",lastName:"Pandit",age:67},
  {firstName:"Rajesh",lastName:"Deol",age:35},
  {firstName:"Pranay",lastName:"Patil",age:20}
]

const Output = users.filter((person)=>person.age < 35).map((person)=> person.firstName)
console.log("Output",Output);

//from above array of Object I want to count the person with age like this {26:2,35:2,67:1}

const resultedCount = users.reduce((acc,curr)=>{
if(acc[curr.age]){
acc[curr.age] = ++acc[curr.age]
}else{
acc[curr.age] = 1;
}
return acc
},{})

console.log("resultedCount",resultedCount);


const ResultFirstNames = users.reduce((acc,curr)=>{
      if(curr.age < 30){
        acc.push(curr.firstName)
      }
      return acc
},[])

console.log("ResultFirstNames",ResultFirstNames);


//Given an array of objects [{banana: 5, apples:5}, {pear: 6}, {apples: 5}, {banana:2}], return an object with the sum of all the fruits
// Ex: { apples: 10, banana: 7, pear:6 }

const fruitesObj = [{banana: 5, apples:5}, {pear: 6}, {apples: 5}, {banana:2}];

function sumFruits(arr) {
  let fruitCounts = {};
  
  // Iterate through each object in the array
  arr.forEach(obj => {
      // Iterate through each key in the current object
      Object.keys(obj).forEach(key => {
          // If the key already exists in fruitCounts, add the count, otherwise initialize it
          fruitCounts[key] = (fruitCounts[key] || 0) + obj[key];
      });
  });
  
  return fruitCounts;
}

const fruitsArray = [{banana: 5, apples: 5}, {pear: 6}, {apples: 5}, {banana: 2}];
const result = sumFruits(fruitsArray);
console.log(result); // Output: { apples: 10, banana: 7, pear: 6 }

//How do you access the first and last elements of an array?
let arr = [1, 2, 3, 4];
let firstElement = arr[0];
let lastElement = arr[arr.length-1];
console.log("firstElement",firstElement);
console.log("lastElement",lastElement);


const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
numbers.forEach(num => console.log(num * 2)); // 2, 4, 6, 8, 10

//Write a function to flatten a nested array in JavaScript.

function flattenArray(arr){
  return arr.reduce((prev,curr)=>{
      return prev.concat(Array.isArray(curr) ? flattenArray(curr) : curr)
  },[])
}

var nestedArray = [1, [2, [3, 4], 5], 6];
 // returns [1, 2, 3, 4, 5, 6]
console.log(flattenArray(nestedArray));

//What does the reduce() method do in the flattenArray() function above?
//Answer: The reduce() method in JavaScript takes an array and applies a function to each element, accumulating the result into a single value. In the flattenArray() function above, the reduce() method is used to concatenate the current element (either a flattened sub-array or a non-array value) to the flattened array so far.


//How can you find the intersection of two arrays?  (common elements from both arrays).
const arr111 = [1, 2, 3, 4];
const arr222 = [3, 4, 5, 6];
const commonEle = arr111.filter((item)=>arr222.includes(item));
console.log("commonEle",commonEle); //[3,4] 

//Write a function that swaps the first two elements in a given array (solve with destructing)
function swapTwoEle([first,second,...rest]){
      return [second,first,...rest];
}

console.log(swapTwoEle(arr111));

//How to use the .map() polyfill
let data = [1,2,3,4,5,6,7];
Array.prototype.myMapFunc = function(cb){
  let arr = [];
  for(let i = 0;i < this.length; i++){
    arr.push(cb(this[i],i,this));
  }
  return arr;
}

const newr = data.myMapFunc((item)=>item * 3);
console.log("newr",newr);

//How to use the .filter() polyfill

Array.prototype.myFilter = function(cb){
  let arr = [];
  for(let i = 0; i < this.length; i++){
    if(cb(this[i],i,this)){
      arr.push(this[i]);
    }
  }
  return arr
}

const newfilterarr = data.myFilter((item)=> item > 3)
console.log("newfilterarr",newfilterarr);

Array.prototype.myReduce = function(callback,initialValue){
    if(typeof callback !== "function"){
      throw new TypeError(callback + "is not a function")
    }

    let array = this;
    let lengtharr = this.length
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    for(let i = initialValue !== undefined ? 0 : 1 ; i < lengtharr ; i++){
      if(i in array){
        accumulator = callback.call(undefined,accumulator,array[i],i,array);
      }
    }
    return accumulator
  }


const sumnew = data.myReduce((acc,curr)=> {
  return acc + curr;
},0)
console.log("sumnew",sumnew);

//write a function to reverse a string?()
function reverseString(str){
  let reversestr = ""
  for(let i = str.length - 1 ; i>=0; i--){
    reversestr += str[i]
  }
  return reversestr;
}
let str = "Hey How are You bro"
console.log(reverseString(str));

//write a function to return longest word in sentence
function longestWord(sentence){
 let words = sentence.split(" ");
 console.log(words);
 let longestWord = "";
 for(let word of words){
  if(word.length > longestWord.length){
    longestWord = word;
  }
 }
 return longestWord
}
let sentence = "I love coding in Javascript"

console.log("longestWord",longestWord(sentence));

//write a function that check whether given string is palindrome or not?

function isPalindrome(string){
  let reverseStr = string.split("").reverse().join("");
  return string === reverseStr
}
let strings = 'MADAM'
console.log(isPalindrome(strings));



//write a function to remove duplicate elements from the array
function removeDuplicate(arr){
return [...new Set(arr)]
}

let arrOfNums = [1,2,3,4,5,5,3,2]

console.log("removeDuplicate",removeDuplicate(arrOfNums));

//without method
function removeDuplicateNum(arr){
let uniqueElements = [];
for(let i = 0;i<arr.length;i++){
  if(uniqueElements.indexOf(arr[i] === -1)){
    uniqueElements.push(arr[i])
  }
}
return uniqueElements;
}

removeDuplicateNum(arrOfNums)


//write a function to check whether two strings are anagrams or not 
function isAnagram(str1,str2){
let string1 = str1.toLowerCase().split("").sort().join("");
let string2 = str2.toLowerCase().split("").sort().join("");

return string1 === string2;
}


console.log("isAnagram",isAnagram("Army","Mary"));

//write a function that return the number of vowels from string?

function isVowels(str){
let vowels = ["a","e","i","o","u"];
let count = 0;
for(let char of str.toLowerCase()){
  if(vowels.includes(char)){
    count++;
  }
}
return count;
}
let stringone = "Hello, Developer";
console.log(isVowels(stringone));

//write a function that return largest number from array?

function largestNum(arr){
  let largestNum = Math.max(...arr)
  return largestNum;
  }
  
  let arrNums = [11,2,33,4,5,5,3,212]
  
  console.log("largestNum",largestNum(arrNums));

  //without method
  function findLargestNum(arr){
let firstEleAsLargest =  arr[0];
let largest = 0;
for(let i = 1 ; i < arr.length; i++){
  if(arr[i] > firstEleAsLargest){
    largest = arr[i]
  }
}
return largest;
}
console.log("findLargestNum",findLargestNum(arrNums));

//write a function that check wheter given number is prime or not?
function isPrimeNum(num){
 for(let i =2; i < num / 2 ; i++){
  if(num % 2 ===0){
    return false
  }
 }
 return true;
}
let num = 3;
console.log("isPrime",isPrimeNum(num));

//write a function to calculate factorial of number (multiply the number with all previous number);
function findFactorial(num){
if(num === 0){
  return 1;
}
let factorial = 1;
for(let i = 1; i <= num; i++){
  factorial *= i;
}
return factorial;
}

console.log("findFactorial",findFactorial(5));

//write a function to remove all the whitespace from the string

function removeWhiteSpace(str){
return str.split(" ").join("")
}

console.log(removeWhiteSpace("Hey,   buddy   ok"));



//DSA - two sum problem with and without a sorted array
//without sorted Array

function twoSum(nums, target) {
  const numMap = {}; // Map to store seen numbers
  
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap[complement] !== undefined) {
          return [numMap[complement], i];
      }
      numMap[nums[i]] = i;
  }
  
  return [];
}

//with sorted array

function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
          return [left, right];
      } else if (sum < target) {
          left++;
      } else {
          right--;
      }
  }
  
  return [];
}

const numsSorted = [2, 7, 11, 15];
const targetSorted = 18;

console.log("twoSumSorted",twoSumSorted(numsSorted,targetSorted));


//Remove duplicate element from the object
function removeDuplicateElements(obj) {
  // Create an empty object to store unique elements
  const uniqueElements = {};

  // Iterate over the object's properties
  for (const key in obj) {
    // Check if the property is not inherited
    if (obj.hasOwnProperty(key)) {
      // Store the property value as a key in the uniqueElements object
      // This automatically removes duplicates, as object keys must be unique
      uniqueElements[obj[key]] = obj[key];
    }
  }

  // Convert uniqueElements object back to an array of values
  const result = Object.values(uniqueElements);

  return result;
}

// Example usage:
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 2, // Duplicate value
  e: 1 // Duplicate value
};

const uniqueValues1 = removeDuplicateElements(obj);
console.log(uniqueValues1); // Output: [1, 2, 3]


function removeDuplicateElements2(obj) {
  // Use Set to remove duplicate values
  const uniqueValues = new Set(Object.values(obj));

  // Convert Set back to an array
  return [...uniqueValues];
}


const uniqueValues2 = removeDuplicateElements2(obj);
console.log("uniqueValues2",uniqueValues2);

//How to find duplicate elements from the given array

function findDuplicateElements(arr){
const duplicate = arr.filter((item,index,arr)=>arr.indexOf(item) !== index);
return duplicate;
}
let duplicateArr = [11,22,11,44,55,55,33];
console.log("findDuplicateElements",findDuplicateElements(duplicateArr));

//How to find count of duplicates elements from the given array

const arrOfMonths = ["Jan","Feb","March","April","Jul","Jan","Jul","Aug","Aug"];

let months = arrOfMonths.reduce((prev,month)=>{
      if(prev[month] === undefined){
        prev[month] = 1
        return prev;
      }else{
        prev[month]++
        return prev
      }
},{})

console.log("months",months);

  return (
    <div>
        <h1>CodingRoundQuestions</h1>
        <div>
            <button onClick={handleChange}>ChangeValue</button>
        </div>
    </div>
  )
}

export default CodingRoundQuestions