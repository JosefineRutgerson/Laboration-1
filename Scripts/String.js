

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


