//Hover Status For Submit Button//
$(".submit-btn").hover(function (){
    $(this).addClass("submit-btn-hover")
    
}, function () {
    $(this).removeClass("submit-btn-hover")
})



//Verify Email Validity//
$(".submit-btn").click(function validateEmail() {
    var inputEmail = document.getElementById('userInput').value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(inputEmail);
    if (inputEmail.match(mailformat)) {
       
        $("." + "email").removeClass("invalid-email");
        $("." + "email").removeClass("error");
        $("." +"invalid-email-message").css("display", "none")
        return true;

    } else {
        $("." + "email").addClass("invalid-email");
        $("." + "email").addClass("error");
        $("." +"invalid-email-message").css("display", "contents")
    }
})