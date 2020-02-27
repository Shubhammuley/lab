function signup(){
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let password1 = document.getElementById("password1").value;
  //let user = document.getElementByName('user');
  
  let userData;
  let form = document.forms.form1;
  let user = form.elements['user']
  let val;
  //let user = document.getElementByName('user');
  for (var i=0, len=user.length; i<len; i++) {
       if ( user[i].checked ) {
           val = user[i].value;
           break;
       }
   }

   userData = JSON.parse(localStorage.getItem(val));


  if(password === password1 ){
     
    userData[username]=password;
    
    localStorage.setItem(val,JSON.stringify(userData));
     
    console.log("Signup as " + val);
    
    alert("signup sucessfull")

    window.location.replace("/index.html")

    
  }
  else {
    alert("password doesnot match")
  }
}
