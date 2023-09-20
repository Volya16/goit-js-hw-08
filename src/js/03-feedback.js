// import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');
const LC_KEY = 'feedback-form-state';

// Save data to local storage
function saveFormState() {
    const formData = {
        email: emailInput.value,
        message: messageTextarea.value,
    };
    localStorage.setItem(LC_KEY, JSON.stringify(formData));
}

// Loading data from local storage
function loadFormState() {
    const savedFormData = localStorage.getItem(LC_KEY);
    if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        emailInput.value = formData.email;
        messageTextarea.value = formData.message;
    }
};

emailInput.addEventListener('input', saveFormState);
messageTextarea.addEventListener('input', saveFormState);

loadFormState();
