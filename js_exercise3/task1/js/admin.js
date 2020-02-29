let course_data,assigned;
let len =0 ,a_len=0;
let parentdiv = document.getElementById("parent");

if(localStorage.getItem("course") === null){
    course = null ;

}
else{
  course_data=JSON.parse(localStorage.course);
  len = course_data.length;

}

console.log(course_data);

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

console.log(session);

if(session=="true")
{


for( let i =0 ; i<len ; i++ ){

  let div=document.createElement("div");
  let divs=document.createElement("div");

  let div1=document.createElement("div");
  let div2=document.createElement("div");
  let div3=document.createElement("div");


  let img=document.createElement("img");
  let span=document.createElement("span")
  let btn=document.createElement("button");

  img.src= course_data[i].coursefile;  
  
  div.className="column"
  divs.className="text-center"
  div1.className="text-center"
  div3.className="text-center"



  img.className= "img"

  div1.appendChild(img);
  div2.appendChild(divs)
  divs.appendChild(span)
  div3.appendChild(btn);

  div.append(div1,div2,div3)


  span.innerHTML= course_data[i].coursename.toUpperCase();
 // span.style="font-size: 20px; "
  span.style="text-align =center"

  div2.className+="style "
  btn.className+="btn btn-primary footer set" ;
  btn.innerHTML = "assign course"
  btn.id= i;
  btn.dataset.toggle = "modal";
  btn.dataset.target = "#exampleModalCenter";


  btn.addEventListener('click',show)


  parentdiv.appendChild(div);


}
}
else{
 window.history.back();
 window.location.replace("/index.html");
}

//----------------------Show----------------------------------------------
 
function show(e){

  e = e || window.event;
   e = e.target || e.srcElement;
   if (e.nodeName === 'BUTTON') {
       index=e.id;
       console.log(index);
       

       
       
       
   }
   
   
   sessionStorage.course_index = index
   let checkvar=JSON.parse(localStorage.course);
   let body = document.getElementById("body");

   let users = Object.keys(JSON.parse(localStorage.student));
  
    let head = document.createElement("div");

   for(let i = 0 ; i < users.length ; i++ ){

    let div= document.createElement("div");
    let span=document.createElement("span")
    let btn=document.createElement("button")

    div.className="set"
    
    span.innerHTML= users[i].toUpperCase();
    span.style="font-size: 20px; ";
    
     
    let flag = true;
    
    try{
      for(let j=0 ; j<a_len ; j++){
        if(assigned[j].username == users[i] && assigned[j].coursename == checkvar[sessionStorage.course_index].coursename){
          flag=false;
        }
      }
    }
    catch(err){
      console.log(err);
      
    }
    if(flag){
      btn.innerHTML = " assign course"
        btn.addEventListener('click',add)
        btn.className="btn btn-primary " ;
    }
    else{
      btn.innerHTML = " remove course"
        btn.addEventListener('click',removecourse,false)
        btn.className="btn btn-danger " ;
    }
    
    btn.id= i;
    btn.style="float:right;"

    

    head.id="child"

    div.appendChild(span);
    div.appendChild(btn)
    head.appendChild(div)
     
   }

   body.appendChild(head)
   

   
}

//------------------------------------add----------------------------

function add(e){

  e = e || window.event;
  e = e.target || e.srcElement;
  if (e.nodeName === 'BUTTON') {
      index=e.id;
      console.log(index);
      
      console.log(e);
      e.innerHTML="remove course"
      console.log(e.innerHTML);      
      e.className= "btn btn-danger";
      console.log(e.className);
      e.onclick=removecourse
     // e.addEventListener('click',removecourse)    
      console.log(e.onclick);
        
      
  }
   

   let users = Object.keys(JSON.parse(localStorage.student));
    let course_index = sessionStorage.course_index;
    let data;

    course_data=JSON.parse(localStorage.course);
    course_data = course_data[course_index]
    course_data.username=users[index]
    console.log(course_data);
    
    //console.log(course_data[course_index]);
    



    if(localStorage.getItem("assigned_course") === null){
      localStorage.assigned_course =  JSON.stringify([course_data])

    }
    else{
      
     data=JSON.parse(localStorage.assigned_course);
     
    // console.log(data);
    let boolean = true;
     for(let i=0 ; i< data.length ; i++){
       
       obj=Object.values(data[i])       
       console.log(obj);

       if(obj.includes(course_data.coursename) && obj.includes(course_data.username)){
          boolean = false;
       }    
       
     }

     if(boolean){
      data.push(course_data)
     }
     else{
       console.log("data already");
       
     }

     
     //data.push(course_data)
       localStorage.assigned_course = JSON.stringify(data)

    }

}


//------------------------remove course --------------------------------

function removecourse(e){
  e = e || window.event;
   e = e.target || e.srcElement;
   if (e.nodeName === 'BUTTON') {
       index=e.id;
       console.log(index);
       e.innerHTML="assign course"
       e.className= "btn btn-primary"  ;
       e.onclick=add;
       //e.addEventListener('click',add)      
       
   }
 
   let course_index = sessionStorage.course_index;
   let courses = JSON.parse(localStorage.course);
   let users = Object.keys(JSON.parse(localStorage.student));

 
   try
   {

   for(let i=0 ; i<a_len ; i++){
     
    //console.log("elae");
    
    assigned=JSON.parse(localStorage.assigned_course);
    
    if(assigned[i].coursename == courses[sessionStorage.course_index].coursename && assigned[i].username==users[index]){
          
     assigned.splice(i,1);
     console.log("data removed");
     
     localStorage.assigned_course=JSON.stringify(assigned);
    }
  }
 
   }

   catch(err){
     console.log(err);
     
   }


}


//----------------------removechild-------------------------------------


function remove(){
  let body = document.getElementById("child");

  body.parentNode.removeChild(body);
  console.log("deleted");
  
  
}

//--------------------------logout--------------------------------------
function logout(){
  sessionStorage.clear();
  
  alert("logged out sucessfully")
}

//----------------------------------addCourse---------------------------

function addCourse()
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