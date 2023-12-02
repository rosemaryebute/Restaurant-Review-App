/*document.addEventListener("DOMContentLoaded", () => {
    const LoginForm = document.querySelector("#login");
    const CreateAccountForm = document.querySelector("#CreateAccount");
    
    document.querySelector("#linkCreateAccount") .addEventListener("#click", e => {e.preventDefault();
        loginForm.classList.add("form_hidden");
        createAccountForm.classList.remove("form_hidden");
    });
    document.querySelector("#linkLogin") .addEventListener("#click", e => {e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden");
    });
});