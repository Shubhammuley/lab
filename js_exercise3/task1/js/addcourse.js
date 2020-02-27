


let session;
if(sessionStorage.getItem("session_admin") === null){
    session = null ;

}
else{
  session=sessionStorage.session_admin

}

console.log(session);

if(session != "true"){
  window.history.back();
  window.location.replace("/index.html");
}
function add()
{
    let course_name= document.getElementById("course_name").value ; 
    let course_link= document.getElementById("course_link").value;
    
    let file = document.getElementById("course_file").value
     file=file.slice(12);
     file="/img/"+file;
    
     let courses={coursename:course_name , courselink:course_link , coursefile:file}
    let course_data;
    if(localStorage.getItem("course") === null){
        localStorage.course =  JSON.stringify([courses])
  
    }
    else{
      course_data=JSON.parse(localStorage.course);
      course_data.push(courses)
        localStorage.course = JSON.stringify(course_data)

        window.location.replace("/admin.html")
  
    }


}



/*
  
  {coursensme:" ",
   courselink: "",
   coursefile:""
}

 
*/