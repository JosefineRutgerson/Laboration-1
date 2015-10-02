$(document).ready(function() {
   var form = $("#form_validation");
   var firstName = $("#firstname");
   var firstnameInfo = $("#firstnameinfo");
   var lastName = $("#lastname");
   var lastnameInfo = $("#lastnameinfo");
   var zipCode = $("#zipcode");
   var zipcodeInfo = $("#zipcodeinfo");
   var eMail = $("#email");
   var emailInfo = $("emailinfo");
   
   
   

        
   function validateFirstname() {
       if (firstName.val().length < 5) {
           firstName.addClass("error");
           firstnameInfo.text("Your name isn't that short, make it 5 characters or more.");
           firstnameInfo.addClass("error");
           
       } else {
           firstName.removeClass("error");
           firstnameInfo.text("Write your firstname.");
           firstnameInfo.removeClass("error");
           
       }
   }
   validateFirstname();
});



