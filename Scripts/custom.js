$(document).ready(function() {

    setInterval(
        function() {
            $('#sailboat').animate({
                'margin-left': '80%'
            }, 5000);
            $('#sailboat').animate({
                'margin-left': '0%'
            }, 5000);
        },2000);

});







console.log("Hej Josse! from Monstret");