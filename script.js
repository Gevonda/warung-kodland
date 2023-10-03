const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

function auth(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email== "admin@gmail.com" && password=="admin123"){
        window.location.assign("name.html");
        alert("login succesfully");
    }
    else{
        alert("invalid information");
        return;
    }
}