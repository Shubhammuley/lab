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
createTable(5,7)
