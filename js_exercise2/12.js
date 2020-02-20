function insert(string , add , index ){
  if(index == null || index == undefined ){

    index = 0;
  }
  if( add == null || add == undefined ) {
    add='';
  }
  return string.slice(0,index) + " " + add + " " + string.slice(index);
}

console.log(insert("How you doing ", "hey",10 ));
