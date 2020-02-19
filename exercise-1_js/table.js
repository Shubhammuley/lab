let firstname = new Array();
let lastname = new Array();
let count=0;
let index;
function getName()
{
   let firstName = document.getElementById("firstname").value;
   let lastName =  document.getElementById("lastname").value;

   firstname[count] = firstName;
   lastname [count] = lastName;
   count++;
   document.getElementById("firstname").value="";
   document.getElementById("lastname").value="";


   print();
 }

function del(e)
{


  e = e || window.event;
  e = e.target || e.srcElement;
  if (e.nodeName === 'BUTTON') {
      index=e.id;
      console.log(typeof index);
  }
  document.getElementById("table").deleteRow(index);
  delete firstname[index];
  delete lastname[index];





  for( let i = parseInt(index) + 1 ; i < count  ; i++  ){

       document.getElementById(i).id = i-1;
       document.getElementById(i).id = i-1;

   }
    count--;



}
function edit_append(){
  let firstName = document.getElementById("firstname").value;
  let lastName =  document.getElementById("lastname").value;



  firstname[index] = firstName;
  lastname [index] = lastName;
  console.log("index= "+index);

  document.getElementById("firstname").value="";
  document.getElementById("lastname").value="";

  table = document.getElementById("mytable")

  table.rows[index].cells[0].innerHTML = firstName;
  table.rows[index].cells[1].innerHTML = lastName;

  document.getElementById("add").disabled = false;
   document.getElementById("edit1").disabled =true;




}
function edit(e)
{


   e = e || window.event;
   e = e.target || e.srcElement;
   if (e.nodeName === 'BUTTON') {
       index=e.value;
       console.log(e.value);
   }
   document.getElementById("firstname").value=firstname[index];
   document.getElementById("lastname").value=lastname[index];

    document.getElementById("add").disabled = true;
     document.getElementById("edit1").disabled =false;

}
function print()
{
    let td;
    let data;

     let tag = document.createElement("TR");

      td = document.createElement("TD");
     tag.appendChild(td);
     data =  document.createTextNode(firstname[count-1]);
     td.appendChild(data);

      td =document.createElement("TD");
     tag.appendChild(td);
     data = document.createTextNode(lastname[count-1]);
     td.appendChild(data);

     td = document.createElement("TD");
     tag.appendChild(td);
     let button1 = document.createElement("BUTTON");
     td.appendChild(button1)
     data=document.createTextNode("Edit");
     button1.appendChild(data)
     button1.addEventListener("click",edit)
     //button1.onclick=alert1();
     button1.id=count-1;
     button1.value = count-1;
     button1.className+="btn btn-primary" ;

     td = document.createElement("TD");
     tag.appendChild(td);
     let button2 = document.createElement("BUTTON");
     td.appendChild(button2)
     data=document.createTextNode("delete");
     button2.appendChild(data)
     button2.addEventListener("click",del)
     //button1.onclick=alert1();
     button2.id=count-1;
     button2.value = count-1;
     button2.className+="btn btn-primary" ;




     document.getElementById("table").appendChild(tag);

}
