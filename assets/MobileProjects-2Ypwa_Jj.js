import{r as a,j as e,L as h,P as f}from"./index-AOl9cM8Q.js";import{R as p,S as j,a as v}from"./ResImg-KZXO9dPx.js";import{u as N}from"./useOnScreen-nh4R9GKt.js";const u=({project:s})=>{const t=a.useRef(null),[l,m]=a.useState(!1),c=N(t),[n,d]=a.useState(!1);a.useEffect(()=>{c&&!n&&d(!0)},[c]);const r=i=>i.id==="mpi-item-id"?!1:i.tagName==="A"?!0:r(i.parentElement),o=i=>{r(i.target)||m(!l)};return e.jsxs("div",{ref:t,children:[!n&&e.jsx("div",{className:"h-[31.8rem] w-full mt-12"}),n&&e.jsxs("div",{id:"mpi-item-id",onClick:o,className:`mpi-container ${l?"pcp-item-active":""}`,children:[e.jsx("div",{className:"pi-pic first-pi-pic",children:e.jsx(p,{outClassName:"pi-pic-img",posClassName:"w-[100%] h-[100%] object-contain",bigSrc:s.img,smallSrc:s.smallImg})}),e.jsxs("div",{className:"px-3",children:[e.jsxs("div",{className:"flex justify-between items-end",children:[e.jsxs("div",{className:"start-container",children:[e.jsx("div",{className:"bold-content-text mr-2",children:s.name}),e.jsx("div",{className:"bold-content-text",children:s.type})]}),e.jsx("div",{className:"primary-light-text",children:s.date})]}),e.jsx("div",{className:"primary-light-text mt-2",children:s.shortDescription}),e.jsx("div",{className:"start-container gap-2 mt-2",children:s.keyWords.map(i=>e.jsx("div",{className:"light-text",children:`#${i}`},i))}),e.jsxs("div",{className:"flex justify-between items-end my-4",children:[e.jsxs(h,{to:s.link,target:"_blank",rel:"",className:"flex items-center gap-2",children:[e.jsx("img",{src:s.iconUrl,alt:"threads",className:"w-6 h-6 object-contain object-left item-represent-icon"}),e.jsx("div",{className:"primary-light-text",children:s.live}),e.jsx("div",{className:"visit-container",children:e.jsx(j,{})})]}),e.jsx("div",{className:"fold-container",children:e.jsx(v,{})})]}),e.jsx("div",{className:"mpi-fold-content",children:s.points.map((i,x)=>e.jsx("p",{className:"relative project-point my-4 indent-4 light-text",children:i},x))})]})]})]})},S=()=>e.jsx("section",{className:"page-content w-full min-h-[calc(100vh-9rem)] p-16 px-8 flex flex-col justify-start",children:f.map((s,t)=>e.jsx(u,{project:s},t))});export{S as default};
