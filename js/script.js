//Start with focus on name input
document.querySelector('#name').focus();

//Displays other jobs input on other selection
const jobSelect = document.querySelector('#title');
const otherJobInput = document.querySelector('.other-job-role');
otherJobInput.style.display = 'none';

jobSelect.addEventListener('click', (e) => {
    if (e.target.value === 'other') {
        otherJobInput.style.display = '';
    } else {
        otherJobInput.style.display = 'none';
    }
})

// Pro Tip:
// The selected attribute can determine which option element is displayed in the select field.
// The hidden attribute can prevent option elements from being displayed in the drop down menu.

// 1. Hide color options until design is chosen
const colorSelect = document.querySelector('#color');
const colorLabel = document.querySelector('.color-label');


const shirtDesign = document.querySelector('#design');
const shirtColor = document.querySelector('#shirt-colors');
colorSelect.disabled = true;


//Design <select>
//2. Show color options on change
shirtDesign.addEventListener('change', (e) => {
    colorSelect.disabled = false;
    for (let i = 0; i < colorSelect.length; i++) {
        const theme = colorSelect.children[i].getAttribute('data-theme');
        console.log(theme);
        if (theme === 'js puns') {
            colorSelect.children[i].hidden = false;
            colorSelect.children[i].selected = true;
        } else if (theme === 'heart js') {
            colorSelect.children[i].hidden = true;
            colorSelect.children[i].selected = false;
        }
    }
});

//3.If('Theme-JS Puns') Color menu = "Cornflower Blue," "Dark Slate Grey," and "Gold."
    //If('Theme-I heart JS) Color menu = "Tomato," "Steel Blue," and "Dim Grey."
