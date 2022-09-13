function last (text) { 
  const myArrey = text.split(" ");
  const sortArrey = myArrey.sort(function (a, b){
    return parseInt(a.charAt(a.length - 1), 36) - parseInt(b.charAt(b.length - 1), 36);
  });
  return sortArrey;
}

console.log(
  JSON.stringify(last("bbb ccc aaa")) === JSON.stringify(["dupek", "dom", "ogon"])
);


