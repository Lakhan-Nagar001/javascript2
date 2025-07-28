function splice(array, startIndex, deleteCount, ...itemToAdd){

const newArray = [];
//array before
    for(let i=startIndex + deleteCount; i<array.length; i++){
        newArray.push(array[i]);
    }
    return newArray;
}

let arree = [1,2,3,4,5,6,7,8,9];

console.log("splice", )