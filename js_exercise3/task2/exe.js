let name= ["Ashish Shah", "Rashmin Chhatrala", "Yash Dubey", "Prakash Jain", "Shubham Muley" , "Sweta Kumari"];
let print;
function search(){
    
  let input= document.getElementById("text").value.toUpperCase();
  remove();
  for(let i=0 ; i<name.length ; i++){

      if(name[i].toUpperCase().indexOf(input) > -1){          
          
        let index = name[i].toUpperCase().indexOf(input);
        console.log(index);
        
        print=name[i].substring(0,index) + "<span class='highlight'>" + name[i].substring(index,index+input.length)+"</span>" + name[i].substring(index +input.length)
        let parent=document.getElementById("mytable")
        let tag = document.createElement("TR");
        let td = document.createElement("TD");
       let span=document.createElement("span");        
        data =  document.createTextNode(print);
        td.appendChild(data);
        td.innerHTML=print
        tag.appendChild(td);
        tag.id="tag"
        parent.appendChild(tag)
      }
  }
  
}

function remove(){
    var elmtTable= document.getElementById("mytable")
    var tableRows = elmtTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    for (var x=rowCount-1; x>=0; x--) {
        document.getElementById("mytable").deleteRow(x)
    }

}


