(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3847],{44765:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var n=o(67294),a=o(93162),r=o.n(a);const l=t=>{let e;(t.endsWith("json")||t.endsWith("yaml")||t.endsWith("yml"))&&(e=t.substring(t.lastIndexOf("/")+1)),r().saveAs(t,e||"openapi.txt")};const i=function(t){let{url:e,proxy:o}=t;return n.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},n.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),n.createElement("ul",{className:"export-dropdown dropdown__menu"},n.createElement("li",null,n.createElement("a",{onClick:t=>{t.preventDefault(),l(`${e}`)},className:"dropdown__link",href:`${e}`},"OpenAPI Spec"))))}},92272:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var n=o(67294),a=o(92949),r=o(44996),l=o(50941);function i(t){const{colorMode:e}=(0,a.I)(),{logo:o,darkLogo:i}=t,s=()=>"dark"===e?i?.altText??o?.altText:o?.altText,u=(0,r.Z)(o?.url),p=(0,r.Z)(i?.url);return o&&i?n.createElement(l.Z,{alt:s(),sources:{light:u,dark:p},className:"openapi__logo"}):o||i?n.createElement(l.Z,{alt:s(),sources:{light:u??p,dark:u??p},className:"openapi__logo"}):void 0}},6395:(t,e,o)=>{"use strict";o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=o(87462),a=(o(67294),o(3905)),r=o(92272),l=o(63303),i=o(85162);o(44765);const s={id:"swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"This is a sample server Petstore server.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},u=void 0,p={unversionedId:"am/petstore_versioned/swagger-petstore-yaml",id:"am/petstore_versioned/swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"This is a sample server Petstore server.",source:"@site/docs/am/petstore_versioned/swagger-petstore-yaml.info.mdx",sourceDirName:"am/petstore_versioned",slug:"/am/petstore_versioned/swagger-petstore-yaml",permalink:"/am/petstore_versioned/swagger-petstore-yaml",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"This is a sample server Petstore server.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Docs",permalink:"/"},next:{title:"Introduction",permalink:"/am/petstore_versioned/1.0.0/swagger-petstore-yaml"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"OpenAPI Specification",id:"openapi-specification",level:2},{value:"Cross-Origin Resource Sharing",id:"cross-origin-resource-sharing",level:2},{value:"Authentication",id:"authentication",level:2}],m={toc:c},h="wrapper";function k(t){let{components:e,...o}=t;return(0,a.kt)(h,(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 2.0.0"),(0,a.kt)("h1",{id:"swagger-petstore-yaml"},"Swagger Petstore YAML"),(0,a.kt)(r.Z,{logo:{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},darkLogo:{url:"/img/petstore-logo-dark.png",altText:"Petstore dark logo"},mdxType:"ApiLogo"}),(0,a.kt)("p",null,"This is a sample server Petstore server.\nYou can find out more about Swagger at\n",(0,a.kt)("a",{parentName:"p",href:"http://swagger.io"},"http://swagger.io")," or on ",(0,a.kt)("a",{parentName:"p",href:"http://swagger.io/irc/"},"irc.freenode.net, #swagger"),".\nFor this sample, you can use the api key ",(0,a.kt)("inlineCode",{parentName:"p"},"special-key")," to test the authorization filters."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This API is documented in ",(0,a.kt)("strong",{parentName:"p"},"OpenAPI format")," and is based on\n",(0,a.kt)("a",{parentName:"p",href:"http://petstore.swagger.io/"},"Petstore sample")," provided by ",(0,a.kt)("a",{parentName:"p",href:"http://swagger.io"},"swagger.io")," team.\nIt was ",(0,a.kt)("strong",{parentName:"p"},"extended")," to illustrate features of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Rebilly/generator-openapi-repo"},"generator-openapi-repo"),"\ntool and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc"},"ReDoc")," documentation. In addition to standard\nOpenAPI syntax we use a few ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md"},"vendor extensions"),"."),(0,a.kt)("h2",{id:"openapi-specification"},"OpenAPI Specification"),(0,a.kt)("p",null,"This API is documented in ",(0,a.kt)("strong",{parentName:"p"},"OpenAPI format")," and is based on\n",(0,a.kt)("a",{parentName:"p",href:"http://petstore.swagger.io/"},"Petstore sample")," provided by ",(0,a.kt)("a",{parentName:"p",href:"http://swagger.io"},"swagger.io")," team.\nIt was ",(0,a.kt)("strong",{parentName:"p"},"extended")," to illustrate features of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Rebilly/generator-openapi-repo"},"generator-openapi-repo"),"\ntool and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc"},"ReDoc")," documentation. In addition to standard\nOpenAPI syntax we use a few ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md"},"vendor extensions"),"."),(0,a.kt)("h2",{id:"cross-origin-resource-sharing"},"Cross-Origin Resource Sharing"),(0,a.kt)("p",null,"This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/cors/"},"W3C spec"),".\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Petstore offers two forms of authentication:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API Key"),(0,a.kt)("li",{parentName:"ul"},"OAuth2")),(0,a.kt)("p",null,"OAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications."),(0,a.kt)("div",{style:{marginBottom:"2rem"}},(0,a.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,a.kt)(l.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,a.kt)(i.Z,{label:"OAuth 2.0: petstore_auth",value:"petstore_auth",mdxType:"TabItem"},(0,a.kt)("p",null,"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access."),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"oauth2")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"OAuth Flow (implicit):"),(0,a.kt)("td",null,(0,a.kt)("p",null,"Authorization URL: http://petstore.swagger.io/api/oauth/dialog"),(0,a.kt)("span",null,"Scopes:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"write:pets: modify pets in your account"),(0,a.kt)("li",null,"read:pets: read your pets")))))))),(0,a.kt)(i.Z,{label:"API Key: api_key",value:"api_key",mdxType:"TabItem"},(0,a.kt)("p",null,"For this sample, you can use the api key ",(0,a.kt)("inlineCode",{parentName:"p"},"special-key")," to test the authorization filters."),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"apiKey")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Header parameter name:"),(0,a.kt)("td",null,"api_key")))))),(0,a.kt)(i.Z,{label:"HTTP: Basic Auth",value:"BasicAuth",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"http")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"HTTP Authorization Scheme:"),(0,a.kt)("td",null,"basic")))))),(0,a.kt)(i.Z,{label:"HTTP: Bearer Auth",value:"BearerAuth",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"http")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"HTTP Authorization Scheme:"),(0,a.kt)("td",null,"bearer")))))),(0,a.kt)(i.Z,{label:"API Key: ApiKeyAuth",value:"ApiKeyAuth",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"apiKey")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Header parameter name:"),(0,a.kt)("td",null,"X-API-Key")))))),(0,a.kt)(i.Z,{label:"OpenID Connect: OpenID",value:"OpenID",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"openIdConnect")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"OpenID Connect URL:"),(0,a.kt)("td",null,"https://example.com/.well-known/openid-configuration")))))),(0,a.kt)(i.Z,{label:"OAuth 2.0: OAuth2",value:"OAuth2",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"oauth2")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"OAuth Flow (authorizationCode):"),(0,a.kt)("td",null,(0,a.kt)("p",null,"Token URL: https://example.com/oauth/token"),(0,a.kt)("p",null,"Authorization URL: https://example.com/oauth/authorize"),(0,a.kt)("span",null,"Scopes:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"read: Grants read access"),(0,a.kt)("li",null,"write: Grants write access"),(0,a.kt)("li",null,"admin: Grants access to admin operations")))))))))),(0,a.kt)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,a.kt)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,a.kt)("span",null,"API Support: ",(0,a.kt)("a",{href:"mailto:apiteam@swagger.io"},"apiteam@swagger.io")),(0,a.kt)("span",null,"URL: ",(0,a.kt)("a",{href:"https://github.com/Redocly/redoc"},"https://github.com/Redocly/redoc"))),(0,a.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,a.kt)("h3",{style:{marginBottom:"0.25rem"}},"Terms of Service"),(0,a.kt)("a",{href:"http://swagger.io/terms/"},"http://swagger.io/terms/")),(0,a.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,a.kt)("h3",{style:{marginBottom:"0.25rem"}},"License"),(0,a.kt)("a",{href:"http://www.apache.org/licenses/LICENSE-2.0.html"},"Apache 2.0")))}k.isMDXComponent=!0},93162:function(t,e,o){var n,a,r,l=o(25108);a=[],void 0===(r="function"==typeof(n=function(){"use strict";function e(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(l.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,o){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){u(n.response,e,o)},n.onerror=function(){l.error("could not download file")},n.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,s=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(t,e,o){var l=i.URL||i.webkitURL,s=document.createElement("a");e=e||t.name||"download",s.download=e,s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?r(s):a(s.href)?n(t,e,o):r(s,s.target="_blank")):(s.href=l.createObjectURL(t),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){r(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,o,l){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,l),o);else if(a(t))n(t,o,l);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout((function(){r(i)}))}}:function(t,e,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,o);var r="application/octet-stream"===t.type,l=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||r&&l||s)&&"undefined"!=typeof FileReader){var p=new FileReader;p.onloadend=function(){var t=p.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},p.readAsDataURL(t)}else{var d=i.URL||i.webkitURL,c=d.createObjectURL(t);a?a.location=c:location.href=c,a=null,setTimeout((function(){d.revokeObjectURL(c)}),4e4)}});i.saveAs=u.saveAs=u,t.exports=u})?n.apply(e,a):n)||(t.exports=r)}}]);