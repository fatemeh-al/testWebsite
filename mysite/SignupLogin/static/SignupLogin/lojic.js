// $(document).ready(function () {
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

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


function addUser(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    var csrfToken = getCookie('csrftoken');

    if(password != confirmPassword)
        alert("passwords not the same");
    else if(!username || !email || !password || !confirmPassword)
        alert("fill all input boxes");

    request = new XMLHttpRequest();
    request.open('POST','http://127.0.0.1:8000/SignupLogin/');
    request.setRequestHeader('Content-Type','application/json');
    request.setRequestHeader("X-CSRFToken", csrfToken);
    request.send(JSON.stringify({
    username:username,
    email:email,
    password:password,
    }));

    request.addEventListener("loadend",function(event){
        console.log('loaded');
        console.log(request.status);
        document.getElementsByTagName('html')[0].innerHTML = request.response;
    });


}
// })