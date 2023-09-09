const title = document.getElementById('title');
const namefield = document.getElementById('namefield');
const loginbtn = document.getElementById('loginbtn');
const signupbtn = document.getElementById('signupbtn');
const account = document.getElementById('account');
const password = document.getElementById('password');

signupbtn.onclick = function(){
    title.innerHTML = "Create account"
    namefield.style.display = "block";
    account.style.display = "none";
    signupbtn.style.display = "none";
    password.style.display = "none";
    
}

loginbtn.onclick = function(){
    title.innerHTML = "Login"
    namefield.style.display = "none";
    account.style.display = "block";
    signupbtn.style.display = "inline";
    password.style.display =  "block";
}