/**
 * Form validation for contact form
 */

let contactForm = document.querySelector('.contact-form') as HTMLFormElement;
let contactFullname = document.querySelector('.contact-fullname') as HTMLInputElement;
let contactemail = document.querySelector('.contact-email') as HTMLInputElement;
let contactmessage = document.querySelector('.contact-message') as HTMLInputElement;
let contactSubmitBtn = document.querySelector('.contact-submit') as HTMLButtonElement;

// disabled submit btn initially
if(contactSubmitBtn) {
    contactSubmitBtn.disabled = true;
};

let contactRequiredFields:HTMLInputElement[] = [];

if(contactFullname && contactemail && contactmessage) {
    contactRequiredFields.push(contactemail, contactFullname, contactmessage);
};

if(contactRequiredFields) {
    
    contactRequiredFields.forEach(elem => {
        elem.addEventListener("input", () => {
            if(elem.value.trim() === "") {
                elem.style.border = '1px solid red';
                elem.style.outline = "none";
                elem.placeholder = "required field";
            } else {
                elem.style.border = "1px solid black";
            }
            let isNotEmpty = contactRequiredFields.every(checkForEmptyFields);
    
                if(isNotEmpty) {
                    contactSubmitBtn.disabled = false;
                } else {
                    contactSubmitBtn.disabled = true;
                };
        });
    });
};


function checkForEmptyFields(inputElem:HTMLInputElement) {
    return inputElem.value.trim() !== "";
};

/**
 * form validation for hire form
 */

let hireForm = document.querySelector('.hire-form') as HTMLFormElement;
let employer_name = document.querySelector('#employer_name') as HTMLInputElement;
let employer_email = document.querySelector('#employer_email') as HTMLInputElement;
let employer_company = document.querySelector('#employer_company') as HTMLInputElement;
let budget = document.querySelector('#budget') as HTMLSelectElement;
let timeframe = document.querySelector("#timeframe") as HTMLSelectElement;
let hireBtn = document.querySelector('.hire-submit') as HTMLButtonElement;

// disabled submit btn initially
if(hireBtn) {
    hireBtn.disabled = true;
};

let allHireRequiredFields:any[] = [];

if(allHireRequiredFields) {
    if(hireForm && employer_name && employer_email && employer_company && budget && timeframe) {
        allHireRequiredFields.push(employer_company, employer_email, employer_name, budget, timeframe);
    }
    
    allHireRequiredFields.forEach(elem => {
        elem.addEventListener("change", () => {
            let isNotEmpty = allHireRequiredFields.every(checkForEmptyFields);
                if(isNotEmpty) {
                    hireBtn.disabled = false;
                } else {
                    hireBtn.disabled = true;
                };
        });
    });
};

/**
 * Method to make ajax request to submit form on click
 */

