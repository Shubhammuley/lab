let assigned;

if(localStorage.getItem("assigned_course") === null){
    assigned = null ;
  
  }
  else{
    assigned=JSON.parse(localStorage.assigned_course);
    a_len=assigned.length;
  
  }
  
  let session;
  if(sessionStorage.getItem("session_admin") === null){
      session = null ;
  
  }
  else{
    session=sessionStorage.session_admin
  
  }

  if(session=="true"){

    let parent = document.getElementById("parent")

    for(let i = 0 ; i<a_len ; i++){

        let div=document.createElement("div");
        let div1=document.createElement("div");
        let div2=document.createElement("div");
        let div3=document.createElement("div");
        
    }
    
  }
  else{
    window.history.back();
    window.location.replace("/index.html");
  }
  