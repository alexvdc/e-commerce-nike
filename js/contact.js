const btnSubmit = document.querySelector("#submit");
const merci = document.querySelector(".merci");
const form = document.querySelector("form");
const lastname = document.querySelector("#lastname")
const firstname = document.querySelector("#firstname")
const mail = document.querySelector("#mail")
const message = document.querySelector("#message")

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm();
})


function validateForm() {
    if (lastname.value.length < 1 ) {
        lastname.classList.add("error")
    } else {
        lastname.classList.remove("error")
    }
    
    if (mail) {
        mail.classList.add("error")
    } else {
        mail.classList.remove("error")
    }
    if (message.value.length < 1 ) {
        message.classList.add("error")
    } else {
        message.classList.remove("error")
    }

    form.style.display = "none";
    merci.style.display = "flex";
}


