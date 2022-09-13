function removeSmallerThen(arreyOfNumber,num) {
    const arreyOutput =[];
    for (let i=0; i<arreyOfNumber.length; i++ ){
        if (arreyOfNumber[i] > num){
            arreyOutput.push(arreyOfNumber[i]);
             
        }
        
    }
    console.log(arreyOutput) 
        return arreyOutput;
}




//zwracac tablice z liczbami wiekszymi niz zadana liczna z parametru (Number)
//tablica nie bedzie pusta


//testy
console.log(JSON.stringify(removeSmallerThen([2,5,7,9,10], 6)) === JSON.stringify([7,9,10]));
//console.log(JSON.stringify(removeSmallerThen([2,5,3,1,6], 6)) === JSON.stringify([]));