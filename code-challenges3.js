// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

// declare a function that takes in an array
const mixItUp = (array) => {
    //use the shift method to remove the first element of thr array
    array.shift()
     //create a for loop starting at the last index of the array and decrementing by one and stopping at the second index of the array.
    for(let i = array.length -1; i > 1; i--){
    //we want to pick a value in the array to swap with the current value. so we need to create a variable in which we use Math.floor(Math.random() * (i+1).
    newPos = Math.floor(Math.random() * (i + 1))
    // create a variable to store the current value
    temp = array[i]
    // next set the newPos  as the currrent value
    array[i] = array[newPos]
    // next put the temperary stored value into newPos
    array[newPos] = temp
    }
    return array
}
console.log(mixItUp(collections))


 // --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.


var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

//declare a variable that takes in an argument
const sumCubed = (array) => {
// create an anchor that  holds the sum of all the numbers cubed
let sum = 0
//create a map function that uses the math.pow method to cube each value in the array
let cubed = array.map(value => Math.pow(value, 3  ))
//create a for loop to go through each index in the array and add it to the achor
  for (i=0; i < cubed.length; i++ )
   sum = sum + cubed[i]
   return sum
 }
console.log(sumCubed(cubeAndSum1))
console.log(sumCubed(cubeAndSum2))





// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// //declare a function that takes in a an array
//   const lowHigh = (array) => {
//     //create a variable that uses the reduce method which compaires the first argument which is like an anchor to the second argument and use a ternary operator to calculate if the current value is smaller than the anchor value.
//     let minValue = array.reduce((acc,cur) => acc < cur? acc : cur )
//     //do the same thing for the maxValue
//     let maxValue = array.reduce((acc,cur) => acc > cur? acc: cur )
//     //return a new variable with the min and max values
//     let newArray = [minValue,maxValue]
//     return newArray
// }
// console.log(lowHigh(nums1))
//------other ways to solve

// const lowHigh = (array) => {
//   let minValue = Math.min(...array)
//   let maxValue = Math.max(...array)
//   return [minValue, maxValue]
// }
//console.log(lowHigh(nums1))
//------------------------
const lowHigh = (array) => [Math.min(...array),Math.max(...array) ]
console.log(lowHigh(nums1))







// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"
//create a variable that takes in an arrgument of a string
const everyOther = (string) =>{
 //split the string into an array
  let array = string.split("")
    //use the .map function to loop through the array.
    //pass in two arguments the value and the index.
    //use the ternary operator to find the odd
  let newArray =  array.map((value,index) => index %2 === 0? value : value.toUpperCase())
  //join the array
   return newArray.join("")

}
    console.log (everyOther(testString1))

//---------other way to solve
//declare a variable that takes in a string as an argument
// const everyOther = (string) =>{
    //create a new variavle with an emty string for the changed letters to go into
//    let newString = ""
    // create a for loop to go through each character
//     for(let i=0; i<string.length; i++){
    // create a variable to reference the value at the index
//         let char = string.charAt(i)
//create an if statement usuing  a modulo to find the odd indexes
//         if( i % 2 === 1){
    //create a new variable char that changes the odd indexes to uppercase
//             char = char.toUpperCase()
//         }
// add each value to the new string
//         newString += char
//     }
//     return newString
// }
// console.log (everyOther(testString1))





// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
 // declare a function that takes in two arguments
 const noDup = (array1,array2) =>{
  //use the concat method to join the two arrays into one
  let oneArray = array1.concat(array2);
  //use the .filter method to pull out data from the array
  //use the indexOf method to find the  indexof a particular value and if that value is a duplicate it wont equal the index and wont return the duplicate
  let jointNoDup = oneArray.filter((value, index) => oneArray.indexOf(value) === index);
    return jointNoDup
 }
 console.log(noDup(arr1,arr2))

 //-------------------------------
    //Spread Operator
 const spread = (array11, array22) =>{
     // create a new variable usuing the spread overator to combine the arrays
     let combine = [...array11, ...array22]

  let jointNoDup1 =   combine.filter((value, index) => combine.indexOf(value) === index);
    return jointNoDup1
 }
    console.log(spread(arr1,arr2))
