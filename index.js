import{a as m,S as d,i as f}from"./assets/vendor-C4-ZuMk8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="46874564-1fa0db17c252f120a5e59742f",h="https://pixabay.com/api/";async function C(o,s=1){try{return(await m.get(h,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:12}})).data}catch(e){throw console.error("Error fetching images:",e),e}}let i;function g(o){const s=document.querySelector(".gallery");s.innerHTML=o.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      data-likes = "${e.likes}"
      data-views = "${e.views}"
      data-comments = "${e.comments}"
      data-downloads = "${e.downloads}"
      alt="${e.tags}"
    />
  </a>
  <ul class="stats">
  <li class="stats-item">
  <p  class="stats-item-header">Likes</p>
  <p class="stats-item-value">${e.likes}</p>
  </li>
    <li class="stats-item">
  <p  class="stats-item-header">Views</p>
  <p class="stats-item-value">${e.views}</p>
  </li>
    <li class="stats-item">
  <p class="stats-item-header">Comments</p>
  <p class="stats-item-value">${e.comments}</p>
  </li>
    <li class="stats-item">
  <p  class="stats-item-header">Downloads</p>
  <p class="stats-item-value">${e.downloads}</p>
  </li>
  </ul>
</li>
`).join(""),i?i.refresh():i=new d(".gallery a")}function y(){document.querySelector(".gallery").innerHTML=""}const L="#ef4040",w="#4caf50",v=3e3,S="topRight",O={error:new URL("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89915%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89915%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80621C16.3037%206.76847%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76847%2016.7874%206.80621C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12151%2017.1938%207.21262C17.2315%207.30373%2017.2509%207.40138%2017.2509%207.5C17.2509%207.59861%2017.2315%207.69626%2017.1938%207.78737C17.156%207.87848%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30366%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/svg%3e",import.meta.url).href,fail:new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M31.708%2025.708c-0-0-0-0-0-0l-9.708-9.708%209.708-9.708c0-0%200-0%200-0%200.105-0.105%200.18-0.227%200.229-0.357%200.133-0.356%200.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13%200.048-0.252%200.124-0.357%200.228%200%200-0%200-0%200l-9.708%209.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057%200.229l-4.586%204.586c-0.286%200.286-0.361%200.702-0.229%201.057%200.049%200.13%200.124%200.252%200.229%200.357%200%200%200%200%200%200l9.708%209.708-9.708%209.708c-0%200-0%200-0%200-0.104%200.105-0.18%200.227-0.229%200.357-0.133%200.355-0.057%200.771%200.229%201.057l4.586%204.586c0.286%200.286%200.702%200.361%201.057%200.229%200.13-0.049%200.252-0.124%200.357-0.229%200-0%200-0%200-0l9.708-9.708%209.708%209.708c0%200%200%200%200%200%200.105%200.105%200.227%200.18%200.357%200.229%200.356%200.133%200.771%200.057%201.057-0.229l4.586-4.586c0.286-0.286%200.362-0.702%200.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z'%20fill='white'%20/%3e%3c/svg%3e",import.meta.url).href,success:new URL("../img/success-icon.svg",import.meta.url).href};function a(o,s,e=""){const l=o==="success"?w:L;f.show({title:e,titleColor:"white",message:s,timeout:v,iconColor:"white",messageColor:"white",position:S,close:!1,iconUrl:O[o],backgroundColor:l})}const u=document.querySelector(".form-container"),R=u.querySelector('input[name="query"]'),n=document.querySelector(".downloader");let $=1;u.addEventListener("submit",async o=>{o.preventDefault();const s=R.value.trim();if(!s){a("error","Please enter a search term!","Error");return}y(),n.style.display="block";try{const e=await C(s,$);n.style.display="none",e.hits.length===0?a("fail","Sorry, there are no images matching your search query.","No Results"):(g(e.hits),a("success","Images loaded successfully!","Success"))}catch{n.style.display="none",a("error","Failed to fetch images.","Error")}});
//# sourceMappingURL=index.js.map
