



function reverseWord(input){
  if (input===""){
    return ""
  }
  else{
	const splitinput= input.split(" ");
  const reverseinput = splitinput.reverse();
  const output = reverseinput.join(" ");
  return output
 
}
}
reverseWord("bla ania") 

function tests(){
  console.log(reverseWord("Paweł jest miły")==="miły jest Paweł") 
  console.log(reverseWord("")==="")
}

tests()







//"The greatest victory is that which requires no battle" -->
// "battle no requires which that is victory greatest The"


//const output= "battle no requires which that is victory greatest The";



//function reverseWords(str){
  //  return str; // reverse those words
 // }
  
  
//console.log(reverseWords(input)===output)

//console.log(reverseWords("pawel")==="pawel")
