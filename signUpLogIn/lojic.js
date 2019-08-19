function openSignupBox(){
    var signupBox = document.getElementsByClassName("box-signup")[0];
    var loginBox = document.getElementsByClassName("box-login")[0];
    var triangle = document.getElementsByClassName("triangle")[0];
    triangle.style.top = "55%";
    signupBox.style.display = "block";
    loginBox.style.display = "none";
}

function openLoginBox(){
    var signupBox = document.getElementsByClassName("box-signup")[0];
    var loginBox = document.getElementsByClassName("box-login")[0];
    var triangle = document.getElementsByClassName("triangle")[0];
    triangle.style.top = "50%";
    signupBox.style.display = "none";
    loginBox.style.display = "block";
}
