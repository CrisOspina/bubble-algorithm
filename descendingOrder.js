// compares the elements of the array from greatest of least

  const arrayNumberDes = [];
  arrayNumberDes[0] = 7;
  arrayNumberDes[1] = 9;
  arrayNumberDes[2] = 1;

  for(let i = 0; i <= arrayNumberDes.length -1; i++){
    document.write("<strong> " + arrayNumberDes[i] + "</strong>");
  }

  document.write(" - Original");

  for(let i = 0; i <= arrayNumberDes.length -1; i++){
    for(let j = 0; j <= arrayNumberDes.length -1; j++){
      if(arrayNumberDes[j] < arrayNumberDes[j+1]){
        let tempo = arrayNumberDes[j];
        arrayNumberDes[j] = arrayNumberDes[j+1];
        arrayNumberDes[j+1] = tempo;
      }
    }
  }

  document.write("<br>");

  for(let i = 0; i <= arrayNumberDes.length -1; i++){
    document.write("<strong> " + arrayNumberDes[i] + "</strong>");
  }

  document.write(" - Descending order");
