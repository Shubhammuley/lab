str ='<p><strong><em>Javascript​ ​ Exercises</em></strong></p>';
str1= '<body><script src=sam.js>sdfgghfg  </script></body>'

function remove(str){
  return str.replace(/<[^>]*>/g,"");;
}

console.log(remove(str));
console.log(remove(str1));
