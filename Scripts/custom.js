$(document).ready(function() {

    setInterval(
        function() {
            $('#sailboat').animate({
                'margin-left': '82%'
            }, 60000);
            $('#sailboat').animate({
                'margin-left': '0%'
            }, 50000);
        }, 2000);

});


/* Labb 4 */


/* console.log("Hello world");
window.alert("Hello world");

alert("rad 1" + "\n" + "rad 2"); */

/* Uppgift 2*/

function calcMedeltal(m) {
    var tal1 = 2;
    var tal2 = 4;
    var tal3 = 6;
    var tal4 = 8;
    return m(tal1, tal2, tal3, tal4);
}

var medelTal = function(x, y, z, v) {
    return ((x + y + z + v) / 4);

};


var medel = calcMedeltal(medelTal);

console.log(medel); /* Function medeltal uppg: 2.1 */

/* Uppgift 2.1*/

var printArg = function(a, b, c) {
    return a + "," + b + "," + c;
};
console.log(printArg("Josse", "is", "awesome"));

/* Uppgift 3*/


var Loop = true;
var count = 1; /*räknar hur många gånger användaren gissar*/
var gameover = 5; /*sätter ett max antal gånger användaren får gissa*/
function Game() {
    var gissaTalet = +prompt("Hi, I'm thinking about a number between 1 and 100, can you guess what it is?"); /*Deklarerar gissaTalet som siffrar användaren svarar*/
    var computerChoice = Math.floor(Math.random() * 101) + 1; /* variabeln computerChoice slumpar ett tal mellan 1 -100*/
    while (Loop) {
        if (count > gameover) { /* går in i denna if satsen när count är större än gameover*/
            alert("That's game over for you mohahaha.");
            Loop = false;
        }

        else if (gissaTalet === computerChoice) {
            alert("Arrgh! I can't believe you guessed right! Well done you. Though you needed " + count + " guesses..");
            Loop = false;
        }
        else if (gissaTalet > computerChoice) {
            gissaTalet = +prompt("Nope, your number " + gissaTalet + " is to high, try again Hehehe");
        }
        else if (gissaTalet < computerChoice) {
            gissaTalet = +prompt("Sorry, your number " + gissaTalet + " is to low hehehe, try again shall we?");
        }
        else {
            alert("Your input was not a number");
            Loop = false;
        }
        console.log("Talet som ska gissas är =" + computerChoice);
        count = count + 1;
        console.log(count);
    }
}

//Game();


/* Uppgift 4*/

/* Fahrenheit*/



function Fahrenheit(f) {

    var resultC = (f - 32) * 5 / 9;
    alert(f + " degrees fahrenheit equals " + resultC + " degrees celsius.");
}

/* Celsius */




function Celsius(c) {

    var resultF = c * 9 / 5 + 32;
    alert(c + " degrees celsius equals " + resultF + " degrees fahrenheit");
}



/* Menyn*/

var menu;
var loopMenu = true;

function meny() {

    while (loopMenu) {
        menu = +prompt("0. Exit" + "\n" + "1. Fahrenheit to Celsius" + "\n" + "2. Celsius to Farhenheit" + "\n" + "3. Guess number");
        switch (menu) {
            case 0:
                loopMenu = false;
                break;
            case 1:
                var tempF = +prompt("Convert Fahrenheit to Celsius");
                Fahrenheit(tempF);
                break;
            case 2:
                var tempC = +prompt("Convert Celsius to Fahrenheit");
                Celsius(tempC);
                break;
            case 3:
                Game();
                break;
            default:

        }
    }
}

meny();

/* Uppgift 5 Strings*/



function convertString(s) {
    var convert = "";
    for (var i = 0; i < s.length; i++) {
        if (s[i].toUpperCase() === "A") {
            convert += "#";
        }
        else if (s[i] === s[i].toUpperCase()) {
            convert += s[i].toLowerCase()
        }
        else if (s[i] === s[i].toLowerCase()) {
            convert += s[i].toUpperCase()
        }
    
    
    }
    console.log("input texten är " +s);
    console.log("output texten är " + convert);
}


convertString("jag adoRE JoSSe");


/* Uppgift 6 Math */



function triangle(){
    var a = +prompt("Ange längden på kateter 1:");
    var aU = Math.pow(a,2);
    var b = +prompt("Ange längden på kateter 2:")
    var bU = Math.pow(b,2);
    var cU = aU + bU;
    var c = Math.sqrt(cU);
    console.log(c);
}

triangle();