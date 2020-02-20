
function chop( str , size ){

  let len=str.length/size;
  let a=[];
  let init=0;
  let end=size;

  for(let i =0 ;i<Math.round(len);i++)
  {
    a[i] = str.slice(init,end);
    init = end;
    end+=size;
  }

  return a;
}

console.log(chop("RapidOpsSolutionand",2));
