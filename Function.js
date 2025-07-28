// 27-June-2025

// 30-june-2025

let arr = [5,4,3,2,1];

function sort(arr){
    //logic
      arr.sort()
}
console.log(arr)
sort(arr)
console.log(arr)


//QS.

greet ({
           name:"accio"
             address:"delhi"
        })

        //print-> hello my naame is accio, and i m from delhi 

function greet(object){
    //const{name, addrress}= object;
    const name = object.name;
    const ad,dress = object.address;
    console.log('hello my name is ${name}, and i am from ${address}')
}

//QS.
let arr1 = [
    {
        name:"accio"
        address:"noida"
    },
    {
        name:"amazon"
        address:"gurgaon"
    },
    {
        name:"google"
        address:"cali"
    }
    
    ]

    for (let i=0; i<arr1.length; i++){
    greet(arr1[i])
}

        //q.

        const fruits =["apple", "banana","pineapple"]

        console.log((fruits))


        // IIFE -> imediately involeved function

        (function(){
            console.log("IIFE executed");
        })("john");
        2
      
        
        // function parameters/arguement

        function hello (name,greet){
            console.log(greet, name)
        }
function helllo(name){
    console.log("second" name
}



//higher order fumction 

function power(n){
    return n;
}
function calculatepower(number, power(n)){
    return number
}

   
                             // Function [APNA COLLEGE -> LECTURE-5]


function defination-> 

function functionName(){     // functiin call -> functionName();                    
    //do some work
}

function functioinName( param1, param2...){
    //ddo some work
}

//Example:

function myfunction() {
    console.log("welcome to apna college");
    console.log("we are learning coding");
}
myfunction();

//msg print krwana->

function myfunction(msg){ // msg is perameter
    console.log(msg);
}
myfunction("i love js");  // -> Argument
my
//EX-> function-> 2 numbers, sum

function sum(x,y){
    console.log(x+y);
}
sum(1,2); // output->3


// return 

function sum(x,y){
    s = x+y;
    return s;
}
let val= sum(3,4);
console.log(val);

// Arrow Functions[compact way to writing a function]

const functionName= (parameter1, parameter2..)=>{
    //do some work
}

//EX. //sum function

function sum(a,b){
    return a+b;
}
// arrow function of sum

const arrowSum = (a,b) => {
    console.log(a+b);
}
arrowSum(2,3);

// multiplication function

function mul(a,b){
    return a*b;
}

//arrow function of multiplication 

const arrowmul = (a,b)=>{
    console.log(a*b);
}
arrowmul(3,4)

//QS. create a function using the "function" keyword that takes
//  a string as an Argument & return the number of vowels in the string.

function countvowel(str){
    console.log
    c
}

ForEach method ->

let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){
     
    console.log(val);
});

let arr = ["delhi", "mumbai"];

arr.forEach ((val) => {
    console.log(val.toUpperCase() , idx , arr);

});

// Heigher order function/method ->

1. for each method

//QS> for a given array of numbers

let nums = [2,3,5,7];

nums.forEach((num) =>{
    console.log(num * num);  //num**2
});
//output-> 4
           9
           25
           49

// some arrray method->

MAP method-> 

arr.map( callbackFunction( CSSMathValue, indexedDB, array))











             // Function [Lecture - 5 , Apna College ]
            
  // function provvide   us Redundancy

   function  myFunction() {
             console.log("lucky dhakad");
             console.log("i am doing coding");
   }      
   myFunction();


   function myFunction(msg){
    // perameter -> input
    console.log(msg);
   }
   myFunction("i love js ")  // argument


   function myFunction(msg,n){
    // perameter -> input
    console.log(msg * n);
   }
   myFunction("i love js ", 100)
   
   
     // function and paran=meter in javascrippt [ Chai aur Code]

(1.)  function sayMyname(){
        console.log("h")
        console.log("e")
        console.log("l")
        console.log("l")
        console.log("o")

    }
    
    sayMyname();


 (2) function addTwoNumbers(number1,number2) {
                            //(parameters)
          console.log(number1+ number2);
}

addTwoNumbers(2,3);
             