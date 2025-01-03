let userName = document.querySelector("#name")
let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
console.log(loggedInUser.userName)
let salam = document.querySelector(".splash-subhead")
userName.innerHTML = loggedInUser.userName
salam.innerHTML = `Assalam u alaikum Mr ! ${loggedInUser.userName}`
