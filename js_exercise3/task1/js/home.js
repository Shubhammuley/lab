let user= sessionStorage.getItem("user");
let session;
if(sessionStorage.getItem("session_user") === null){
    session = null ;

}
else{
  session=sessionStorage.session_user

}

console.log(session);

document.getElementById('username').innerHTML=user
if(session == 'true')
{





let course_data;
let len =0;
let parentdiv = document.getElementById("parent");
let arr = [];

if(localStorage.getItem("assigned_course") === null){
    course = null ;

}
else{
  course_data=JSON.parse(localStorage.assigned_course);
  len = course_data.length;

}
console.log(course_data);

for( let i = 0 ; i<len ; i++){
   
    //console.log(course_data[i]);
    if(course_data[i].username == user){

        let div=document.createElement("div");
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let divs=document.createElement("div");


    let anchor=document.createElement("a");
    anchor.href = course_data[i].courselink


    let img=document.createElement("img");
    let span=document.createElement("span")
    

    img.src= course_data[i].coursefile;  
    
    div.className="column"
    div1.className="text-center"
    divs.className="text-center"


    img.className= "img"
    div2.className="style "

    div1.appendChild(img);
    div2.appendChild(divs);
    divs.appendChild(anchor);
    anchor.appendChild(span)
    div3.appendChild(div2)
    

    div.append(div1,div3)

    span.innerHTML= course_data[i].coursename.toUpperCase();

    parentdiv.appendChild(div);
        
    }


    
}



}
else{

    window.history.back();
    window.location.replace("/index.html");
}








function logout(){
    sessionStorage.clear();
    
    alert("logged out sucessfully")
}