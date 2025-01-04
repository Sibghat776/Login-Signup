// let myBtn = document.querySelector("button")
// let password = document.querySelector("#password")
// let confirmPassword = document.querySelector("#confirmPassword")
// let email = document.querySelector("#email")
// let userName = document.querySelector("#userName")

// console.log(password.value)
// console.log(confirmPassword.value)

// myBtn.addEventListener("click", () => {
//     if (userName.value == '' || password.value.length < 8 || password.value != confirmPassword.value || email.value == '') {
//         alert("Please fill all fields correctly!");
//     } else {
//         let users = JSON.parse(localStorage.getItem("users")) || [];
//         let user = {
//             userName: userName.value,
//             password: password.value,
//             email: email.value,
//         };
//         users.push(user);
//         localStorage.setItem("users", JSON.stringify(users));
//         alert("User registered successfully!");
//         setTimeout(() => {
//             window.location.href = './Login/index.html'
//         }, 1000);
//         userName.value = '';
//         password.value = '';
//         email.value = '';
//         confirmPassword.value = '';
//     }
// });

let myBtn = document.querySelector("button");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let email = document.querySelector("#email");
let userName = document.querySelector("#userName");

myBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Default behavior روکنے کے لیے

    if (userName.value == '' || password.value.length < 8 || password.value != confirmPassword.value || email.value == '') {
        alert("Please fill all fields correctly!");
    } else {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = {
            userName: userName.value,
            password: password.value,
            email: email.value,
        };

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        alert("User registered successfully!");

        setTimeout(() => {
            window.location.href = './Login/index.html';
            // Uncomment the below line if the issue persists
            // window.location.reload();
        }, 1000);

        // Clear the fields
        userName.value = '';
        password.value = '';
        email.value = '';
        confirmPassword.value = '';
    }
});
