import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a="feedback-form-state",o=document.querySelector(".feedback-form"),r=o.querySelector("textarea"),l=o.querySelector('input[type="email"]'),c=o.querySelector("button");o.addEventListener("input",s);c.addEventListener("click",u);m();let n={};function s(e){n={email:l.value,message:r.value},localStorage.setItem(a,JSON.stringify(n))}function m(){const e=localStorage.getItem(a);if(e)try{const t=JSON.parse(e);l.value=t.email,r.value=t.message}catch(t){console.error("Error parsing saved data:",t)}}function u(e){e.target===c&&(e.preventDefault(),console.log(localStorage.getItem(a)),localStorage.removeItem(a),l.value="",r.value="")}
//# sourceMappingURL=commonHelpers2.js.map
