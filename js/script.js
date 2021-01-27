function nameInputFocus() {
    document.querySelector('#name').focus();
}
window.onload = nameInputFocus;

const jobSelect = document.querySelector('#title');
const selectedOption = jobSelect.options[jobSelect.selectedIndex].value;
const otherJobInput = document.querySelector('#other-job-role');

if (selectedOption != 'other') {
    otherJobInput.style.display = 'none';
} else {
    otherJobInput.style.display = 'block';
}