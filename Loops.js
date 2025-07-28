// specific logic repeatadly 

import { startTransition, useReducer } from "react";

// print counting from 1 to 10

for  (let i=1; i<10; i++){
    console.log(i);
}

//syntex-> 
///for (initialisation, conditions, incrememnt/decrement){
// logic
//  }




for(let i=1; i<=1; ++i){
    console.log(i);
}

//5 table

///s*1=5
//5*2 =10
//5*3 = 15
//5*4=20
// 5*5 = 25

//trick

 for (let i = 1; i<=10; i++){
    console.log('5*${i}=${5*i}')
 }
 // other trick:   
 for (let i=1; i<=10; i++){
  console.log("5*", i,"=", 5*i )
 }



 
// 1 to 80 -> print even numbers
for (let i =2; i<=80; i+=2)
{
    console.log(i);
}
//other trick-> 

for (let i=1;i<=80;i++){
     if(i%==2){
     console.log(i)
    }
     }                   
// 1to 100

// let sum=0

// for(let i=1; i<=100; i++)
//  sum+=1
                        
//initial number = 3
// 3^1, 3^2, 3^3, ....3^10 

for (let i=1; i<=10; i++){
    console.log(3**i)
}
             

           

                         // APNA COLLLEGE (LECTURE - 3) LOOP

 types of loops->

 1. for loop
 2. while loop
 3. do-while loop


//1. for loop->

for(let i=1;             i<=5;               i++){
    // (initialisation; stopping condition; updation)
console.log("apna college")
}


// calculate sum of 1 to 5                                    [sum ase nikaale]

let sum = 0
for (let i=1; i<=5; i++){
    sum+=i;
}
console.log("sum =", sum);

//2. While loops->

let i = 1;
while(i<=5){
    console.log("i=", i);
i++;
}

//3. do while loop

let i = 1;

do{
    console.log("i=", i);
    i++;
}while(i<=5);

// For-of loop->

let str = "apna college";

for (let i of str){
    console.log("i=", i);
    
}

// find uper string size_>                            [string-size]

let str = "apna college";

let size = 0;
for (let i of str){
    console.log("i=", i);
    size++;
}
console.log("string size=", size);

// For-in Loop->

let student = {}






// 4-july-2025


//QS.

let arr2 = [1,2,3,1,1,2,3,1];

console.log(arr2.indexOf(1));

function includes(arr,element){

}



//qs.

let users = [
    { name: "Alice", age: 25},
    { name: "Bob", age: 30},
    { name: "Charlie", age: 35}
]

//find out the average of users

//user.age

let avgAge = users.reduce((avg,useReducer))=>avg+ users.age,0




//Qs.

let numb = [100, 5 ,50 ,30, 53, 44 ,3,2,4,3]

//identify numbers that greater than 10
// and return the sum of those numbers

const sumGreaterThan10 = numb.filter(num => num > 10).reduce((acc, num) => acc + num, 0)

console.log ("Sum of numbers greater than 10", sumsss) 

// here acc is accumleter

//QS.

const events = [
    { name "A", date: "2023-01-01"},
    { name "B", date: "2024-05-10"},
    { name "c", date: "2022-12-31"}
]

//use reduce



//QS.

let arr3 = [1,2,3,4,5,6,7,8,9,10];

//find odd num

let odd