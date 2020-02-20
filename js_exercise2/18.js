array = [
         {id:101 ,name:"Ab" , age:20},
         {id:103 ,name:"aab", age:28},
         {id:106 ,name:"zA", age:18},
         {id:158 ,name:"bA",age:19},
         {id:10 ,name:"XA", age:23},
         {id:2 ,name:"BA", age:35},
         {id:82 ,name:"fA", age:25},
         {id:802 ,name:"gsA", age:52},
         {id:1 ,name:"ksA" , age:48},
         {id:100 ,name:"KsA" ,age:36},


    ];


function compare_id(x,y)  {
    if (x.age < y.age)
      return -1;
    if (x.age > y.age)
      return 1;
    return 0;
 }

 function compare_name(x,y)  {
     if (x.name > y.name)
       return -1;
     if (x.name < y.name)
       return 1;
     return 0;
  }
console.log(array.sort(compare_id));
console.log(array.sort(compare_name));
