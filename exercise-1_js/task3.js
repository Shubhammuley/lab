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

   document.getElementById("firstname").disabled = true;
   document.getElementById("lastname").disabled = true;
   document.getElementById("add").disabled = true;
/*
   var x = document.getElementById('myTable').rows[index].cells;

  x[parseInt(0,10)].innerHTML=firstName;

  var y = document.getElementById('myTable').rows[index].cells;

 y[parseInt(1,10)].innerHTML=lastName;

*/
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
      console.log(typeof index);
  }
  document.getElementById("table").deleteRow(index);
  delete first_name[index];
  delete last_name[index];

  for( let i = parseInt(index) + 1 ; i < count-1 ; i++  ){

       document.getElementById(i).id = i-1;
       document.getElementById(i).id = i-1;

   }
    count--;



}
function edit(e)
{


   e = e || window.event;
   e = e.target || e.srcElement;
   if (e.nodeName === 'BUTTON') {
       index=e.value;
       console.log(e.value);
   }

      document.getElementById("firstname").disabled = false;
      document.getElementById("lastname").disabled = false;
      document.getElementById("add").disabled = false;
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

      document.getElementById("show").disabled = true;
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
