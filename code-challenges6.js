// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."
// create a function that takes in an argument
const nameCapSentence = ( array) =>{
 // .map through the function
  return array.map(value => {
    //use the split(" ") method to break up each string into two strings
    let names = value.name.split(" ")
    //create another function tp map through the trings you just split 
    //on each string use charat(0 to pinpoint the character in each word, then use the touppercase methode to make the first letter uppercase. then join the letter and the rest of the word with substring
    let capNames = names.map(name =>{
       return name.charAt(0).toUpperCase() + name.substring(1)
    })
    //next join the two words back into one
    let fullCapName = capNames.join(" ")
    //use string interpalatioon to make a sentence
    return `${fullCapName} is a ${value.occupation}`
  })

}
console.log(nameCapSentence(people))


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//  const onlyRemainder = (array) =>{
//   let numbers = array.filter(value =>{
//     return typeof value === "number"
    
//   })
//   return numbers
 
//create a function that takes in an argument
const onlyRemainder = (array) =>{
  //create a variable called numbers that uses the filter method to make a new array with only numbers data types
  let numbers = array.filter(value => typeof value === "number")
  //return the numbers variable with a map function only returning the modulo when divided by three
  return numbers.map(value => value %3)
    
  }
  console.log(onlyRemainder(testingArray1))






// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]
 
//create a function that takes in two arguments
const oneArrayNoDup = (array1,array2) =>{
  //create a variable that is joining the two arrays together. use a spread operator
  let oneArray = [...array1,...array2]
   //create a new variable that uses the combined array variable and filters through the array 
   //on each value use the indexof method === to the index to filter out all the duplicates.
  let jointNoDup =   oneArray.filter((value, index) => oneArray.indexOf(value) === index);
    return jointNoDup
  
     
  
}
console.log(oneArrayNoDup(testingArray3,testingArray4))