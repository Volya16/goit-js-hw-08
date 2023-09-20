!function(){document.querySelector(".feedback-form");var e=document.querySelector('input[name="email"]'),a=document.querySelector('textarea[name="message"]'),t="feedback-form-state";// Save data to local storage
function n(){var n={email:e.value,message:a.value};localStorage.setItem(t,JSON.stringify(n))}e.addEventListener("input",n),a.addEventListener("input",n),// Loading data from local storage
function(){var n=localStorage.getItem(t);if(n){var r=JSON.parse(n);e.value=r.email,a.value=r.message}}()}();//# sourceMappingURL=03-feedback.0ab65cdc.js.map

//# sourceMappingURL=03-feedback.0ab65cdc.js.map
