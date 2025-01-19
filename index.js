import{i as l,S as d}from"./assets/vendor-BPdYXKAK.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();window.global||(window.global=window);const p=document.getElementById("input"),u=document.getElementById("submitButton"),n=document.querySelector(".lists"),c=new URLSearchParams({key:"48294638-370103394c700755fbc6c4620",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"60"});u.addEventListener("click",a=>{n.innerHTML='<span class="loader"></span>',a.preventDefault,c.set("q",p.value),fetch(`https://pixabay.com/api/?${c}`).then(s=>s.json()).then(s=>{s.total==0&&l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const i=s.hits.map(t=>`<li class="list">
       <div class="cards">
       <a class="link" href= "${t.largeImageURL}">
       <img
        class="image"
        src="${t.webformatURL}"
        data-source="${t.largeImageURL}"
        alt="${t.tags}"
      />
       </a>
       <div class="info">
       <p>Likes <span>${t.likes}</span></p>
       <p>Views <span>${t.views}</span></p>
       <p>Comments <span>${t.comments}</span></p>
       <p>Downloads <span>${t.downloads}</span></p>
       </div>
       </div>
       </li>`).join("");n.innerHTML="",n.insertAdjacentHTML("afterbegin",i),n.addEventListener("click",t=>{t.preventDefault(),t.target.tagName}),new d(".cards a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(s=>console.log(s))});n.addEventListener("click",a=>{a.preventDefault(),a.target.tagName});
//# sourceMappingURL=index.js.map
