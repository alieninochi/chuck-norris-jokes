!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o=[];const c=document.querySelector(".favourite");function r(e){const t=e.target.parentNode.parentNode;if("heart"!==e.target.className){if(o.includes(t.innerText))return 0;o.unshift(t),function(e){const t=e.cloneNode(!0);t.classList.add("joke-modified"),c.prepend(t);const n=t.querySelector("img");n.classList.add("heart"),n.addEventListener("click",()=>{o.forEach((e,n)=>{e.innerText===t.innerText&&o.splice(n,1),t.remove()}),console.log(o)}),localStorage.setItem("joke",JSON.stringify(t.outerHTML))}(t)}else n=t,o.forEach((e,t)=>{e===n&&(o.splice(t,1),c.removeChild(c.childNodes[t]))});var n}const a=document.querySelector(".joke-container");let i;function s(e){i=document.createElement("div"),i.classList.add("joke"),a.prepend(i),function(){const e=document.createElement("button");e.classList.add("fav-btn"),i.append(e);const t=document.createElement("img");t.src="./img/heart.svg",t.alt="add to favourite",e.append(t),t.addEventListener("click",()=>t.classList.toggle("heart")),t.addEventListener("mousedown",r)}(),function(){const e=document.createElement("img");e.src="./img/static-icon.svg",e.alt="icon",e.classList.add("static-icon"),i.append(e)}(),function(e,t){const n=document.createElement("p");n.innerHTML="ID: ",n.classList.add("joke-id"),i.appendChild(n);const o=document.createElement("a");o.href=e,o.innerHTML=t,o.classList.add("id-url"),n.append(o);const c=document.createElement("img");c.src="./img/link.svg",c.alt="link",c.classList.add("link-icon"),o.append(c)}(e.url,e.id),function(e){const t=document.createElement("p");t.innerHTML=e,t.classList.add("joke-text"),i.append(t)}(e.value),function(e){let t=new Date;t.setTime(Date.parse(e)),t=Math.round((+new Date-t)/36e5);const n=document.createElement("p");n.innerHTML=`Last update: ${t} hours ago`,n.classList.add("joke-last-update"),i.append(n)}(e.updated_at),0!==e.categories.length?function(e){const t=document.createElement("div");t.innerHTML=e[0],t.classList.add("joke-category"),i.append(t)}(e.categories):null!==document.querySelector(".joke-category")&&document.querySelector(".joke-category").remove()}const d=document.querySelector("#search-form");let l;function u(e){"category"===e.target.id&&e.target.checked?(fetch("https://api.chucknorris.io/jokes/categories").then(e=>e.json()).then(e=>{e.forEach(e=>{!function(e){const t=document.createElement("label");t.setAttribute("for",e),t.innerHTML=e,t.classList.add("category-btn"),l.append(t);const n=document.createElement("input");n.setAttribute("name","category"),n.type="radio",n.id=e,n.classList.add("category-input"),l.append(n),document.querySelectorAll(".category-input").forEach((function(e){e.addEventListener("click",(function(){document.querySelectorAll(".category-btn").forEach((function(e){e.style.backgroundColor="#fff",e.style.color="#ababab"})),document.querySelector("label[for='"+this.id+"']").style.backgroundColor="#f8f8f8",document.querySelector("label[for='"+this.id+"']").style.color="#333333"}))}))}(e)})}),l=document.createElement("div"),l.classList.add("categories"),document.querySelector(".search-form").append(l),document.querySelector("label[for='category']").after(l)):l.remove()}const f=document.querySelector("#get-joke"),m=document.querySelector("#random"),p=document.querySelector("#category"),h=document.querySelector("#search");m.addEventListener("click",u),p.addEventListener("click",u),h.addEventListener("click",u),f.addEventListener("click",(function(){switch(!0){case m.checked:fetch("https://api.chucknorris.io/jokes/random").then(e=>e.json()).then(e=>{for(s(e);a.childElementCount>1;)a.lastChild.remove()});break;case p.checked:!function(){const e=Array.from(document.querySelectorAll(".category-input")).find(e=>e.checked);fetch("https://api.chucknorris.io/jokes/random?category="+e.id).then(e=>e.json()).then(e=>{for(s(e);a.childElementCount>1;)a.lastChild.remove()})}();break;case h.checked:fetch("https://api.chucknorris.io/jokes/search?query="+d.value).then(e=>e.json()).then(e=>{const t=e.result,n=e.total;for(t.forEach(e=>s(e));a.childElementCount>n;)a.lastChild.remove()})}})),function(){let e=localStorage.getItem("favJoke");e=JSON.parse(e),c.innerHTML+=e}()}]);