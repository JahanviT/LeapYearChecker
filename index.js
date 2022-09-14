var year = prompt("Enter year: ");
  if (year % 4 === 0) {
        if (year % 100 === 0){
            if ( year % 400 === 0){
                alert ("Leap year.");
            } else {
                alert ("Not leap year.");
            }
        } else {
            alert ("Leap year.");
        }
     } else {
        alert (" Not leap year.") ;
     }



//var year = isLeap(2001);
//return(alert(year));
