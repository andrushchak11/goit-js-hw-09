import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let o={email:"",message:""};const a=document.querySelector(".feedback-form"),m=()=>{try{if(localStorage.length===0)return;const e=JSON.parse(localStorage.getItem("feedback-form-data"));o=e;for(const t in e)a.elements[t].value=e[t]}catch(e){console.log(e)}};m();const n=e=>{const{target:t}=e,r=t.value,l=t.name;o[l]=r,localStorage.setItem("feedback-form-data",JSON.stringify(o))},c=e=>{e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-data")};a.addEventListener("change",n);a.addEventListener("submit",c);
//# sourceMappingURL=2-gallery.js.map
