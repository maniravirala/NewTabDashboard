const inputUser = document.querySelector('#inputDetails');
const user = document.querySelector('#regNo');
const pass = document.querySelector('#pass');
var userInput = user.value.trim();
var passInput = pass.value.trim();
var regLocal = localStorage.getItem("registration");
var passLocal = localStorage.getItem("password");
var addUserButton = document.getElementById("addUserBtn");
var cancelButton = document.getElementById("cancelUser");
var submitButton = document.getElementById("submitUser");


// Show Input Fields When Add User Button is Clicked
addUserButton.addEventListener("click", function () {
    inputUser.classList.remove("hidden");
});
  
// Hide Input Fields When Cancel Button is Clicked
cancelButton.addEventListener("click", function () {
    inputUser.classList.add("hidden");
    user.value = "";
    pass.value = "";
});

submitButton.addEventListener("click", function () {
    if (userInput && passInput) {
        localStorage.setItem("registration", userInput);
        localStorage.setItem("password",passInput);
        getClasses(userInput,passInput);
        inputUser.classList.add("hidden");
        user.value = "";
        pass.value = "";
    }
});
    
document.addEventListener("DOMContentLoaded", function () {
    if (regLocal && passLocal) {
        getClasses(regLocal,passLocal);
    }
});