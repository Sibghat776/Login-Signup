let myBtn = document.querySelector("#submit")
let password = document.querySelector("#password")
let email = document.querySelector("#email")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")


myBtn.addEventListener("click", () => {
    
let users = [{
    password: password.value,
    firstName: firstName.value,
    email: email.value,
    lastName: lastName.value
}]
    console.log("Me chala")
    localStorage.setItem("users" , JSON.stringify(users))
})