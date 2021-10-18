/**
 * Form validation for contact form
 */

let contactForm = document.querySelector('.contact-form') as HTMLFormElement;
let contactFullname = document.querySelector('.contact-fullname') as HTMLInputElement;
let contactemail = document.querySelector('.contact-email') as HTMLInputElement;
let contactmessage = document.querySelector('.contact-message') as HTMLInputElement;
let contactSubmitBtn = document.querySelector('.contact-submit') as HTMLButtonElement;
let inputClip = document.querySelector('.input-clip') as HTMLDivElement;

// disabled submit btn initially
contactSubmitBtn.disabled = true;

// console.log(contactFullname.value.trim())
let contactRequiredFields:HTMLInputElement[] = [];

contactRequiredFields.push(contactemail, contactFullname, contactmessage);

contactRequiredFields.forEach(elem => {
    elem.addEventListener("input", () => {
        if(elem.value.trim() === "") {
            elem.style.border = '1px solid red';
            elem.style.outline = "none";
        } else {
            elem.style.border = "1px solid black";
        }
        let isNotEmpty = contactRequiredFields.every(checkForEmptyFields);

            if(isNotEmpty) {
                contactSubmitBtn.disabled = false;
            } else {
                contactSubmitBtn.disabled = true;
            }
    })
})

function checkForEmptyFields(inputElem:HTMLInputElement) {
    return inputElem.value.trim() !== "";
};