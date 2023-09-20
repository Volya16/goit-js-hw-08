document.querySelector(".feedback-form");const e=document.querySelector('input[name="email"]'),t=document.querySelector('textarea[name="message"]'),a="feedback-form-state";// Save data to local storage
function n(){let n={email:e.value,message:t.value};localStorage.setItem(a,JSON.stringify(n))}e.addEventListener("input",n),t.addEventListener("input",n),// Loading data from local storage
function(){let n=localStorage.getItem(a);if(n){let a=JSON.parse(n);e.value=a.email,t.value=a.message}}();//# sourceMappingURL=03-feedback.a83a498f.js.map

//# sourceMappingURL=03-feedback.a83a498f.js.map
