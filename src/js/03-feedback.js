import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.feedback-form input[type=email]');
const inputMess = document.querySelector('.feedback-form textarea');
const button = document.querySelector('.feedback-form button');
const throttledSave = throttle(saveFields, 500);

window.addEventListener('load', keepFields);
form.addEventListener('input', throttledSave);
button.addEventListener('click', submitFields);



function submitFields(event) {
    event.preventDefault();

    if (inputEmail.value === '' || inputMess.value === '') {
        return;
    }

    const dataToSubmit = {
        email: inputEmail.value,
        message: inputMess.value
    }

    console.log(dataToSubmit);
    inputEmail.value = '';
    inputMess.value = '';
    localStorage.removeItem("feedback-form-state");
}

function saveFields() {
    const dataObj = {
        email: inputEmail.value,
        message: inputMess.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(dataObj));
}

function keepFields() {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            inputEmail.value = parsedData.email;
            inputMess.value = parsedData.message;
        } catch (error) {
            console.log(`Error: ${error.name}, message: ${error.message}`);
        }
    }
}