// set the correct username and password combination below
var correctUsername = "phantomthieves5";
var correctPassword = "ryuji";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();


    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
if(username === correctUsername && password === correctPassword){
    $('.message').text("You're in");
}
else if(username === correctUsername || password === correctPassword){
    $('.message').text("Nah");
}    
else if(username === "" || password === ""){
    $('.message').text("There's nothing here...");    


}
});