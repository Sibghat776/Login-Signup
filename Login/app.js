let users = JSON.parse(localStorage.getItem("users")) || [];

let loginBtn = document.querySelector("button")
let myPassword = document.querySelector("#password")
let userName = document.querySelector("#userName")
let myEmail = document.querySelector("#email")

console.log(users)

loginBtn.addEventListener("click", () => {
    const user = users.find((user) => {
        if (user.email === myEmail.value && user.password == myPassword.value) return true
    })
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user))
        alert("Log In successfully")

        setTimeout(() => {
            window.location.href = '../Profile/index.html'
        }, 2000);
        myEmail.value = ""
        myPassword.value = ""
        userName.value = ""
    } else {
        alert("Invalid Credentials")

    }
})