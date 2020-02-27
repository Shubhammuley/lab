function check()
{
  let userData=[
  {
    shubham1:"muley1",
    rapidadmin1:"admin1"
  },
  ]
let user;

  if(localStorage.getItem("user") === null){
      localStorage.user =  JSON.stringify(userData)

  }
  else{
    user=JSON.parse(localStorage.user);
    user.push(userData)
      localStorage.user = JSON.stringify(user)

  }

/*
  let user=localStorage.user;

  console.log(user);

  if(user == ""  || user == undefined)
  {
    console.log("run if");
    localStorage.user = JSON.stringify([{
      shubham:"muley",
      rapidadmin:"admin"
    }])



  }
  else{
    console.log("run else");
    //user=JSON.parse(localStorage.user)
  //  user.push(userData)
    localStorage.user = JSON.stringify(user)
  }


  console.log(localStorage.user);
  console.log(user);
*/
}

//localStorage.new = JSON.stringify(userData)

//let new1 = JSON.parse(localStorage.new)


//new1.push({shubham2:"muley2",
//rapidadmin2:"admin2"})

//console.log(new1);
//localStorage.new = JSON.stringify(new1)
