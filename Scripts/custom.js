$(document).ready(function() {

    setInterval(
        function() {
            $('#sailboat').animate({
                'margin-left': '82%'
            }, 60000);
            $('#sailboat').animate({
                'margin-left': '0%'
            }, 50000);
        },2000);

});


/* Labb 4 */


/* console.log("Hello world");
window.alert("Hello world");

alert("rad 1" + "\n" + "rad 2"); */

 /* Uppgift 2*/

function calcMedeltal(m){
    var tal1 = 2;
    var tal2 = 4;
    var tal3 = 6;
    var tal4 = 8;
    return m(tal1, tal2, tal3, tal4);
}

var medelTal = function (x, y, z, v) {
    return ((x+y+z+v) /4);
    
}; 

var medel = calcMedeltal(medelTal);

console.log(medel);  /* Function medeltal uppg: 2.1 */

/* Uppgift 2.1*/

var printArg = function (a, b, c) {
   return a + "," + b + "," + c; 
};
console.log(printArg("Josse", "is", "awesome"));
 
 /* Uppgift 3*/
 
 
 var gissaTalet = prompt("Hi, I'm thinking about a number between 1 and 100, can you guess what it is?");
 var computerChoice = Math.floor( Math.random() * 101)+1;
 if (gissaTalet === computerChoice) {
     alert("Correct! Well done you.");
 }
 else if (gissaTalet > computerChoice) {
     prompt("Nope, your number " + gissaTalet + " is to high, try again Hehehe");
 }
 else if (gissaTalet < computerChoice) {
     prompt("Sorry, your number " + gissaTalet + " is to low hehehe, try again shall we?");
     
 }