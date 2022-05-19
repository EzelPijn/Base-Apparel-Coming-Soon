/*change hover state of submit Button - DONE

display error message if email entered incorrectly

change class of email to invalid-email if email entered incorrectly

*/



//Hover Status For Submit Button//
$(".submit-btn").hover(function (){
    $(this).addClass("submit-btn-hover")
    
}, function () {
    $(this).removeClass("submit-btn-hover")
})


//Verify Email Validity//
$(".submit-btn").click(function validateEmail(inputEmail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputEmail.value.match(mailformat)) {
        alert("Valid email address!");
        return true;
    } else {
        (".email").addClass("invalid-email");
        (".invalid-email-message").css("display", "contents")
    }

})