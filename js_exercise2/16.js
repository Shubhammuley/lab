
function commas(int){

  int=int.toString();
  let substr="";
  if(int.includes(".")) {
    substr=int.slice(int.indexOf("."));
    int=int.slice(0,int.indexOf("."));

  }
  if(int.length < 4){
    return int;
  }
  else {
  return commas(int.slice(0,int.length-3)) + ","+int.slice(int.length-3)+substr ;
  }
}

console.log(commas(1234454.54545));
