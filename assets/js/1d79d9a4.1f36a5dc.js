"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[115],{52991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(67294),i=r(86010),s=r(53438),a=r(39960),o=r(13919),c=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function m(e){let{href:t,icon:r,title:s,description:a}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:s},r," ",s),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:a},a))}function u(e){let{item:t}=e;const r=(0,s.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,s.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const a=(0,s.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},46289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),i=(r(67294),r(3905)),s=r(52991),a=r(53438);const o={id:"user",title:"Users",description:"Users",custom_edit_url:null},c=void 0,l={unversionedId:"am/petstore_versioned/user",id:"am/petstore_versioned/user",title:"Users",description:"Users",source:"@site/docs/am/petstore_versioned/user.tag.mdx",sourceDirName:"am/petstore_versioned",slug:"/am/petstore_versioned/user",permalink:"/am/petstore_versioned/user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user",title:"Users",description:"Users",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"uploads an image",permalink:"/am/petstore_versioned/upload-file"},next:{title:"Introduction",permalink:"/sumin/gitlab/gitlab-api"}},d={},m=[],u={toc:m},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Operations about user"),(0,i.kt)(s.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);