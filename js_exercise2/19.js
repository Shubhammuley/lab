function remove(array , n){

  let index = array.indexOf(n);
  console.log(index);

  if(index > -1){
    array.splice(index, 1)
  }
  return array;
}


array=[1,2,3,4,5,6,7]

console.log(remove(array,3));
