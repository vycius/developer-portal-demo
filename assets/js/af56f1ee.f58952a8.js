"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6969],{52991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(67294),s=r(86010),i=r(53438),a=r(39960),o=r(13919),c=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,s.Z)("card padding--lg",l.cardContainer)},r)}function m(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",l.cardTitle),title:i},r," ",i),a&&n.createElement("p",{className:(0,s.Z)("text--truncate",l.cardDescription),title:a},a))}function u(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:s?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,s.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},89608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),s=(r(67294),r(3905)),i=r(52991),a=r(53438);const o={id:"user",title:"Users",description:"Users",custom_edit_url:null},c=void 0,l={unversionedId:"am/petstore_versioned/1.0.0/user",id:"am/petstore_versioned/1.0.0/user",title:"Users",description:"Users",source:"@site/docs/am/petstore_versioned/1.0.0/user.tag.mdx",sourceDirName:"am/petstore_versioned/1.0.0",slug:"/am/petstore_versioned/1.0.0/user",permalink:"/am/petstore_versioned/1.0.0/user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user",title:"Users",description:"Users",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"uploads an image",permalink:"/am/petstore_versioned/1.0.0/upload-file"},next:{title:"Add a new pet to the store",permalink:"/am/petstore_versioned/add-pet"}},d={},m=[],u={toc:m},p="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Operations about user"),(0,s.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);