import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LC_KEY = 'feedback-form-state';


