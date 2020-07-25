// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

 var temp1 = 35
 var temp2 = 350
 var temp3 = 212
//
 //declare a function called boilPoint
  const boilPoint = (temp) => {
//create if/else statment determining if the temp is below,at, or above boiling point
   if(temp < temp3){
      return `${temp1} is less than boiling point `
  } else if(temp > temp3){
      return `${temp2} is above boiling point `
  } else if(temp === temp3){
      return `${temp3} is at boiling point `
   }
 }
 //call the function and run it in the terminal
    console.log(boilPoint(temp1))


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

 var myNumbers1 = [3, 7, 0, 6, -9]

//declare a function with the argument of array
  const mult5 = (arr) =>{
   //create new variable for a new array to put the multiplied numbers in
  let newArr =[]
    // create a for loop to go through each number
    for(let i=0; i<arr.length; i++){
     //multiply each number by 5 and push it into the new array
     newArr.push(arr[i] * 5)
    }
    //return new array with numbers multiplies by 5
    return newArr
  }
  //call the function and run it in the terminal
console.log(mult5(myNumbers1))


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

 var myNumbers2 = [8, -7, 0, 6, 2]
//declare a function that takes in an array as an argument
 const mult5 = (array) => {
//multiply and return the numbers in the array usuing the built in method .map
   return array.map(value => value * 5)
 }
 //call the function and run it in the terminal
  console.log(mult5(myNumbers2))



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

 var stringWithVowels1 = "HeyThereLearnStudent"
 var stringWithVowels2 = "ILoveJavaScript"
// declare a function that takes in an argument of a string
 const noVowels = (string) => {
// create variable that splits the sentence into an array
   let array = string.split("")
// create a variable containing all the vowels
   let vowels = ["a","e","i","o","u","A","E","I","O","U"]
//create a higher order function returning the sentence with no noVowels
    return array.filter(value => vowels.indexOf(value) === -1).join("")
 }
 //call the function and run it in the terminal
 console.log(noVowels(stringWithVowels1))



// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42
var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

 // declare a function that takes in an argument of a string
  const noVowels = (str) => {
  //write an if els statement that informs the user if they have passed in an argument thats not a string
      if(typeof(str) === "number"){
        return "function is not a string"
      }else if(typeof(str) === "boolean"){
        return "function is not a string"
      } else  {
    // next add variable to create vowel removal function
      let array = str.split("")
      let vowels = ["a","e","i","o","u","A","E","I","O","U"]
    //create a higher order function returning the sentence with no noVowels
      return array.filter(value => vowels.indexOf(value) === -1).join("")
    }
 }
 //call the function and run it in the terminal
 console.log(noVowels(stringWithVowels2))




// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


 var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

 //declare a function that takes an argument
  const cats = (array) => {
  // create a higher order function that only returns only the toon object that are cats
   return array.filter(value => value.animal === "cat")
  }
  //call the function and run it in the terminal
  console.log(cats(toonimals))


// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]
//declare a function that takes an argument
 const nonCats = (array) => {
   // create a higher order function that only returns only the toon objects that are not cats
   return array.filter(value => value.animal !== "cat")
}
 //call the function and run it in the terminal
 console.log(nonCats(toonimals))
