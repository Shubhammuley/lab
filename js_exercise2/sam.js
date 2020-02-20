let a = {
  name:"dsd",
  id:55
}
Object.defineProperty(a,"name",{writable: false , enumerable: false})
console.log(Object.getOwnPropertyDescriptor(a,'name'));

//a.name ="dsaddsd"
//a.id=55445
console.log(a);

for (let key in a) console.log(key);
