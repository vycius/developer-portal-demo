"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4870],{74774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),o=a(94891),n=(a(75190),a(47507),a(24310)),p=a(63303),l=a(75035),m=a(85162);const d={id:"create-users-with-array-input",title:"Creates list of users with given input array",description:"",sidebar_label:"Creates list of users with given input array",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"",operationId:"createUsersWithArrayInput",responses:{default:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"integer",format:"int64",readOnly:!0,title:"Id"},pet:{oneOf:[{type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:{title:"cat",description:"A representation of a cat",allOf:["circular(Pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},dog:{title:"dog",description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},bee:{title:"bee",description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"Category"}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(Pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"},title:"Tag"}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{title:"cat",description:"A representation of a cat",allOf:["circular(Pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},{title:"dog",description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},{title:"bee",description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}]}},xml:{name:"Pet"},title:"Pet"},{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"},title:"Tag"}]},username:{description:"User supplied username",type:"string",minLength:4,example:"John78"},firstName:{description:"User first name",type:"string",minLength:1,example:"John"},lastName:{description:"User last name",type:"string",minLength:1,example:"Smith"},email:{description:"User email address",type:"string",format:"email",example:"john.smith@example.com"},password:{type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits",format:"password",minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",example:"drowssaP123"},phone:{description:"User phone number in international format",type:"string",pattern:"/^+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192"},userStatus:{description:"User status",type:"integer",format:"int32"}},xml:{name:"User"},title:"User"}}}},description:"List of user object",required:!0},method:"post",path:"/user/createWithArray",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:[{pet:{category:{name:"string",sub:{prop1:"string"}},name:"Guru",photoUrls:["string"],friend:{},tags:[{name:"string"}],status:"available",petType:{huntingSkill:"adventurous"}},username:"John78",firstName:"John",lastName:"Smith",email:"john.smith@example.com",password:"drowssaP123",phone:"+1-202-555-0192",userStatus:0}],info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"1.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},"x-dark-logo":{url:"/img/petstore-logo-dark.png",altText:"Petstore dark logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Creates list of users with given input array",description:{content:"",type:"text/plain"},url:{path:["user","createWithArray"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"am/petstore_versioned/1.0.0/swagger-petstore-yaml",custom_edit_url:null},c=void 0,u={unversionedId:"am/petstore_versioned/1.0.0/create-users-with-array-input",id:"am/petstore_versioned/1.0.0/create-users-with-array-input",title:"Creates list of users with given input array",description:"",source:"@site/docs/am/petstore_versioned/1.0.0/create-users-with-array-input.api.mdx",sourceDirName:"am/petstore_versioned/1.0.0",slug:"/am/petstore_versioned/1.0.0/create-users-with-array-input",permalink:"/am/petstore_versioned/1.0.0/create-users-with-array-input",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-users-with-array-input",title:"Creates list of users with given input array",description:"",sidebar_label:"Creates list of users with given input array",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"",operationId:"createUsersWithArrayInput",responses:{default:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"integer",format:"int64",readOnly:!0,title:"Id"},pet:{oneOf:[{type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:{title:"cat",description:"A representation of a cat",allOf:["circular(Pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},dog:{title:"dog",description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},bee:{title:"bee",description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"Category"}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(Pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"},title:"Tag"}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{title:"cat",description:"A representation of a cat",allOf:["circular(Pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},{title:"dog",description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},{title:"bee",description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}]}},xml:{name:"Pet"},title:"Pet"},{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"},title:"Tag"}]},username:{description:"User supplied username",type:"string",minLength:4,example:"John78"},firstName:{description:"User first name",type:"string",minLength:1,example:"John"},lastName:{description:"User last name",type:"string",minLength:1,example:"Smith"},email:{description:"User email address",type:"string",format:"email",example:"john.smith@example.com"},password:{type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits",format:"password",minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",example:"drowssaP123"},phone:{description:"User phone number in international format",type:"string",pattern:"/^\\+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192"},userStatus:{description:"User status",type:"integer",format:"int32"}},xml:{name:"User"},title:"User"}}}},description:"List of user object",required:!0},method:"post",path:"/user/createWithArray",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:[{pet:{category:{name:"string",sub:{prop1:"string"}},name:"Guru",photoUrls:["string"],friend:{},tags:[{name:"string"}],status:"available",petType:{huntingSkill:"adventurous"}},username:"John78",firstName:"John",lastName:"Smith",email:"john.smith@example.com",password:"drowssaP123",phone:"+1-202-555-0192",userStatus:0}],info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"1.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},"x-dark-logo":{url:"/img/petstore-logo-dark.png",altText:"Petstore dark logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Creates list of users with given input array",description:{content:"",type:"text/plain"},url:{path:["user","createWithArray"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"am/petstore_versioned/1.0.0/swagger-petstore-yaml",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Create user",permalink:"/am/petstore_versioned/1.0.0/create-user"},next:{title:"Creates list of users with given input list",permalink:"/am/petstore_versioned/1.0.0/create-users-with-list-input"}},g={},y=[{value:"Creates list of users with given input array",id:"creates-list-of-users-with-given-input-array",level:2}],h={toc:y},f="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"creates-list-of-users-with-given-input-array"},"Creates list of users with given input array"),(0,r.kt)(o.Z,{mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("span",{style:{opacity:"0.6"}}," array"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"List of user object"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"pet"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Pet",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"category"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Category")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(n.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",schema:{description:"Category name",type:"string",minLength:1},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"sub"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Test Sub Category")),(0,r.kt)(n.Z,{collapsible:!1,name:"prop1",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Dumb Property"},mdxType:"SchemaItem"}))))))),(0,r.kt)(n.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name given to a pet",type:"string",example:"Guru"},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"photoUrls",required:!0,schemaName:"url[]",qualifierMessage:"**Possible values:** `<= 20`",schema:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"friend",required:!1,schemaName:"circular(Pet)",qualifierMessage:void 0,schema:{},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"tags"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Tag[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,r.kt)("inlineCode",{parentName:"p"},">= 1"))),(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Tags attached to the pet")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(n.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",schema:{description:"Tag name",type:"string",minLength:1},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(n.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`available`, `pending`, `sold`]",schema:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},mdxType:"SchemaItem"}),(0,r.kt)("div",{className:"discriminatorItem"},(0,r.kt)("div",null,(0,r.kt)("strong",{style:{paddingLeft:"1rem"}},"petType"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{paddingLeft:"1rem"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"cat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dog"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bee"),"]")),(0,r.kt)("div",{style:{paddingLeft:"1rem"}},(0,r.kt)("p",null,"Type of a pet")),(0,r.kt)(l.Z,{mdxType:"DiscriminatorTabs"},(0,r.kt)(m.Z,{label:"cat",value:"0-item-discriminator",mdxType:"TabItem"},(0,r.kt)("div",{style:{marginLeft:"-4px"}},(0,r.kt)(n.Z,{collapsible:!1,name:"huntingSkill",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`clueless`, `lazy`, `adventurous`, `aggressive`]",schema:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]},mdxType:"SchemaItem"}))),(0,r.kt)(m.Z,{label:"dog",value:"1-item-discriminator",mdxType:"TabItem"},(0,r.kt)("div",{style:{marginLeft:"-4px"}},(0,r.kt)(n.Z,{collapsible:!1,name:"packSize",required:!0,schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1},mdxType:"SchemaItem"}))),(0,r.kt)(m.Z,{label:"bee",value:"2-item-discriminator",mdxType:"TabItem"},(0,r.kt)("div",{style:{marginLeft:"-4px"}},(0,r.kt)(n.Z,{collapsible:!1,name:"honeyPerDay",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01},mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Tag",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(n.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",schema:{description:"Tag name",type:"string",minLength:1},mdxType:"SchemaItem"}))))))),(0,r.kt)(n.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 4 characters`",schema:{description:"User supplied username",type:"string",minLength:4,example:"John78"},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"firstName",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",schema:{description:"User first name",type:"string",minLength:1,example:"John"},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"lastName",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",schema:{description:"User last name",type:"string",minLength:1,example:"Smith"},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"email",required:!1,schemaName:"email",qualifierMessage:void 0,schema:{description:"User email address",type:"string",format:"email",example:"john.smith@example.com"},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"password",required:!1,schemaName:"password",qualifierMessage:"**Possible values:** `>= 8 characters`, Value must match regular expression `/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/`",schema:{type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits",format:"password",minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",example:"drowssaP123"},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"phone",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `/^\\+(?:[0-9]-?){6,14}[0-9]$/`",schema:{description:"User phone number in international format",type:"string",pattern:"/^\\+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192"},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"userStatus",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{description:"User status",type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null)))))}b.isMDXComponent=!0}}]);