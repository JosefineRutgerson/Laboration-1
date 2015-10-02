

/* Uppgift 8 Födelsedag */

/* Funktion som frågar användaren om dess födelsedag och svarar hur många dagar det är kvar.*/

function birthday (){
    var month =  +prompt("On what month are your birthday (1-12)?")
    var day = +prompt("On what day are your birthday (1-31)?")
    
    month = month - 1;
    var birthdate = new Date();
    birthdate.setMonth(month);
    birthdate.setDate(day);
    var timeB = birthdate.getTime();
    
    
    var todaysDate = new Date();
    var timeT = todaysDate.getTime();
    console.log("today's date is " + todaysDate );
    var milliLeft = timeB - timeT;
    console.log("Millisekunds left to your birthday " + milliLeft);
    if (milliLeft < 0){
        var birthdayAddedOneYEar = birthdate.getFullYear()+1;
        birthdate.setYear(birthdayAddedOneYEar);
        timeB = birthdate.getTime();
        milliLeft = timeB - timeT;
    }
    console.log("Your birthday is on the " + birthdate);
    var daysLeft = Math.floor(milliLeft /(1000*60*60*24));
    console.log("how many days left to your birtday " +daysLeft);
    if (daysLeft === 0){
        alert("Congratulations on your birthday!");
    }
    alert("You have " + daysLeft + " days left to your birthday!");
    
}

birthday();



