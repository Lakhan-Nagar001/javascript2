//ARRAY->       Lecture - 23june(time->54:20)->> [ ACCIO ]


    
  Array-> An array in javascript is a special type of object used to store multiple value in single variable (number, alphabet,string, object,array

  // let array = [4, "hello"];
  properties-> 

  //resizeble and mutable     
  
  // javascript is  object based 
  for example->

  let string = "hello world";
                                                  []
  let stringobj= {
                   0: "h"
                   1: "e"
                   2: "l"
                   3: "l"
                   4: "o"
                   5: " "
                   6: "w"
                   7: "o"
                   8: "r"
                   9: "l"
                   10: "d"
  }
console.log(string[3]==) // output is-> l
console.log(string[3]==m) // false


// REST operator [...arr]

let arr2 = (...arr)
console.log(arr2) 




  
//que.

let arr = [1,3,5,3,6,36,3,6,3,5,3,3,6];
       //1,2,3,4,5,6,7,8,9,.....
 //Q. 
       //return index of 36

       // arr[i]
       //arr.length or arr.size

       for(let i=0; i<=arr.length; i++){
        let value = arr[i];
        if(value===36){
        console.log(i)
       }
    }

//QS.

    let array = [2 ,3, 33, 5,6 6,6, 6, , ,]
// 0,1 ,2,3,4,5,6,7,8,9,
                             
for (let=0; i<array.length; i++){
    let value = arr(i);
    if (value===36){
        console.log(i)
    }

                 
//ques.

    arr = [2,4,6,3,5,7,11,22,33,44,55];

//multiples of 3
//print the number that is a multiple of 3 and its index

//Solution

for (let i=0; i<arr.length; i++){
   if(arr[i]%3==0){
    console.log(arr[i],i)
}
}

//ques. 1 to 100           ->[ Sum ase nikaale]
let sum = 0

 for(let i = 1; i<=100; i++){
    sum+=i
 }
 console.log(sum)


 //method-2 -> universl method 

              const numbers = [1,2,3,4,10];

              let sum = 0;

              for(num of numbers){
                sum+=num;
              }
              console.log(sum);

 //ques.

 let arr1 = [22,33,4,6,35,2,5,3,5]      // MAX 


 //print the  LARGEST NUMBER  (using for loop)
 
 let max = arr[0];

 for (let i=1; i<arr.length; i++){
    if (arr[i]>max){
     max=arr[i]
    }    
 }

console.log(max);

//ques.
 //*
 //**            
 // ***
 // ****
 // *****

 for (let i=0; i<6; i++){
    console.log("*".repeat(i));    )

 }

 //Ques.

 arr=[2,4,5,6,2,4,3,5,4,3];

 for(let i=0; i<arr.length; i++){
    arr[i]=arr[i]
 }

 let arr=[1 ,2 ,3,3,2,1];



 arr=[2,4,6,3,5,7,11,22,33,44,55];

 // multiple of 3
 // print the number that is a multiple of 3 and its index  

 for (let i=0; i<arr.length; i++){
    if(arr[i]%3==0){
        console.log(arr[i], i)
    }
 }


 // 1 to 100
 // find sum

 let sum = 0

 for(let i=1; i<=100; i++){
    sum+=i
 }
   console.log(sum)


Question->

let arr1 = [22, 33, 4 ,6 ,35, 2,5,3,5]

// print the largest number using for loop

for (let i=1; i<arr.length; i++){
    if(arr[i]>max,max*i){
        console.log(max)
    }
}

//que.

// 1 to 100, you have to count number of multiple of 3 or 5

//1
//2
// 3 count =1
// 4 
// 5 coint = 2
// 6 count 3


                  //ARRAY->(APNA COLLEGE LECTURE-4)


1. let marks = [ 12,32,36,56];
console.log(marks);

consol.log(marks.length;) //property

2. let heros=["ironman", "thor","saktiman"]
console.log(heros)

//Looping over array

let heros=["ironman", "thor","saktiman"]

for(let i=0, i<heros.length, i++){
    console.log(heros[i]);
}

// for of loops->

let cities=["delhi","pune","mumbai","kota"];

for(let city of cities){
    console.log(city);
}

//cities ko UPPER case krne k liye
for(let city of cities ){
    console.log(city.toUpperCase());
}

// practice Question

QS.  find the average marks of entire class?

let marks=[85,97,44,37,76,60]

solve-> let sum = 0

for (let val of marks){
    sum= sum+value
}
let avg = sum/marks.length;
console.log('avg marks of class = ${avg}');  

QS.  
   // let item = [250,645,300,900,50];  10%offer

for(let i=0; i<item.length;i++){
    let offer = item[i]/10;
    item[i] -= offer;
}
console.log(item);


/// Arrray Method....


Push() : add to end
Pop() :  delete from end
toString() :  converts array to string

1.push()-> // (use for add item in array)

let fooditems = ["potato", "apple", "litchi", "tomato"];

fooditmes.push("chips", "burger", "paneer");

console.log(fooditems);  

2. pop()-> // (delete item from last in array)



let fooditems = ["potato", "apple", "litchi", "tomato"];

console.log(fooditems);

fooditems.pop();
console.log(fooditems);

//2nd method
console.log(fooditmes);

let deleteditem = fooditmes.Pop()
console.log(fooditems);
console.log("deleted", deleteditem);



3. toString-> convert  a array to string & return new string

let fooditems = ["potato", "apple", "litchi", "tomato"];

console.log(fooditmes);
console.log(fooditems.toString());


4. concat()-> ///use for joint multiple arrays & returns 

let marvel_Heros = ["thor", "spiderman", "ironaman"];
let dc_Heros = ["superman", "batman"];

let heros = marvelHeros.concat(dcHeros)

console.log(Heros);

5. unshift()-> add to start 

let marvel_Heros = ["thor", "spiderman", "ironaman"];

marvel_Heros.Unshift("antman");

console.log(marvel_Heros);

6. shift-> delete from start

let marvel_Heros = ["thor", "spiderman", "ironaman"];

let val = marvel_Heros.shift();
console.log("deleted", val );


 7. slice -> return a piece of the array 


 //slice( startIndex, endIndex)

let marvel_Heros = ["thor", "spiderman", "ironaman"];

console.log(marvel_Heros.slice(1,2))   // "spiderman"


8. splice-> [  Change  original Array (add, Remove , Replace) ]


//splice ( stratidx, deleteCount, newElement..)


let arr =[1,2,3,4,5,]

arr.splice(2,3,4)
console.log("splice", arr);


9. arr.length-> let arr = [ 1,2,3,4,,6,7]

               console.log(arr.length);


10. reverse ()  ->  //(reverse the arrray)

const reverseArray = array.reverse();



11. indexOf-> returns the index of the first occurrence of an  elemment in the array

console.log(arr.indexOf(1));

12. includes-> returns true if the element is present in the arrray, otherwise false

console.log(arr.includes(5));

13. array transformation method

const number = [1,2,3,4,5];

14. filter()->  creates a new array with all elements that pass the test impleted by the provided  function

const unfiltered = [1,2,3,4,5,6,,7,8,9];

const filtered = unfiltered.filtered{
    function (num){

        if ( num % 2 === 0 ){
            retun true;
    }
    return false;
}

for(let i=0; i<number.length; i++){
    console.log(2*number[i]);
}

15. Rduce metod-> 

executes a reducer function (that you provide) on each element of the array,
resulting in a single output value

//find the sum of all element in the array

const nos=[1,2,3,4,5,6,7,8,9,10];

const callback = function(accumulator,num){
    return accumulator + num;
}

const sum = nos.reduce(callback,0)

console.log("sum", sum)  // 55


//QS.

let companies = ["bloomberg", "microsoft", "uber", "google","ibm","netflix"];
//Qs1. Remove first company from array?
//Qs2. remove uber & add ola in its palace?
//Qs3. add amazon in the end?

//pop-> remove from last
// shift -> remove from  first 

Ans1. companies.shift();
Ans2.
//we use splice method for replacement

companies.Splice(2,1,"ola")

ans3. 
// push method-> use for add in end.
// unshift method-> use for add in start.

companies.Push("amazon")



                  Array // Lecture -> ( 3 - july - 2025) [Accio]



array method -> [time- 31:55]

let array = [1,2,3,4,5,6,7,8,9]

1 . arr.length;
             console.log("length", arr.length);

2. const reverseArr = arr.reverse();
               console.log("Reverse", reverseArr);

 // bina array ko distrub kiye reverse krne ka tarika->

      const reverseArr = [...arr].reverse(); // rest operator ko use krke[...arr] , 

3. arr.push(10); 
               console.log("Push", arr);

4. arr.pop();
               console.log("Pop", arr);

5. arr.unshift(0);  // adds an element to the begining of the array.

                console.log("Unshift", arr);
 
6. arr.shift();    // removes the first element of the array.         
                
                console.log("Shift", arr);

7. indexOf();    // returns the index of the first occurence of an element in the array.

                console.log(arr.indexOf(element));                  // lecture time [39:40]

// we can use for-loop , at the palace of indexOF.

for(let i=0; i<arr.length; i++){
    if(arr[i]===5){
        console.log(i)
    }
}

8. includes;    //  returns true if the element is present in the array.(ye yhi check krta h ki, ye element iss array me h yaa nhi )            

            console.log(arr.includes(5));

9. splice ;  //  removes elemnt from the array & returns the removeed elemnt.


    arr.splice(2,3,11,12,13);                  // [lecture time - 48:36]
    //removse 3  element from index 2
    //arr.splice(startIndex, deleteCount, ...itemToAdd) 
    
    console.log("Splice", arr);

 //QS. 
    
 // add-> push, unshift           
// remove-> pop, shift
// 


//Qs. ->

let arr2 = [1,2,3,,1,1,2,3,1];

console.log(arr2.indexOf(1));

// join -> joins the elements of the array into a string

console.log(arr2.join(" "));  // "1 2 3 1 1 2 3 1"

console.log(Math.min(10, 2, 3, 4, 5));  // NaN


// Create Arrays ->

1. empty array :
                const emptyArray = [ ];

2. const fruits = ["apple", "banana", "cherry"];

3. const mixedArray = [1, "hello", true, null, undefined, {key ,"value"}, [1,2,3]];


// using Constructor  [lecture time(2:00)]
//class

const newarr = new Array();  //dynamic length

const newarrfixed = new Array(5);  //fixed length of 5

const arrayfixx = new Array(1,2,3,4,5); //array with element 1,2,3,4,5

console.log(arrayfixx[0]);


//array.at(index) -> returns the element at the given index, if inedex is negetive , it returns the element from the end if the array

console.log(arrayfixx.at(-2));  // output-> 4




Array transformation methods->


const number = [1,2,3,4,5];

for(let i =0, i<number.length; i++){
    console.log(2*number[i]);
}

Map   -> creats a new array with the resultyt of callling a provided fumctiom on every elementt in the calling array
        // In JavaScript, map is a method used with arrays to create a new array by 
        // transforming each element of the original array using a provided function.


const doubled = number.map(function(num){
    console.log( num*2 );
});

//we always input a function to map

Ex. -> // uses of map function

amazon -> serach page 

product array -> [product1, product2, product3]

product{
    name: "product1"
    price: 100,
    ratind: 4.5,
    category: "electronics"
}

filter method->

const unfiltered = [1,2,3,4,5,6,7,8,9,10];

const filtered = unfiltered.filtered(
    
    function(num){
        if(num % 2 === 0){
            return true;  //keep the element
        }
            return false;  //remove the element
    } 
)
 console.log("filtered", filtered);  // [2,4,6,8,10]


//ChatGPT method->


 let fruits = ["apple", "banana", "orange", "kiwi"];

//Now you want to keep only the fruits that are longer than 5 letters.

Use .filter() like this:

let longFruits = fruits.filter(fruit => fruit.length > 5);

console.log(longFruits);
// Output: ["banana", "orange"]


QS . //(time-> 2:27:00)

const nos = [1,2,3,4,5,6,7,8,9,10];

//const primeNumbers = ???

function isPrime(num) {
    if (num < 2)  return false;      // agar 2 se chota nhi hona chaiye
    if(num ===2)  return true;       // agar 2 ke equal hua tho true
    if(num % 2 === 0) return false;  // aagr divisible by 2 hua tho false

    for (let i = 3; i*1 <= num; i += 2){
        if (num % i === 0)  return false;
    }
    return true;
    }

  const primeNumbers = nos.filter(isPrime)
  console.log("Prime Numbers, primeNumbers");  // [2,3,4,5,7]


reduce Method() -> //executes reducer fuunction ( that you provide) on each element of the array,
                    //resulting in a single output value

      // find the sum of all elememnts in the array
      
      const callback = function(accumulator, num){
                   return accumulator + num;
      }

      const sum = nos.reduce(callback, 0)

      //syntex -> array.reduce(callback, initialValue)
      console.log("Sum", sum);  // 55
    


                    // Lecture -> (4-july-2025) [ Accio ]


//QS.

let arr2 = [1,2,3,1,1,2,3,1];

console.log(arr2.indexOf(1));

function includes(arr,element){
//indexof

if(arr.indexOf(element) !== -1){
    return false;
}

// join - joins the elements of the array into a string

console.log(aee2.join(" ")); // "1 2 3 1 1 2 3 1"

console.log(Math.min(...arr)); // NaN

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
//assinment question0->

let arr = [1, 3];
for(let i=0; i<arr.length; i++){
if(i%2==0){
  console.log("we are odd")
}else{
  console.log("we are simple")
}
}