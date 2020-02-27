function login(){
  let form = document.forms.myform;
  let user = form.elements['user']
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let val;
  //let user = document.getElementByName('user');
  for (var i=0, len=user.length; i<len; i++) {
       if ( user[i].checked ) {
           val = user[i].value;
           break;
       }
   }
  let userData;

 console.log("login as " + val);
  userData = JSON.parse(localStorage.getItem(val));


  if(userData[username] == password ){

    console.log("login Successful");
    sessionStorage.setItem('user',username) ;
   
    alert("sucessfully logged in as " + val + " " + username)

    if(val == "admin"){
      sessionStorage.setItem('session_admin','true')
      window.location.replace("/admin.html")
    }
    else{
      sessionStorage.setItem('session_user','true')
    window.location.replace("/home.html")
    }
  }
  else{
    alert("invalid user or password")
  }


}
