function change(){
    let d3=document.getElementById("d3")
    
    let colors = [ 'red', 'green', 'yellow', 'blue' ,'AliceBlue', 'Aqua' , "Aquamarine ","BlueViolet" ,"IndianRed","DarkSalmon","Cyan","DarkCyan" ];
    let color   = Math.floor((Math.random() * colors.length - 1) + 1);  
    
    d3.style.backgroundColor=colors[color];
    
}
  
let table= document.getElementById("table");

let timerid=setInterval(change,3000 );


function one(){
    let d1=document.getElementById("d1");
    d1.innerHTML="Oops something wrong?"
    clearTimeout(timerid);
}

let d4=document.getElementById("d4");

let id;

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            clearTimeout(id);
            previous()
            break;
        case 38:
            clearTimeout(id);
            next();
            break;
        case 39:
            clearTimeout(id);
            next();
            break;
        case 40:
            clearTimeout(id);
            previous();
            break;
    }
};



let colors = [ 'red', 'green', 'yellow', 'blue' ,'AliceBlue', 'Aqua' , "Aquamarine ","BlueViolet" ,"IndianRed","DarkSalmon","Cyan","DarkCyan" ];
let count=-1;


function next(){
    if(count<-1 || count==colors.length-1){
        count= -1;
    }  
    count++;
    d4.style.backgroundColor=colors[count];    
     
    id=setTimeout(next,5000);
        

}

function previous(){
    
    if(count == 0){
        count=colors.length;
    }
     
    count--;
    d4.style.backgroundColor=colors[count];
     
    id=setTimeout(previous,5000);

}
