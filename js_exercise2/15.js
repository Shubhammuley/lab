function email_validation(mail){

  let index_a = mail.indexOf("@");
  let index_dot = mail.lastIndexOf(".");
  console.log(index_a);

 console.log(index_dot);
 console.log(mail.length);

  if(index_a < 1 || index_dot < index_a+2 || index_dot >= mail.length-2){
    return "invalid mail";
  }
  else {
    return "valid mail";
  }
}

console.log(email_validation("shubham@gmail.in"));
