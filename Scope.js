
//local scope (let) [functionscope]
//globel scope(var)

//javascript has three types of scope

//1. block scope 
//2. function scope
//3. globel scope

//{
  //  let a = 8;
//}
//console.log(a)  ///a is not available
//but when we use var 
//{
  //  var a=8
//}
 //console.log(a) // output is 8 
 //let a = 15  // globle scope(outside)

if(true){
    let a = 10
    const b = 9
    var c = 4
    console.log(a)
}   
 //Globelscope scope (inner side)-> 
 // variable declared outside any function or black have globel scope, 
 // these variable are ACCESSIBLE:E anyehere in the javascript program considering the concept of hoisting.  



 let number; // undefined

function printsomething(){
  number=20 
}



// 1 line of code-> 1 second
// 10000          -> 1100000 second

// moduleScope



var foo = function bar(){
  console.log(typeof bar);
};
foo();
console.log(typeof bar);
                   // ACCIO SCOPE[1- july- 2025]
// scop

//  visibility


 // Globel scope-> 
const number = 10
 
function printsomething(){
  const number = 20;
  console.log("inside printsomething function:" + number); //20
 }
printsomething();

 // if we use "var" at the palace of "const" then->
var number = 10
 
function printsomething(){
  var number = 20;
  console.log("inside printsomething function;" + number);
 }
printsomething();

// no var , no const ->[Time- 31:40]

let number;

function printsomething(){
  number = 20;
  console.log("inside printsomething function", + number);
}
printsomething();
console.log(number);

//QS.
 function calculateTotal(){

  var price = 100; //function-scoped
  let tex = 0.08; //function -scoped
  const discount = 0.1 // function scoped

       function applyDiscount(){
        //Nested function can access parent function's variablesle
        return price * (1- discount);
      }

      var total = applyDiscount() * (1+tax);

      console.log('Total: $${total.toFixed(2)}');

      return total;
}

calculateTotal(); //work fine
console.log(price); // Reference error

//EX.->[time-> 37:10]

function outerFunction(x){
  //x active

     function innerFunct(y){
      //y active
      return y
     }
     return x+y;
}

const addFive =  outerFunction(5);
console.log("output", addFive(3))

//EX
// globelscope.

const globelConst = " i m globel";
let globelLet = "i m also global";
var globelVar = "i am globle too";

function displayGlobel(){
console,log(globelConst); // Accessible from inside function
console.log(globelLet); // Accessible from inside function
console.log(globelVar); //Accessible from inside function
}

displayGlobel();  // work fine
console.log(globalVar); // work fine - acccesseble outside funtion 

// charectoristics  
// the varible in global scope can be acccessed from anywhere in the program,
//  including inside funtion and blocks.

// all the globel variable are stored in the window object in the browser environment.

Exple

let a = 10 ;
if (true){
  let a = 20;
  console.log(a,"inside");  //ouput is 20
}
console.log(a, "outside"); // output is 10

//EX.

var x = 10;

function foo(){
     console.log(x);
      var x=20;  
}
foo();  // undefined


but when we use "let" at the place of "var" TouchEvent

function foo(){
  console.log(x);
  let x=10;
}
foo(); // it will gives ERROR

//EX [Time-> 50:49]


var y = 24;
function favFunction(){
  var x = 667;
   
  var anotherFavFunction = function(){
    console.log(x);
    
    var yetAnotherFavFunction = function(){
      console.log(y);
    }
    yet AnotherFavFunction();
  }
    anotherFavFunction();
}

favFunction();  // output-> 667
//                           24


//                             3- june-2025


