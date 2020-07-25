// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.


var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

//first i want to declare a function that takes in a string as an argument
const secretCode =(word) => {
    //create a variable that splits the string into an aray
    let array = word.split("")
    //create a variavle for the new array and use the .map method to iterate over every element in the array
    let changedArray = array.map(value => {
        //create an if else statment to change the letters and set the value to a new value
        if (value === "a" ){
            return "4"
         } else if(value === "i"){
            return "1"
         } else if(value === "o"){
            return "0"
         }else if(value === "e"){
             return "3"
         }
         //return the value of each change
        return value 
    } )
    //return the new array
    return changedArray.join("")
}


// //next i want to use split() to make the string into an array
 console.log(secretCode(secretCodeWord1))




// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

//declare a function that takes in an argument
const letterA = (array) => {
    //use the filter to create a new array with only selected element in it
    //use the .toppercase method to ensure if there is a capital letter it is called for in the function
    //use indexOf to find the first instance of "A" in every value and return only the values that are not -1 to the new array.
  return array.filter(value => value.toUpperCase().indexOf("A") !== -1)
    
}
    
    
console.log(letterA(arrayOfWords))



   
  
  



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false


//declare a function that takes in an argument
const fullHouse = (hand) =>{
//first we want create a variable that  returns the values in the array with no duplicates
    let uniqueValues = [... new Set(hand)]
    //since a full house only has two unique values create if else that returns false if there is more than 2
    if( uniqueValues.length !== 2){
        return false
    }
    //next we want to map through the unique values and return a new array 
    let counts = uniqueValues.map(uniqueValue => {
       // create a variable for the count
        let count = 0 
        //create a for loop that iterates through array and compares it to the unique value
        for(let i = 0; i < hand.length; i++){
            if(hand[i] === uniqueValue){
                //if thevalue of the array is equal to the value of unique value add 1 to the count
                count++
            }
        }
        //return the count
        return count
    })
    //sort the counts from least to greatest
    counts.sort()
    
    return counts[0]== 2 && counts[1]== 3 
}    



  console.log(fullHouse(hand1))  
  console.log(fullHouse(hand2)) 
  console.log(fullHouse(hand3)) 
    

