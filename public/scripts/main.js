"use strict";
/**
 * Form validation for contact form
 */
let contactForm = document.querySelector('.contact-form');
let contactFullname = document.querySelector('.contact-fullname');
let contactemail = document.querySelector('.contact-email');
let contactmessage = document.querySelector('.contact-message');
let contactSubmitBtn = document.querySelector('.contact-submit');
let inputClip = document.querySelector('.input-clip');
// disabled submit btn initially
contactSubmitBtn.disabled = true;
// console.log(contactFullname.value.trim())
let contactRequiredFields = [];
contactRequiredFields.push(contactemail, contactFullname, contactmessage);
contactRequiredFields.forEach(elem => {
    elem.addEventListener("input", () => {
        if (elem.value.trim() === "") {
            elem.style.border = '1px solid red';
            elem.style.outline = "none";
        }
        else {
            elem.style.border = "1px solid black";
        }
        let isNotEmpty = contactRequiredFields.every(checkForEmptyFields);
        if (isNotEmpty) {
            contactSubmitBtn.disabled = false;
        }
        else {
            contactSubmitBtn.disabled = true;
        }
    });
});
function checkForEmptyFields(inputElem) {
    return inputElem.value.trim() !== "";
}
;
