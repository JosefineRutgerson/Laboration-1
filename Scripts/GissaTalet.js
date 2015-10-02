

/* Uppgift 3*/

/* En funktion där datorn slumpar fram ett tal och där användaren ska försöka gissa talet.*/

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

Game();


