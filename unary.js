// CHAPTER -> 2 
                   // OPERATORS & CONDITIONAL STATMENT

                  // console.log("lakahan nagar!");

                   // Artimetic Operators

                   // question
                  // let a = 5;
                   // let b = 2;
                  
                   //console.log("a+b =", a + b);
                   //console.log("a-b =", a-b);
                   //console.log("a*b = ", a*b);
                   //console.log("a/b =", a/b);
                   //console.log("a%b =", a%b);       //Modulus
                   //console.log("a ** b = ",a**b);  //Exponentiation(power)

//Unary Operator

// let a = 5;
// let b =2;

//console.log("a++ =",a++);
//console.log("a =", a);
//console.log("a-- = ",a--);
//console.log("a =", a );


// Assignment Operators

//(= , += , -= , *= , %= , **=)

//a+= 1 means -> a = a+1
 
//a+=4; 

//for (let i=1; i<=10; i++){
  //  console.log("5*", i, "=",5*i)
//}

//for(let i=1; i<=10;i++){
  //  console.log("9*", i ,"=", 9*i)
//}

//for (let i=1; i<=100; i++)
//    console.log(i)
  

///for (let i=1; i<=10; i++ ){
    // console.log("150*", i, "=", 150*i)
  //}


// 1 to 80 print even number

///for (let i=2; i<=80; i+=2){
  //console.log(i)
//}

for(let i =3; i<80; i+=2){
  console.log(i)
}
 //for (let i =1; i<=100; i++){
  //console.log(i)
 //}

//for(let i=1; i<=10; i++){
  //console.log("4*", i, "=", 4*i)
//}

//array question

const nos=[1,2,3,4,5,6,7,8,9,10];

const prime numbers= 

for(let i=3; i<=nos.length; i+=2){
  console.log(i)



}




QS-> INDEX OF ELEMENT-> //(LECTURE -3JULY )

function indexOfElement(N, X, arr) {
  // write code and print here
  let result= [ ];
  
for(let i=0; i<N; i++){
  if(arr[i]=== X){
    result.push(i+1);
  }
}
if(result.length===0){
  console.log(-1)
}else{
  console.log(result.join(' '))
}

}


let totalDays = 800;

// Calculate years
let years = Math.floor(totalDays / 365);
let remainingDays = totalDays % 365;

// Calculate months
let months = Math.floor(remainingDays / 30);
remainingDays = remainingDays % 30;

// Remaining days
let days = remainingDays;

console.log(`${totalDays} days = ${years} years, ${months} months, and ${days} days.`);


//output -> 800 days = 2 years, 2 months, and 10 days.
