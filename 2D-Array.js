2D array [ 10-july Accio ]

let array = [1,2,3,4,5,6,7,8,,9,10];

let Twoarray = [
    [1, 2, 3, 4],
    [2, 3, 4,5],
    [3, 4, 5, 6],
    [4, 5,6,7]
]

console.log(Twoarray[0])  // [1,2,3,4]  

const first = Twoarray[0] [0]  // 1 

for(let i = 0; i<Twoarray.length; i++){
    console.log(Twoarray[i])
}

for(let j=0; j<Twoarray[i]; j++){
    console.log(Twoarrat[i] [i])
}

let chess = [
    ["black", "white", "black", "white","black", "white", "black", "white" ],
    ["white", "black", "white", "black","white", "black", "white", "black"],
    ["black", "white", "black", "white","black", "white", "black", "white" ],
    ["white", "black", "white", "black","white", "black", "white", "black"],
    ["black", "white", "black", "white","black", "white", "black", "white" ],
    ["white", "black", "white", "black","white", "black", "white", "black"],
    ["black", "white", "black", "white","black", "white", "black", "white" ],
    ["white", "black", "white", "black","white", "black", "white", "black"]
]    
 //find  4th line me 5th block kaa colour?
console.log(chess[3] [4])  // white

    
user-> name, age, email

let users = [
    ["john", 25, "john@gmail.com"],
    ["jane", 30, "jane@gmail.com"]
]
//find "jane" kaa email?
console.log(users [1] [2])


//initialization a 2D array->

Array.from() method->

//you have to create a 2D array of size 3*4

const matrix = Array.from({ length: 3}, () => Array(4).fill("hello"));

console.log(matrix);

//using "Nested" for loop->

const raws = 3;
const cols = 4;
const matrix2 = [];

for(let i = 0; i < rows; i++){
    matrix2[i] = [];
    for(let j=0; j < cols; j++){
        matrix2 [i] [j] = "Hello";
    }
}
console.log(matrix2);

//using "Constructor with fill and map" ->

const rows = 3;
const cols = 4;

cosnt matrix3 = Array(rows).fill().map(() => Array(cols).fill("Hello"));

//
const matrix3 =  Array(rows);
console.log("matrix3", matrix3);
const matrix4 = matrix3.fill().map(() => Array(1).fill("Hello"));
console.log("matrix4", matrix4);      //(Array(1) means-> 1 size ki array map function build krega)

// 5 size ki array build krna->

const matrix5 = Array(5).fill(0)
console.log(matrix5)





//problem; create the following 2D arrays using different initialisation methods:

// (A). 3*3 matrix filled with zeros
// (B). 2*4 matrix with sequential numbers (1-8)

let zeroMate 
for(let i=; i<3; i++)


                                                              11- july - 2025

//QUESTION->  Add Two Arrays

let matrix1 =  [
    [1,2]
    [3,4]
]
let matrix2 = [
    [5,6]
    [7,8]
]
 // add these matrices
 // output: [[6,8], [10,12]]
 Sol . 

 let result = []

 for(let i=0; i<matrix1.length; i++){
    result[i] = [];
    for(let j=0; j<matrix1[i].length; j++){
        result[i] [j] = matrix1[i] [j]  + matrix2[i] [j];
 }
 }
 console.log(result);

 Question ->  

 // result-> Transpose(Rows convert to coloum & coloum to rows)
 let matrix = [
                  [6, 8],
                  [10, 12]
                      ]
let transposed = []
          
for(let i=0; i<matrix1.length; i++){  // i chalega colum wise
    transposed[i] = [];
    for(let j=0; j<matrix1[0].length; j++){   // j chlega rows wise
        transposed[i] [j] = result [j] [i]
    }
}
console.log(transposed);

//Question->

//print the "diagonal element" of the transposed matrix

//assinment question->(un-compelete)
    let black = 0;
    let whites = 0;

    for(let i = 0; i<n; j++){
        for(let j=0; j<n; j++){
            if((i+j)%2 == 0){
                blacks+=mat[i][j]  }
    }   
    }
let 


// que.-> assignment 


let result =  []

for (let i=0; i<m; i++){
    if(i%2 !==0){
        //lest to reight
        for(let j=0; j<n; j++){
            result.push(mat[i] [j])
        }
    }   
} 








