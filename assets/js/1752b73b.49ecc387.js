"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[399],{47151:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=o(87462),r=(o(67294),o(3905)),n=o(26389),i=(o(94891),o(75190),o(47507),o(24310),o(63303),o(75035),o(85162));const a={id:"logout-user",title:"Logs out current logged in user session",description:"",sidebar_label:"Logs out current logged in user session",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"",operationId:"logoutUser",responses:{default:{description:"successful operation"}},method:"get",path:"/user/logout",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"},BasicAuth:{type:"http",scheme:"basic"},BearerAuth:{type:"http",scheme:"bearer"},ApiKeyAuth:{type:"apiKey",in:"header",name:"X-API-Key"},OpenID:{type:"openIdConnect",openIdConnectUrl:"https://example.com/.well-known/openid-configuration"},OAuth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://example.com/oauth/authorize",tokenUrl:"https://example.com/oauth/token",scopes:{read:"Grants read access",write:"Grants write access",admin:"Grants access to admin operations"}}}}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\n  \nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},"x-dark-logo":{url:"/img/petstore-logo-dark.png",altText:"Petstore dark logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Logs out current logged in user session",description:{content:"",type:"text/plain"},url:{path:["user","logout"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"sumin/petstore/swagger-petstore-yaml",custom_edit_url:null},p=void 0,c={unversionedId:"sumin/petstore/logout-user",id:"sumin/petstore/logout-user",title:"Logs out current logged in user session",description:"",source:"@site/docs/sumin/petstore/logout-user.api.mdx",sourceDirName:"sumin/petstore",slug:"/sumin/petstore/logout-user",permalink:"/sumin/petstore/logout-user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"logout-user",title:"Logs out current logged in user session",description:"",sidebar_label:"Logs out current logged in user session",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"",operationId:"logoutUser",responses:{default:{description:"successful operation"}},method:"get",path:"/user/logout",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"},BasicAuth:{type:"http",scheme:"basic"},BearerAuth:{type:"http",scheme:"bearer"},ApiKeyAuth:{type:"apiKey",in:"header",name:"X-API-Key"},OpenID:{type:"openIdConnect",openIdConnectUrl:"https://example.com/.well-known/openid-configuration"},OAuth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://example.com/oauth/authorize",tokenUrl:"https://example.com/oauth/token",scopes:{read:"Grants read access",write:"Grants write access",admin:"Grants access to admin operations"}}}}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\n  \nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},"x-dark-logo":{url:"/img/petstore-logo-dark.png",altText:"Petstore dark logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Logs out current logged in user session",description:{content:"",type:"text/plain"},url:{path:["user","logout"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"sumin/petstore/swagger-petstore-yaml",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Logs user into the system",permalink:"/sumin/petstore/login-user"},next:{title:"New pet",permalink:"/sumin/petstore/new-pet"}},l={},u=[{value:"Logs out current logged in user session",id:"logs-out-current-logged-in-user-session",level:2}],d={toc:u},h="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,s.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"logs-out-current-logged-in-user-session"},"Logs out current logged in user session"),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(i.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null)))))}g.isMDXComponent=!0}}]);