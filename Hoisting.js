// Lecture -> 23 june[ time-> 1:57]

// javascript
// object based
// interpretor
// highly typed
// single threaded

// let max;
// console.log(max)
// max=10
//var max

//var (for older browesers)
// let
// const


process->

//initialisation-> reserve some memory space in that variable's name

console.log(number);
let number = 10;
console.log(number)
!
note-> can not acces number before  initialisation
// if you try to access let or const before initialisation , its throws an error
// if you try to acces var before initialisation , its throws undefined value
//initialisation
let num;
const num;
var num;

// declaration-> assi


// temporal dead zone

sayHi()
const sayHi = function(){
    console.log("hello there")
}

hello="hey"
if (true){
    const hello = "hello"
    console.log("hello")
}
output is hello



let num = 10
console.log(num)

hello="hey"

console.log(hello)
var hello = "hey"

if(true){
    hello = "hello"
    console.log(hello);
}               // hello
//explain me the diffrence in hoisting behaviour of different variables
// variable        var   let  const
//initialisation    yes   no  no
//declared          no    no    no


//Temporal dead zone (time 2:27:08)

var number = 10

function haha(){
    var number = 20
    console.log(number)
}
output is 20

//Q

arr=[2,4,5,6,2,4,3,5,4,3]:

for (let i=0; i<arr.length; i++){
    arr[i] =arr[i]**2   //(** it means squer)
    console.log(arr)
}






