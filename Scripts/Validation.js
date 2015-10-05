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
   
      $('input').change(function() {
		if(this.id == 'firstname' || this.id == 'lastname') {
			this.style.borderColor = this.value.match(/.+/) ? '#00FF00' : '#FF0000';
		} else if(this.id == 'zipcode') {
			this.style.borderColor = this.value.match(/^[0-9]{5}$/) ? '#00FF00' : '#FF0000';
		} else if(this.id == 'email') {
			this.style.borderColor = this.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) ? '#00FF00' : '#FF0000';
		}
	});
   

        
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



