


/* Uppgift 6 Math */



function triangle(){
    var a = +prompt("Ange längden på kateter 1:");
    var aU = Math.pow(a,2);
    var b = +prompt("Ange längden på kateter 2:")
    var bU = Math.pow(b,2);
    var cU = aU + bU;
    var c = Math.round(Math.sqrt(cU));
    console.log(c);
}

triangle();


