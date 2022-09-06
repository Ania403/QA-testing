// add, minus, divade, multiplay


//const operation={
//add:'add', minus:'minus', divade:'divade', multiplay: 'multiplay'
//}

//function calculator (number1, number2, oper) {
//  if (oper ===operation.add){
//    return number1 + number2; 
//  }
//  else if (oper === operation.minus){
//    return number1 - number2;
//  }
//  else if (oper === operation.divade){
//    return  number1 / number2;
//  }
//  else {
//    return number1 * number2;
//  }
//}

//console.log(calculator(20, 10, operation.add));


const operation={
  add:'add', minus:'minus', divade:'divade', multiplay: 'multiplay'
  }
  //switch 
  function calculator (number1, number2, oper){
  switch(true) {
    case oper === operation.add:
      return number1 + number2;
      
    case oper === operation.minus:
      return number1 - number2;
      
      case  oper === operation.divade:
      return  number1 / number2;
      
    case  oper === operation.multiplay :
      return number1*number2
      
      default:
        return "invalid operation"
  }
}
 //console.log(calculator(6,3,operation.add))

 function tests(){
console.log(calculator(6,3,operation.add)===9);
console.log(calculator(6,3,operation.minus)===3);
console.log(calculator(6,3,operation.divade)===2);
console.log(calculator(6,3,operation.multiplay)===18);
console.log(calculator(6,3,operation.ddddd)==="invalid operation");

}
tests()