// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//Declare a function it does not need to take in an argument
const fibonacci = () => {
   // create a anchor which is an array with the first twp numbers of the fibonacci sequence already in it
   let fib= [1,1]
   // create a for loop which starts at index 2 and adds more indexes unti it reaches 10
   for (let i = 2; i < 10 ; i++){
      //take the fib index-2 and add it to fib index-1 and that will equal the new number you push intpo the array
       fib.push( fib[i - 2] + fib[i -1] )
      }
      //return the new array
      return fib
}
   console.log(fibonacci())


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
//first i want to declare a function that takes in an array ass an argument
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//declare a function that takes in an argument
const sortNumbers = (array) => {
  //make  a variable that uses .filter to sort through the array 
  //use the type of method to returnonly return numbers and 
  //use a modulo to retun only odd numbers
  let oddNum = array.filter(value => typeof value === "number" && value % 2 ===1)
      //use the .sort method to sort the numbers in accending order
      .sort((a,b) =>(a-b))
      //return the variable
      return oddNum
      }    
      console.log(sortNumbers(fullArr1))

// //-3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.
var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

//declare a function that takes in a string argument
 const getMiddle = (string) => {
   //create a variable that takes the strings legnth and divides it by 2.and use math.floor to round down if there is a decimal.
   var middle = Math.floor(string.length/2);
   //find out if the string is divisible by 2 with a modulo to 
   //decide if u need to return 1 or two letters
   if (string.length % 2 == 0){
      //if the string is evenly divisible by 2 take the middle number and add it to the index below the middle index
      return string[middle-1] + string[middle];
   }else{
      // if the number is not divisible by 2 return middle number
      return string[middle];}
   }
      console.log(getMiddle(middleLetters2))
      console.log(getMiddle(middleLetters1))



// ---4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
      
   //create a class function 
   class Sphere {
      // add a constructor and add the radius to it because the radius is the only thing that is going to be changing.
      constructor(radius) {
         this.radius = radius
         }
         // create a method that defines the area of a sphere
         area() {
            return  4 * 3.14 * Math.sqrt(this.radius)
            }
               } 
               // make three new sphere and assign them to a variable
               var sphere1 = new Sphere(50)
               var sphere2 = new Sphere(25)
               var sphere3 = new Sphere(10)
            
               console.log(sphere1.area())
               console.log(sphere2.area())
               console.log(sphere3.area())
            



// ---5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

   var numbersToAdd1 = [2, 4, 45, 9]
   // Excpected output: [2, 6, 51, 60]
   var numbersToAdd2 = [0, 7, -8, 12]
   // Expected output: [0, 7, -1, 11]
   var numbersToAdd3 = []
    // Expected output: []

   //declare a new function that takes an array as an argument
   const sum = (array) =>{
      //create an achor to add the numbers to
      let anchor = 0;
      //create a for loop that goes through the array
      for(let i=0; i<array.length; i++){
         //ake each index and add it and set it to the anchor variable
         anchor += array[i];
         }
         //return the anchor
         return anchor
   }
         console.log(sum(numbersToAdd1))
         console.log(sum(numbersToAdd2))
         console.log(sum(numbersToAdd3))
 // this is the same problem but with a higher order function of .reduce()        

 var numbersToAdd6 = [3, 7, -85, 12]

// declare a variable that takes in an array
//.reduce built in function takes the total number and adds it to the new number
// set the initial value to zero
 const sum1 = (array) => array.reduce( ( total, number) => total + number, 0 )
   console.log(sum1(numbersToAdd6))

   
