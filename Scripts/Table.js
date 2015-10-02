/* Uppgift 9 Tabell */


/* En funktion som generar en tabell från en två-dimonsioell array */
var tableSht = [
    ["Förnamn", "Efternamn", "Telefon"],
    ["Haris", "Kljaijc", 76589],
    ["Mats", "Loock", 726258],
    ["John", "Heggerud", 5436899]
];

function generateTable(tableSht) {
    var result = "<table>";
    if (i === 0) {
        result += "<thead>";
    }
    for (var i = 0; i < tableSht.length; i++) {
        if (i % 2 > 0) {
            result += "<tr BGCOLOR=00ffff>";
        }
        for (var j = 0; j < tableSht[i].length; j++) {
            console.log("i = " + i + " j = " + j + " " + tableSht[i][j]);

            if (i === 0) {

                result += "<th>";
                result += tableSht[i][j];
                result += "</th>";
            }
            else {

                result += "<td>";
                result += tableSht[i][j];
                result += "</td>";
            }

        }

        result += "</tr>";
        if (i === 0) {
            result += "</thead>";
        }

    }

    result += "</table>";
    document.write(result);
}
generateTable(tableSht);
