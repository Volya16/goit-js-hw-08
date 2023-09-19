import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');
const LC_KEY = 'feedback-form-state';

function saveFormState {
    const formData = {
        email: emailInput.value,
        message: messageTextarea.value,
    };
    localStorage.setItem(LC_KEY, JSON.stringify(formData));
}

