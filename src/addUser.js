const inputUser = document.querySelector('#inputDetails');
const user = document.querySelector('#regNo');
const passw = document.querySelector('#pass');
var regLocal = localStorage.getItem("registration");
var passLocal = localStorage.getItem("password");
var classesLocal = localStorage.getItem("classes");
var addUserButton = document.getElementById("addUserBtn");
var cancelUser = document.getElementById("cancelUser");
var submitUser = document.getElementById("submitUser");


// Show Input Fields When Add User Button is Clicked
addUserButton.addEventListener("click", function () {
    inputUser.classList.remove("hidden");
});
  
// Hide Input Fields When Cancel Button is Clicked
cancelUser.addEventListener("click", function () {
    inputUser.classList.add("hidden");
    user.value = "";
    passw.value = "";
});

submitUser.addEventListener("click", function () {
    if (user.value && passw.value) {
        localStorage.setItem("registration", user.value);
        localStorage.setItem("password",passw.value);
        // chrome.storage.sync.set({registration: user.value})
        // chrome.storage.sync.set({password:passw.value})
        getClasses(user.value,passw.value);
        inputUser.classList.add("hidden");
        user.value = "";
        passw.value = "";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    classesLocal = JSON.parse(classesLocal);
    if (classesLocal) {
        classesLocal.forEach(element => {
            getData(element)
        });
    }
});

