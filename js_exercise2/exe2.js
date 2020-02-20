1.) Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ first​ ​ and​ ​ last​ ​ element​ ​ of​ ​ an​ ​ array.​ ​ Passing​ ​ a parameter​ ​'n'​ ​ will​ ​ return​ ​ the​ ​ first​ ​ 'n'​ ​ elements​ ​ of​ ​ the​ ​ array​ ​ and​ ​ last​ ​ ‘n’​ ​ elements​ ​ of​ ​ the array.
---------------->
function first(array, n) {
      if (array == null)
      return void 0;
    if (n == null)
      return array[0];
    if (n < 0)
      return [];
    return array.slice(0, n);
  }

function last (array, n) {

    if (array == null)
      return void 0;
    if (n == null)
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
    };

let array=[5,4,6,2,5,7];

console.log(array);

console.log(`first element ${array[0]}`);
console.log(`last element ${array[array.length - 1 ]}`);

console.log(last(array,2));

console.log(first(array));
console.log(first(array, -1));
console.log(first(array , 3));

----------------------------------------------------------------------------------

2.) Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ which​ ​ accepts​ ​ a ​ ​ number​ ​ as​ ​ input​ ​ and​ ​ insert​ ​ dashes​ ​ (-) between​ ​ each​ ​ two​ ​even​ ​ numbers.
-------------------->

let num = 124526028

let arr = num.toString();

let result = [arr[0]];

for(let x=1; x<arr.length; x++)
  {
    if((arr[x-1]%2 === 0)&&(arr[x]%2 === 0))
     {
      result.push('-', arr[x]);
     }
    else
     {
      result.push(arr[x]);
     }
  }
console.log(result.join(''));

------------------------------------------------------------------------------

3.) Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ find​ ​ the​ ​ most​ ​ frequent​ ​ item​ ​ of​ ​ an​ ​ array.
----------------------->
let arr=[1,2,5,1,2,1,2,3,4,2,3,4,1,3];
let mf = 1;
let count = 0;
let item;
for (let i=0; i<arr.length; i++)
{
        for (let j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 count++;
                if (mf<count)
                {
                  mf=count;
                  item = arr[i];
                }
        }
        count=0;
}
console.log(item+" ( " +mf +" times ) ") ;

--------------------------------------------------------------------------------
4.) Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ shuffle​ ​ an​ ​ array.
------------------>

function shuffle(array){

  let len =array.length ,temp ,index;

  while(len>0){

  index = Math.floor(Math.random() * len);

  len --;

  temp=array[len];
  array[len]= array[index];
  array[index]= temp
 }

 return array;

}

let array = [1,2,3,4,5,6,7]
console.log(shuffle(array));


--------------------------------------------------------------------------------

5.) Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ compute​ ​ the​ ​ union​ ​ of​ ​ two​ ​ arrays,​ ​ and​ ​ Write​ ​ a ​ ​ JavaScript function​ ​ to​ ​find​ ​ the​ ​ difference​ ​ of​ ​ two​ ​ arrays.

------------------------------>
function union(arr1,arr2){
  if(arr1==null || arr2==null)
   return void 0;

  let obj = {};

  for (let i = 0; i<=  arr1.length-1;i++)
  {
    obj[arr1[i]] = arr1[i];

  }
  for (let i = 0; i<= arr2.length-1 ;i++)
  {
    obj[arr2[i]] = arr2[i];

  }

 let result = [] ;

for (var key  in obj){
  if (obj.hasOwnProperty(key))
  result.push(key)
}
  return result;
}

function diff( arr1 ,arr2){
  let temp=[];


 arr1 = arr1.toString().split(',').map(Number);
 arr2 = arr2.toString().split(',').map(Number);


 for (let i in arr1) {
   if(arr2.indexOf(arr1[i]) === -1){
    temp.push(arr1[i]);
   }
 }

 for(let i in arr2) {
   if(arr1.indexOf(arr2[i]) === -1) {
     temp.push(arr2[i]);
   }
 }

  return temp;
}

let arr1 = [1,2,3,4]
let arr2 = [2,5,1,3,4,6,45]

console.log(union(arr1,arr2));

console.log(diff(arr1,arr2));

------------------------------------------------------------------------------
6.) Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ fill​ ​ an​ ​ array​ ​ with​ ​ values​ ​ (numeric,​ ​ string​ ​ with​ ​ one character)​ ​ on​ ​supplied​ ​ bounds.
console.log(num_string_range('a',​ ​ "z",​ ​ 2));
 ["a",​ ​ "c",​ ​ "e",​ ​ "g",​ ​ "i",​ ​ "k",​ ​ "m",​ ​ "o",​ ​ "q",​ ​ "s",​ ​ "u",​ ​ "w",​ ​ "y"]

------------------------------>

function num_string_range(start , end ,incre){

  let range = [];
  if (end < start) {
       incre = -incre;
   }

  if(typeof start == "string"){
    start = start.charCodeAt(0);
    end = end.charCodeAt(0);

      while (incre > 0 ? end >= start : end <= start) {
              range.push(String.fromCharCode(start));
              start += incre;
          }
  }
  if (typeof start == "number") {

          while (incre > 0 ? end >= start : end <= start) {
              range.push(start);
              start += incre;
          }
        }
        return range;
}

console.log(num_string_range('a', "z", 2));
console.log(num_string_range(1,50, 5));



-------------------------------------------------------------------------------

7. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ month​ ​ name​ ​ from​ ​ a ​ ​ particular​ ​ date.

------------------------------>
function getMonthName (date){
  let month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  return month[date.getMonth()];
}

let date1 = new Date("04/10/2013")
console.log(getMonthName(date1));
--------------------------------------------------------------------------------
8. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ difference​ ​ between​ ​ two​ ​ dates,​ ​ from​ ​ maximum​ ​ unit​ ​ to minimum​ ​ unit.
------------------------->

var date_diff_indays = function(date1, date2) {
dt1 = new Date(date1);
dt2 = new Date(date2);
return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));

---------------------------------------------------------------------------------
9.)Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ convert​ ​ a ​ ​ Unix​ ​ timestamp​ ​ to​ ​ time.
------------------->
function Unix_timestamp(t)
{
var dt = new Date(t*1000);
var hr = dt.getHours();
var m = "0" + dt.getMinutes();
var s = "0" + dt.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);
}

console.log(Unix_timestamp(1412743274));
--------------------------------------------------------------------------------
10. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ time​ ​ differences​ ​ in​ ​ years,​ ​ months,​ ​ weeks,​ ​ days,​ ​ hours and​ ​ minutes​ ​between​ ​ two​ ​ dates.
---------------------->
function diff_year(date1,date2){

  let diff = (date1.getTime() - date2.getTime())/1000;
  diff = diff/(60*60*24)
  return Math.abs(Math.round(diff/365.25));
}

function diff_months(date1,date2){
  let diff = (date1.getTime() - date2.getTime())/1000;
  diff = diff/(60*60*24*7*4);
  return Math.abs(Math.round(diff));

}
function diff_weeks(date1,date2){
  let diff = (date1.getTime() - date2.getTime())/1000;
  diff = diff/(60*60*24*7);
  return Math.abs(Math.round(diff));

}


function diff_days(date1,date2){
  let diff = (date1.getTime() - date2.getTime())/1000;
  diff = diff/(60*60*24);
  return Math.abs(Math.round(diff));

}

function diff_hours(date1,date2){
  let diff = (date1.getTime() - date2.getTime())/1000;
  diff = diff/(60*60);
  return Math.abs(Math.round(diff));

}


function diff_min(date1,date2){
  let diff = (date1.getTime() - date2.getTime())/1000;
  diff = diff/(60);
  return Math.abs(Math.round(diff));

}


let date1 = new Date("January 26 ,2016 08:50:15");
let date2 = new Date("January 26,2017 08:54:00");



console.log(diff_year(date1,date2));
console.log(diff_months(date1,date2));
console.log(diff_weeks(date1,date2));
console.log(diff_days(date1,date2));
console.log(diff_min(date1,date2));
--------------------------------------------------------------------------------
11. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ hide​ ​ email​ ​ addresses​ ​ to​ ​ protect​ ​ from​ ​ unauthorized​ ​ user. "​abc***d@example.com​ "
----------------------------->

function email (mail){
  let split= mail.split("@");
  let prefix = split[0]
  let mid=prefix.length/2;
  let sufix = split[1];



  return prefix.substring(0,(prefix.length - mid )) + "****" + prefix.charAt(prefix.length-1) + "@" + sufix
}

console.log(email("shubham.muley@rapidops.com"));
------------------------------------------------------------------------

12. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ insert​ ​ a ​ ​ string​ ​ within​ ​ a ​ ​ string​ ​ at​ ​ a ​ ​ particular​ ​ position (default​ ​is​ ​ 1).
-------------------------->
function insert(string , add , index ){
  if(index == null || index == undefined ){

    index = 0;
  }
  if( add == null || add == undefined ) {
    add='';
  }
  return string.slice(0,index) + add + string.slice(index);
}

console.log(insert("How you doing ", "hey",10 ));

------------------------------------------------------------------------

13. Write​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ chop​ ​ a ​ ​ string​ ​ into​ ​ chunks​ ​ of​ ​ a ​ ​ given​ ​ length.
console.log(string_chop('RapidOpsSolution’',2));
["Ra",​ ​ "pi",​ ​ "dO",​ ​ "ps",​ ​ "So",​ ​ ”lu”,​ ​ “ti”,​ ​ “on”]
----------------------->


function chop( str , size ){

  let len=str.length/size;
  let a=[];
  let init=0;
  let end=size;

  for(let i =0 ;i<Math.round(len);i++)
  {
    a[i] = str.slice(init,end);
    init = end;
    end+=size;
  }

  return a;
}

console.log(chop("RapidOpsSolutionand",2));

------------------------------------------------------------------------

14. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ remove​ ​ HTML/XML​ ​ tags​ ​ from​ ​ string.
'<p><strong><em>Javascript​ ​ Exercises</em></strong></p>
“Javascript​ ​ Exercises”

----------------------------------->

str ='<p><strong><em>Javascript​ ​ Exercises</em></strong></p>';
str1= '<body><script src=sam.js>sdfgghfg  </script></body>'

function remove(str){
  return str.replace(/<[^>]*>/g,"");;
}

console.log(remove(str));
console.log(remove(str1));

------------------------------------------------------------------------

15. Write​ ​ a ​ ​ pattern​ ​ that​ ​ matches​ ​ e-mail​ ​ addresses.

---------------------->

function email_validation(mail){

  let index_a = mail.indexOf("@");
  let index_dot = mail.lastIndexOf(".");
  console.log(index_a);

 console.log(index_dot);
 console.log(mail.length);

  if(index_a < 1 || index_dot < index_a+2 || index_dot >= mail.length-2){
    return "invalid mail";
  }
  else {
    return "valid mail";
  }
}

console.log(email_validation("shubham@gmail.in"));

------------------------------------------------------------------------
16. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​ ​ an​ ​ integer​ ​ with​ ​ commas​ ​ as​ ​ thousands​ ​ separators.

----------------------->

function commas(int){

  int=int.toString();
  let substr="";
  if(int.includes(".")) {
    substr=int.slice(int.indexOf("."));
    int=int.slice(0,int.indexOf("."));

  }
  if(int.length < 4){
    return int;
  }
  else {
  return commas(int.slice(0,int.length-3)) + ","+int.slice(int.length-3)+substr ;
  }
}

console.log(commas(1234454.54545));

------------------------------------------------------------------------
17. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ that​ ​ creates​ ​ a ​ ​ table,​ ​ accept​ ​ row,​ ​ column​ ​ numbers​ ​ from​ ​ the user,​ ​ and​ ​input​ ​ row-column​ ​ number​ ​ as​ ​ content​ ​ (e.g.​ ​ Row-0​ ​ Column-0)​ ​ of​ ​ a ​ ​ cell.
---------------------->

function createTable(row , col ){

  for(let r=0 ;r<row; r++)
  {
    let x =document.getElementById('table').insertRow(r)

    for(let c=0 ; c<col ;c++)
    {
      let y=x.insertCell(c);
      y.innerHTML= r + " - " +c;
    }
  }

}
createTable(5,5)

------------------------------------------------------------------------

18. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​ ​ array​ ​ of​ ​ object​ ​ in​ ​ ascending​ ​ order​ ​ on​ ​ age, descending​ ​ order​ ​ on​​ name.​ ​ (Make​ ​ array​ ​ of​ ​ object​ ​ with​ ​ three​ ​ fields​ ​ are​ ​ 1.​ ​ Id,​ ​ 2.​ ​ Name,​ ​ 3. age)​ ​ NOTE:​ ​ Array​ ​ have​ ​ minimum​ ​ 10​ ​ objects.
----------------------------------------->

array = [
         {id:101 ,name:"Ab" , age:20},
         {id:103 ,name:"aab", age:28},
         {id:106 ,name:"zA", age:18},
         {id:158 ,name:"bA",age:19},
         {id:10 ,name:"XA", age:23},
         {id:2 ,name:"BA", age:35},
         {id:82 ,name:"fA", age:25},
         {id:802 ,name:"gsA", age:52},
         {id:1 ,name:"ksA" , age:48},
         {id:100 ,name:"KsA" ,age:36},


    ];


function compare_id(x,y)  {
    if (x.age < y.age)
      return -1;
    if (x.age > y.age)
      return 1;
    return 0;
 }

 function compare_name(x,y)  {
     if (x.name > y.name)
       return -1;
     if (x.name < y.name)
       return 1;
     return 0;
  }
console.log(array.sort(compare_id));
console.log(array.sort(compare_name));

------------------------------------------------------------------------

19. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ delete​ ​ particular​ ​ object​ ​ from​ ​ array​ ​ and​ ​ add​ ​ new​ ​ object​ ​ at particular​ ​position.

------------------------------------>
function remove(array , n){

  let index = array.indexOf(n);
  console.log(index);

  if(index > -1){
    array.splice(index, 1)
  }
  return array;
}


array=[1,2,3,4,5,6,7]

console.log(remove(array,3));


------------------------------------------------------------------------
function display(array){
  let reading = [];
   travelling=[],music=[],drawing=[];

  for ( let i=0 ; i < array.length ; i++){
    if(array[i].hobbies.indexOf("reading") > -1)  {
      reading.push(array[i].name)

    }
    if(array[i].hobbies.indexOf("travelling") > -1)  {
      travelling.push(array[i].name)

    }
    if(array[i].hobbies.indexOf("drawing") > -1)  {
      drawing.push(array[i].name)
    }
    if(array[i].hobbies.indexOf("music") > -1)  {
      music.push(array[i].name)
    }


  }


  console.log("Reading : " + reading);
  console.log("travelling : "+ travelling);
  console.log("drawing  : "+  drawing);
  console.log("music : "+ music);
}

let array = [
    { id:1, name:"abc" , hobbies:["reading", "travelling", "music" ]},
    { id:2, name:"xyz" , hobbies:[ "reading", "drawing", "music" ]},
    { id:2, name:"dd" , hobbies:[ "drawing", "music" ]},
    { id:2, name:"ee" , hobbies:[ "reading",]},
    { id:2, name:"ff" , hobbies:[ "travelling", "reading", "music" ]}
  ];

  display(array)
