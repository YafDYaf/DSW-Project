// THIS IS FOR LOGIN & REGISTRATION ONLY

// Run the function once the document is ready to be worked with
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    // Run this function when you click  CreateAccountLink 
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        // This will add a classlist named "form--hidden where it is set as display:none in the css"
        loginForm.classList.add("form--hidden");
        // This will remove a classlist named "form--hidden where it is set as display:none in the css"
        createAccountForm.classList.remove("form--hidden");
    })

    // Run this function when you click  linkLogin 
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        // This will remove a classlist named "form--hidden where it is set as display:none in the css"
        loginForm.classList.remove("form--hidden");
        // This will add a classlist named "form--hidden where it is set as display:none in the css"
        createAccountForm.classList.add("form--hidden");
    })
});