const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  container.style.setProperty("min-height", "950px");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

function setError(index) {
    const parent = campos[index].parentNode;
    parent.style.border = '2px solid #DC143C';
    spans[index].style.display = 'block'
}

function removeError(index) {
    const parent = campos[index].parentNode;
    parent.style.border = '';
    spans[index].style.display = 'none'
}

function usernameValidation(){
    if(campos[0].value.length < 3){
        setError(0);
    } else {
        removeError(0);
    }
}

function emailValidation() {
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    } else {
        removeError(1)
    }
}

function passwordValidation() {
    if(campos[2].value.length < 8){
        setError(2)
    } else {
        removeError(2)
    }
}