import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const l="feedback-form-state",t=document.querySelector(".feedback-form"),o=t.querySelector("textarea"),r=t.querySelector('input[type="email"]');t.querySelector("button");t.addEventListener("input",c);t.addEventListener("submit",u);s();let n={};function c(e){n={email:r.value,message:o.value},localStorage.setItem(l,JSON.stringify(n))}function s(){const e=localStorage.getItem(l);if(e)try{const a=JSON.parse(e);r.value=a.email,o.value=a.message}catch(a){console.error("Error parsing saved data:",a)}}function u(e){e.preventDefault(),r.value.trim()!==""&&o.value.trim()!==""?(console.log(localStorage.getItem(l)),localStorage.clear(),r.value="",o.value=""):console.log("Обидва елементи форми мають бути заповнені")}
//# sourceMappingURL=commonHelpers2.js.map
