"use strict"

const btnTry = document.querySelector(".content__apply__btn");
const btnForm = document.querySelector(".content__apply__form__btn");
const form = document.querySelector(".content__apply__form");
const inputElements = document.querySelectorAll(".content__apply__form__input");
const [fName, lName, email, password] = inputElements;

const checkForErrors = function () {
    let errors = [];
    if (fName.value === "") errors.push([fName, "fName", "svgfName"]);
    if (lName.value === "") errors.push([lName, "lName", "svglName"]);
    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) errors.push([email, "email", "svgEmail"]);
    if (password.value === "") errors.push([password, "password", "svgPassword"]);
    return errors;
};

//focus on form
btnTry.addEventListener("click", (e) => {
    e.preventDefault();
    fName.focus();
});


btnForm.addEventListener("click", (e) => {
    e.preventDefault();
    let errors = checkForErrors();
    if (errors.length === 0) {
        form.submit();
    } else {
        console.log(errors);
        errors.forEach(el => {
            el[0].classList.add("content__apply__form__input__error");
            document.getElementById(el[1]).classList.remove("hidden");
            document.getElementById(el[2]).classList.remove("hidden");
        });
    };
});


inputElements.forEach(el => {
    el.addEventListener("focus", () => {
        inputElements.forEach(el => el.classList.remove("content__apply__form__input__error"));
        document.querySelectorAll("label").forEach(el => el.classList.add("hidden"));
        document.querySelectorAll("svg").forEach(el => el.classList.add("hidden"));
    })
})
