


/* Uppgift 7 Tentamarodören */


console.log("Uppgift 7 Tentamarodören");

    
var arrayT = [10,2,89,9,65,13,3];

function tentamen(arrayT){
    var sum = arrayT.reduce(function(a,b) { return a+b;});
    var resultatM = Math.round(sum/arrayT.length);
    
    arrayT = arrayT.sort(function(a,z) { return a-z;});
    var max = arrayT[arrayT.length-1];
    var min = arrayT[0];
    var arraySvar = [resultatM, max, min];
    console.log(arrayT);
    console.log(arraySvar);
    
}

tentamen(arrayT);




