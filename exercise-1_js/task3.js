let first_name = ["a","b","c","d","E"];
let last_name= ["f","g","h","i","j"];
let count =1;
let index;

function getName()
{
   let firstName = document.getElementById("firstname").value;
   let lastName =  document.getElementById("lastname").value;



   first_name[index] = firstName;
   last_name [index] = lastName;
   console.log("index= "+index);

   document.getElementById("firstname").value="";
   document.getElementById("lastname").value="";

   document.getElementById("firstname").hidden = true;
   document.getElementById("lastname").hidden = true;
   document.getElementById("add").hidden = true;

 table = document.getElementById("mytable")

 table.rows[index].cells[0].innerHTML = firstName;
 table.rows[index].cells[1].innerHTML = lastName;



 }

function del(e)
{


  e = e || window.event;
  e = e.target || e.srcElement;
  if (e.nodeName === 'BUTTON') {
      index=e.id;
      console.log(index);
  }
  document.getElementById("table").deleteRow(index);

//  delete first_name[index];
//  delete last_name[index];
  first_name.splice(index, 1);
  last_name.splice(index, 1);
  for( let i = parseInt(index) + 1 ; i < count-1 ; i++  ){

       document.getElementById(i).id = i-1;
       document.getElementById(i).id = i-1;
      /* first_name[i-1]=first_name[i]
       last_name[i-1]=last_name[i]
       console.log(index +" = "+first_name[index]);
*/
   }
   index--;
    count--;



}
function edit(e)
{


   e = e || window.event;
   e = e.target || e.srcElement;
   if (e.nodeName === 'BUTTON') {
       index=e.id;
       console.log(e.id);
   }

      document.getElementById("firstname").hidden = false;
      document.getElementById("lastname").hidden = false;
      document.getElementById("add").hidden = false;

      document.getElementById("firstname").value=first_name[index];
      document.getElementById("lastname").value=last_name[index];

}

function print()
{
    let td;
    let data;

    let len = first_name.length;

    for(let i=0 ; i<len ; i++){
      let tag = document.createElement("TR");
        td = document.createElement("TD");
        tag.appendChild(td);
        data =  document.createTextNode(first_name[i]);
        td.appendChild(data);

       td =document.createElement("TD");
      tag.appendChild(td);
      data = document.createTextNode(last_name[i]);
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

      document.getElementById("show").hidden = true;
      count++;

    }


}

/*
function editRow()
        {
            table.rows[rIndex].cells[0].innerHTML = document.getElementById("fname").value;
            table.rows[rIndex].cells[1].innerHTML = document.getElementById("lname").value;
            table.rows[rIndex].cells[2].innerHTML = document.getElementById("age").value;
        }

        */
