$(document).ready(function() {

    setInterval(
        function() {
            $('#flipSail').animate({
                'margin-left': '82%'
            }, 60000);
            $('#flipSail').animate({
                'margin-left': '0%'
            }, 50000);
        }, 2000);

});


