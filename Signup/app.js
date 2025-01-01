let myBtn = document.querySelector("#submit")
let password = document.querySelector("#password")
let email = document.querySelector("#email")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")

myBtn.addEventListener("click", () => {
    if (password.value.length < 8) {
        alert("Your Password Should have 8 characters!!!")
    } else {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = {
            password: password.value,
            firstName: firstName.value,
            email: email.value,
            lastName: lastName.value
        }
        users.push(user)
        console.log("Me chala")
        localStorage.setItem("users", JSON.stringify(users))
    }
})
