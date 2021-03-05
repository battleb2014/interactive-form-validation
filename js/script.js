const colorSelect = document.querySelector('#color');
const colorChildren = colorSelect.children;
const colorLabel = document.querySelector('.color-label');
const shirtDesign = document.querySelector('#design');
const jobSelect = document.querySelector('#title');
const otherJobInput = document.querySelector('.other-job-role');
const activityList = document.querySelector('#activities');
const activity = activityList.querySelectorAll('input');
const hint = document.querySelector('#activities-hint');
const printTotal = document.querySelector('#activities-cost');
let total = 0;
const paymentMethod = document.querySelector('#payment');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
const creditCard = document.querySelector('#credit-card');
const creditCardOption = paymentMethod.querySelector('option[value = "credit-card"]');
const form = document.querySelector('form');
const applicantName = document.querySelector('#name');
const creditCardInput = document.querySelector('#cc-num');
const expYearInput = document.querySelector('#exp-year');
const expMonthInput = document.querySelector('#exp-month');
const zipInput = document.querySelector('#zip');
const cvvInput = document.querySelector('#cvv');


//Start with focus on name input
applicantName.focus();

//Hide color options until design is chosen
colorSelect.disabled = true;

//Hide PayPal and Bitcoin sections
paypal.hidden = true;
bitcoin.hidden = true;

//Hides other jobs input
otherJobInput.hidden = true;

//Credit card selected as default
creditCardOption.selected = true;

jobSelect.addEventListener('click', (e) => {
    if (e.target.value === 'other') {
        otherJobInput.hidden = false;
    } else {
        otherJobInput.hidden = true;
    }
})

//Show color options on change
shirtDesign.addEventListener('change', (e) => {
    colorSelect.disabled = false;

    if (e.target.value === 'js puns') {
        for (let i = 0; i < colorSelect.length; i++) {
            colorChildren[0].style.display = 'none';
            if (colorChildren[i].dataset.theme === 'js puns') {
                colorChildren[i].style.display = 'block';
            } else if (colorChildren[i].dataset.theme === 'heart js') {
                colorChildren[i].style.display = 'none';
            }
        }
    } else if (e.target.value === 'heart js') {
        for (let i = 0; i < colorSelect.length; i++) {
            colorChildren[0].style.display = 'none';
            if (colorChildren[i].dataset.theme === 'heart js') {
                colorChildren[i].style.display = 'block';
            } else if (colorChildren[i].dataset.theme === 'js puns') {
                colorChildren[i].style.display = 'none';
            }
        }
    }
});

//Add selected activity cost and print total to page
activityList.addEventListener('click', e => {
    const cost = +e.target.getAttribute('data-cost');
    if (e.target.checked) {
        total += cost;
    } else {
        total -= cost;
    }
    printTotal.textContent = `Total: $${total}`;
});

//Payment selection
paymentMethod.addEventListener('change', e => {
    if (e.target.value === 'paypal') {
        paypal.hidden = false;
        bitcoin.hidden = true;
        creditCard.hidden = true;
    } else if (e.target.value === 'bitcoin') {
        bitcoin.hidden = false;
        paypal.hidden = true;
        creditCard.hidden = true;
    } else if (e.target.value === 'credit-card') {
        creditCard.hidden = false;
        bitcoin.hidden = true;
        paypal.hidden = true;
    }
});

//Form validation
function validateName() {
    const nameValue = applicantName.value;
    const testName = /\w+/.test(nameValue);

    return testName;
}

function validateEmail() {
    const email = document.querySelector('#email');
    const emailValue = email.value;
    const testEmail = /^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/.test(emailValue);

    return testEmail;
}

function validateActivities() {
    const testActivities = total > 0;

    return testActivities;
}

function validateCreditCard() {
    const creditCardValue = parseInt(creditCardInput.value);
    const testCreditCard = /^\d{13,16}$/.test(creditCardValue);

    return testCreditCard;
}

function validateZip() {
    const zipValue = parseInt(zipInput.value);
    const testZip = /^\d{5}$/.test(zipValue);

    return testZip;
}

function validateCvv() {
    const cvvValue = parseInt(cvvInput.value);
    const testCvv = /^\d{3}$/.test(cvvValue);

    return testCvv;
}

function validationCheck(isValid, elem) {
    if (isValid) {
        console.log(`pass`);
        elem.parentElement.className = 'valid';
        elem.parentElement.lastElementChild.style.display = 'none';
    } else {
        console.log(`fail`);
        elem.parentElement.className = 'not-valid';
        elem.parentElement.lastElementChild.style.display = 'inline';
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    validationCheck(validateName(), applicantName);
    validationCheck(validateEmail(), email);

    if (creditCardOption.selected === true) {
        validationCheck(validateCreditCard(), creditCardInput);
        validationCheck(validateZip(), zipInput);
        validationCheck(validateCvv(), cvvInput);
    }

    if (validateActivities()) {
        activityList.classList.remove('not-valid');
        activityList.classList.add('valid');
        activityList.lastElementChild.style.display = "none";
    }
    else {
        e.preventDefault();
        activityList.classList.add('not-valid');
        activityList.classList.remove('valid');
        activityList.lastElementChild.style.display = "inline";
    }
});
