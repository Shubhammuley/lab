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
