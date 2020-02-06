function date (){
    let date = new Date()
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
    let day = check(date.getDate());

    document.getElementById("date").innerHTML = (` Date &nbsp  ${day}  ${month[date.getMonth()]}   ${date.getFullYear()}`);

    setTimeout(date,1000)

}
function time(){
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = check(h);
    m = check(m);
    s = check(s);


    document.getElementById("time").innerHTML = "Time &nbsp " +h + ":" + m + ":" + s;


    setTimeout(time,500)
}

date();


  //let count = 0;
  let sec = 0;
  let min = 0;
  let hour = 0;
  let msec = 0;
  let timerId;
  let h,m,s,ms;

function stopWatch() {
  //let sec = count;

  msec++;
  if(msec === 100)
  {
    sec++;
    msec = 0;
  }

  if(sec === 60 )
  {
    min ++;
    sec = 0;
  }
  if(min === 60)
  {
    hour++;
    min=0;
  }


   s = check(sec);
   ms = check(msec);
   m = check(min);
   h = check(hour);


   document.getElementById("timer").innerHTML = h+":" + m + ":" + s+":"+ms
    document.getElementById("start").disabled = true;
    document.getElementById("resume").disabled = true;

  timerId=setTimeout(stopWatch , 10)
}

function stop(){
  clearTimeout(timerId)
  document.getElementById("resume").disabled = false;
  document.getElementById("start").disabled = false;


}
function reset() {
  clearTimeout(timerId);
  sec=0;
  min=0;
  hour=0;
  msec=0;
  s = check(sec);
  m = check(min);
  h = check(hour);
  //msec = check(msec);


  document.getElementById("timer").innerHTML = h + ":" + m + ":" + s +":00";
  document.getElementById("start").disabled = false;
  document.getElementById("resume").disabled = true;


}

function check(i) {

  if (i < 10) {
    i = "0" + i
  };

  return i;
}
