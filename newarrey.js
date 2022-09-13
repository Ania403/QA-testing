//for loop
function multiplayForLoop(arr){
    if(arr.length === 0 ){
       return [];
    }
    const newarrey = [];
   for (let i = 0; i < arr.length; i++) {  
       newarrey.push(arr[i] * arr[i]);
    }
    console.log(newarrey)
    return newarrey;   
}


//for Each
function multiplayForEach(arr){
    if(arr.length === 0){
        return [];
    }
    const newArrey = [];
    arr.forEach((num)=> {
         newArrey.push(num*num);
    });
    console.log(newArrey);
    return newArrey;
}


//map

function multiplayWithMap(arr){
    if(arr.length === 0){
        return [];
    }
    const newArrey = arr.map((num)=> {
       return num*num; 
    });
    console.log(newArrey);
    return newArrey;
}

//testy
console.log(JSON.stringify(multiplayForLoop([2,5,7,9,10])) === JSON.stringify([4,25,49,81,100]));
console.log(JSON.stringify(multiplayForEach([2,5,7,9,10])) === JSON.stringify([4,25,49,81,100]));
console.log(JSON.stringify(multiplayWithMap([2,5,7,9,10])) === JSON.stringify([4,25,49,81,100]));
console.log(JSON.stringify(multiplayWithMap([])) === JSON.stringify([]));
