// compares the elements of the array from least to greates

  const arrayNumber = [];
  arrayNumber[0] = 7;
  arrayNumber[1] = 9;
  arrayNumber[2] = 1;
      
  for(let i = 0; i <= 2; i++){
    document.write("<strong> " + arrayNumber[i] + "</strong>");
  }

  document.write(" - Original");

  for(let i = 0; i <= arrayNumber.length - 1; i++ ) {
    for(let j = 0; j <= arrayNumber.length -1; j++){
      if(arrayNumber[j] > arrayNumber[j+1]){
        let temp = arrayNumber[j];
        arrayNumber[j] = arrayNumber[j+1];
        arrayNumber[j+1] = temp;
      }
    }
  }

  document.write("<br>");

  for(let i = 0; i <= 2; i++){
    document.write("<strong> " + arrayNumber[i] + "</strong>");
  }

  document.write(" - Ascending order ");