//ullname="luckydhakad";
//fullName="luckydhakad"; 

//console.log(fullname);
//console.log(fullName);

//Console="tony";
//console.log(Console)

//datatype

//2 types-> (1) primitive (number,String,Boolean,undefined, null,Symbol,bigint )  (2) non-primitive

// EX;

//const student = {

  //  fullName: "rahulkumar"
    //age : 25,
    //markes :18,
    //ispass : true,
    //cgpa : 8.2,


//console.log(student);


//Loop->


// for (let i=2;i<=80; i+=2){
//   console.log(i);
// }
 
//for (let i=2;i<=100; i+=2){
  //console.log(i);
 //}

//for(let i=1; i<=100; i++){
  //console.log(i);

  //print odd number 1 to 80
  // for(let i=1; i<80; i+=2){
    //console.log(i);
   //}

   // print a table of 5

  // for(let i=1; i<=10; i++){
    //console.log("5*",i, "=", 5*i)
   //}
// table of 109

//for(let i=1; i<=10; i++){
  //console.log("109*", i,"=", 109*i)
//}

// table 1 to 100

//for(let i=1; i<=100; i++){
  //console.log(i);
//}

//for (let i=2; i<=50; i+=2){
  //console.log(i);
//}
//for(let i=3; i<50; i+=2){
  //console.log(i);
//}

//for(let i=1; i<=10; i++){
  //console.log("49*",i, "=",49*i);
//}


//Q  find largest number in arr

//arr=[2,4,5,56,7,8,9,3,2,4]


//let max = arr[0];

 //for (let i=1; i<arr.length; i++){
    //if (arr[i]>max){
     //max=arr[i]
   // }    
 //}

//console.log(max);

//arr = [2,334,556,78,678,9,5,4,77,8,8,4,4]

//let max=arr[0];
//for (let i=1; i<arr.length;i++){
  //if(arr[i]>max){
    //max=arr[i]
  //}
//}
//console.log(max);

// table of 5

//for(let i=1; i<=10; i++){
  //console.log(5*i);


//}


//let heros=["ironman", "thor","saktiman"]

//for(let i=0; i<heros.length; i++){
  //  console.log(heros[i]);
//}

//for(let city of cities ){
  //  console.log(city.toUpperCase());
//}

//let i = 21/4; 
//console.log("division", i);

//let i = 7*6; 
//console.log("multiplication", i);

//let i = 3/4;
//console.log("division", i);


//let fruits = ["banana", "apple","nonu", "candy"]
//console.log(fruits);

//for (let i=0; i<fruits.length; i++){
  //console.log(i)
//}

//let marks = [45,56,25,322,69];
 
///for(let i=0; i<=marks.length; i++){
  //if 
//}

//for  (let i=1; i<=100; i++){
  //  console.log(i);
//}
 //for(let i=1; i<=10; i++)

 //console.log("5*",i, "=", 5*i);

 //for(let i=2; i<=100; i+=2)
  //console.log(i)

 //for(let i=3; i<50; i+=2)
 //console.log(i)


//let a=5;
//let b=2;

//a += 4 // a = a+4
//it means  a = 5+4 = 9
//console.log("a =", a) 


//let a = 5;
//let b = 2;

//console.log("5==2",a==b)  // output-> 5==2  false

//console.log(" a===b" , a===b); // output 

//console.log("5!=2", a!=b);


//let a=6;
//let b=5;

//let cond1 = a>b; //true
//let cond2 = a===6; //true
//let cond3 = a===b;

//console.log(cond1 && cond3 );

//for(let i=1;i<=5;i++){
  
//console.log("apna college")

//sum of 1to5

//let sum = 0;
//for (let i=1; i<=5; i++){
  //  sum +=i; //(sum = sum+i)
//}
//console.log("sum =", sum);

//
//let i = 1;

//do{
    //console.log("i=", i);
  //  i++;
//}while(i<=5);


//let str = "apnacollege";

//let size = 0;
//for (let i of str){
  //  console.log("i=", i);
    //size++;
//}
//console.log("string size=", size);

//for loop
//

//
//let heros=["ironman", "thor","saktiman"]

//for(let i=0; i<heros.length; i++){
  //  console.log(heros[i]);
//}

//let cities =[ "delhi", "mumbai", "kota", "pune"];

//for(let city Of cities){
  //console.log(city);
//}

//let cities=["delhi","pune","mumbai","kota"];

//for(let city of cities){
  //  console.log(city);
//}

//let cities=["mumbai", "kota"];

//for(let city of cities){
  //console.log(city);
//}

//let fruits=["banana","apple","kaaju"];

//for(let fruit of fruits){
  //console.log(fruit);
//}


//let fooditems = ["potato", "apple", "litchi", "tomato"];

//fooditems.pop("tomato");
//console.log(fooditems);

//let deleteditem = fooditems.pop();
//console.log(fooditems);
//console.log("deleted", deleteditem);

//let fooditems = ["potato", "apple", "litchi", "tomato"];

//let cities = ["kota", "bundi"];

//let itemplace = fooditems.concat(cities)

//console.log(itemplace);

//let companies = ["bloomberg", "microsoft", "uber", "google","ibm","netflix"];
//Qs1. Remove first company from array?
//Qs2. remove uber & add ola in its palace?
//Qs3. add amazon in the end?

//companies.shift(bloomberg)

//console.log(companies);


//function countFreqDigit(n,d){
 //let count=0;
 //while(n!==0){
   //if(n%10===d){ count++;
   //n= Math.floor(n/10)
 //}
 //return count;
 //}
 //} 
 //let ans=countFreqDigit(1224,788)

 //console.log(ans)

 //let arr = [5,4,3,2,1];

//function sort(arr){
    //logic
  //    arr.sort()
//}
//console.log(arr)
//sort(arr)
//console.log(arr

//let marks = [ 12,32,36,56];
//console.log(marks, marks.length);

 //property
//

//let cities=["delhi","pune","mumbai","kota"];

//for(let city of cities){
  //  console.log(city);
//}

//arr=[2,4,6,3,5,7,11,22,33,44,55];


  //for (let i=0; i<arr.length; i++){
    //if(arr[i]%3==0){
      //  console.log(arr[i], i)
    //}
 //}


  //arr=[2,8,6,5,7,9];

 //for(let i=0; i<arr.length; i++){
  //if(arr[i]%2==0){
    //console.log(arr[i],i)
  //}
//}

//
//




//let arrowSum = (a,b) => {
  //  console.log(a+b);
//}
//arrowSum(2,3);

//let clock = {
  //hour , 2
  //Minute , 23 
  //Second 1
  //period, "pm" 
  //day ,
  //month, "july"
  //year, 2025
//}
//const nos=[1,2,3,4,5,6,7,8,9,10];
//for(let i=3; i<=nos.length; i+=2){
  //console.log(i)



//}



//
//for(let i=1; i<=50; i++){
  //console.log(i)
//}
///for(let i=3; i<=30; i++){
  //console.log(3*i);//


  //let a = 10;
  //let b = 4;

//console.log("a++", a++)

//console.log("a", a)

//console.log("a/b", a/b)
//console.log("a%b", a%b)
//console.log("a**b", a**b)

//let age = 25

//if (age>18){
 // console.log("you can vote")
//}
//if (age<18){
//  console.log("you Cannot vote");
//}



//let mode = "dark"
//let colour; 

//if (mode==="dark"){
  //colour = "black"
//}
//if (mode==="light"){
 // colour = "white"
//}

//console.log(colour);

//if else

//
//
// let arr = [1,2,3,4,5,6,7,8,9];

//arr.indexOf[8];

//console.log(arr.indexOf[8]);
// console.log("length", arr.length)

//arr.push(10);

//console.log("push", arr)

//arr.pop(0)


//let arr = [1,3,5,3,6,36,3,6,3,5,3,3,6];
       //1,2,3,4,5,6,7,8,9,.....
 //Q. 
       //return index of 36

       // arr[i]
       //arr.length or arr.size

       //
   // for(let i=2; i<=80; i+=2){
     // console.log(i)
    //}

    //

    //
//

 //print the largest number using for loop
 
 
//let arr = [22, 33, 4 ,6 ,35, 2,5,3,5]

//let max = arr[0]


//for(let i =1; i<arr.length ; i++){

// /if(arr[i]>max){
//     max=arr[i]
//   }
// }

// console.log(max);

//let marks = [ 12,32,36,56];
//console.log(marks);

//console.log(marks.length);


//

   //const numbers = [1,2,3,4,10];

     //         let sum = 0;

       //       for(num of numbers){
         //       sum+=num;
           //   }
             // console.log(sum);

// let marks = [1,3,6,22,10,23];
 
 //let sum = 0;

 //for(mark of marks){
 // sum+=mark;
// }
// console.log(sum);


 //arr=[2,4,6,3,5,7,11,22,33,44,55];

 // multiple of 3
 // print the number that is a multiple of 3 and its index

// for (let i=0; i<arr.length; i++){
  //  if(arr[i]%3==0){
    //    console.log(arr[i], i)
    //}
//const numbers = [1,6,45,87,56];

            //  let sum = 0;

          //    for(num of numbers){
        //        sum+=num;
            //  }
              //console.log(sum);


    //am array in js special type of object used to store multiple value in sigle variaable



   // let fruits =  ["apple", "banana", "mango", "kiwi"]

  //1. console.log(fruits.length);  // 4

  //2. console.log(fruits[2]);  // mango

  //3. let pos = fruits.indexOf("kiwi");

 // console.log(pos); // 3
 
 //4. let avl= fruits.includes("pomegrenet");  // (includes use for check item availablity in array)   

  //console.log(avl);  // false

//let joined = fruits.join (" ");
//console.log(joined);

//let sliced = fruits.slice(0, 2);
//console.log(sliced); // (2) ['apple' , 'banana']

 //let spliced = fruits.splice(1,1);  //remove 1 item at index 1
 //console.log(spliced);


//const numbers = [1,6,45,87,56,11572];

//let sum = 0;

//for(num of numbers){
 // sum+=num;
//}
//console.log(sum);

//print largest number

//let max = numbers[0];

//for(let i=0; i<numbers.length; i++){
  //if(numbers[i]> max){
    //max = numbers[i];
 // }
//}

//console.log(max);




//let max = arr[0];

//for(let i=0; i,arr.length; i++){
  //if(arr[i]>max){
    //max=arr[i]
  //}
//}
//console.log(max);
//let arr = [1,6,45,87,56,11572];

//numbers.push(8)

//console.log(numbers);

//numbers.pop();

//console.log(numbers);

//numbers.toString();
//console.log(numbers.toString());

//let sum = 0;

//for(num of numbers){
  //sum+=num;
//}
//console.log(sum);


// let max = arr[0];

// for(let i=0; i<arr.length; i++){
//   if(arr[i]>max){
//     max=arr[i];
//   }
// }
// console.log(max);

//const number = [1,2,3,4,5];

//for(let i =0, i<number.length; i++){
  //  console.log(2*number[i]);
//}

//Map -> creats a new array with the resultyt of callling a provided fumctiom on every elementt in the calling array

//const doubled = number.map(function(num){
  //  console.log( num*2 );
//});

// const unfiltered = [1,2,3,4,5,6,7,8,9,10];

// const filtered = unfiltered.filtered(
    
//     function(num){
//         if(num % 2 === 0){
//             return true;  //keep the element
//         }
//             return false;  //remove the element
//     } 
//   )
//  console.log("filtered", filtered);  // [2,4,6,8,10]
  

//  let arr = [2,45,67,8,10,56,38];

//  let value = arr.filter((val)=>{
//   if(val %2==0)
//     return val
//  },0)
//  let result=value
//  console.log(result)



//  let total days = 800;


//  let year= Math.floor(total days / 365);
//  let remianing days = 
  
// Arro


// const arrowSum = (a,b)=>{
//   return a+b;
// }
// arrowSum(2,3);

// const arrowmul = 

// const arrowSum = (a,b) => {
//     console.log(a+b);
// }
// arrowSum(2,3);


// const arrowMul = (a,b)=>{
//   console.log(a*b);
// } 
// arrowMul(2,3);

//const arrowDiv = (a,b)=>{
// 

// let mode = "dark";
// let colour ;

// if(mode==="dark"){
//   colour = "black";
// }
// if (mode=== "light"){
//   colour = "white"
// }
// console.log(colour);

// if-else

// let mode = "dark";
// let colour ;

// if(mode === "dark"){
//   colour = "black"
// } else{
//   colour = "blue"
// }
// console.log(colour);

// let a = 5;
// let b = 8;

// sum = a+b;

// console.log(sum);

//  for (let i=2;i<=80; i+=2){
//    console.log(i);
//  }


//  let mode ="light";

//  if(mode=="dark"){
//     color = "black";
//  }else{
//     color="blue"
//  }
//  console.log(color);

// const globelConst = " i m globel";
// let globelLet = "i m also global";
// var globelVar = "i am globle too";

// function displayGlobel(){
// console,log(globelConst); // Accessible from inside function
// console.log(globelLet); // Accessible from inside function
// console.log(globelVar); //Accessible from inside function
// }

// let cartitems=[10,20,30,40,50];


// while(cartitems.length>0){
//                            cartitems.pop();
// }
// console.log(cartitems);



// for(let i=1; i<=100; i++){
//   console.log(i);
// }

//  for(let i=1; i<=10; i++){
//    console.log(5*i);
//  }

//  for(count=1; count<=5; count++){
//   console.log(5*count)
//  }


//  let arr = [22,33,4,6,35,2,5,3,5]      // MAX 


 //print the  LARGEST NUMBER  (using for loop)
 
//  let max = arr[0];

//  for (let i=1; i<arr.length; i++){
//     if (arr[i]>max){
//      max=arr[i]
//     }    
//  }
// console.log(max);

// let sum = 0
// for (let i=1; i<=5; i++){
//     sum+=i;
// }
// console.log("sum =", sum);




// let sum = 0 ;

// for(let i=1; i<=10; i++){
//   sum+=i;
// }
// console.log(sum);

// let str = "apna  college";

// let size = 0;
// for (let i of str){
//     console.log("i=", i);
//     size++;
// }
// console.log("string size=", size);



// let array = [1,2,34,5,5,5,6,6];

// console.log(array.length);


// 1 se 5 tk sum 
// let sum = 0;
// for(let i=1; i<=5; i++){
//   sum+=i
// }
// console.log(sum);


// let arr = [1,23,56,78]

// let max=0;

// for(let i=1; i<=arr.length; i++){
//   if(max<=arr[i]){
//     max = arr[i];
//   }
// }
// console.log(max);

// let marvel_Heros = ["thor", "spiderman", "ironman" , "lucky" , "lak" ];


// //  console.log(marvel_Heros.slice(1,2));

//  console.log(marvel_Heros.splice(2,4,));

//let arr =[1, 2, 3, 4, 5, 6, 7];
  
//inedx=  0, 1, 2, 3, 4, 5, 6

// arr.splice(1,1,104);

//  console.log(arr);

//  arr.splice(2,0,109);
 
//  console.log(arr);

//console.log(arr);


//console.log(arr.indexOf(2));




let arr= [5, 12, 67, 89, 16, 23];




// function countGreaterThan35(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 35) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(arr.indexOf(67));

// console.log(arr.indexOf(23));
// console.log(arr.indexOf(89));

//arr.unshift(78);

//arr.shift();

//console.log(arr);




//console.log(arr.join(" "));

//console.log(Math.max( ));


//let arr = [];

//arr.push(1,5,8,7,10);

//console.log(arr)



// console.log(arr.indexOf(67));

 arr.shift();
 console.log(arr);

// arr.unshift(7);
// console.log(arr);

//arr.splice(2,0,45);
//console.log(arr);

//arr.slice(67);
//arr.slice(2,1);
console.log(arr.slice(2,1));
























