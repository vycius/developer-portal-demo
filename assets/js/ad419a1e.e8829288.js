"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[824],{48202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>v,frontMatter:()=>u,metadata:()=>g,toc:()=>f});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),n=a(94891),o=a(75190),p=a(47507),l=a(24310),m=a(63303),d=a(75035),c=a(85162);const u={id:"find-pets-by-status",title:"Finds Pets by status",description:"Multiple status values can be provided with comma separated strings",sidebar_label:"Finds Pets by status",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pet"],description:"Multiple status values can be provided with comma separated strings",operationId:"findPetsByStatus",parameters:[{name:"status",in:"query",description:"Status values that need to be considered for filter",required:!0,style:"form",schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["available","pending","sold"],default:"available"}}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",required:["name","photoUrls","tags"],discriminator:{propertyName:"petType",mapping:{cat:{description:"A representation of a cat",allOf:["circular(Pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}],title:"Cat"},dog:{description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}],title:"Dog"},bee:{description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}],title:"HoneyBee"}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"Category"}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(Pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"},title:"Tag"}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{description:"A representation of a cat",allOf:["circular(Pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}],title:"Cat"},{description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}],title:"Dog"},{description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}],title:"HoneyBee"}]}},xml:{name:"Pet"},title:"Pet"}}},"application/xml":{schema:{type:"array",items:{type:"object",required:["name","photoUrls","tags"],discriminator:{propertyName:"petType",mapping:{cat:{description:"A representation of a cat",allOf:["circular(Pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}],title:"Cat"},dog:{description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}],title:"Dog"},bee:{description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}],title:"HoneyBee"}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"Category"}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(Pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"},title:"Tag"}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{description:"A representation of a cat",allOf:["circular(Pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}],title:"Cat"},{description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}],title:"Dog"},{description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}],title:"HoneyBee"}]}},xml:{name:"Pet"},title:"Pet"}}}}},400:{description:"Invalid status value"}},security:[{api_key:[]}],method:"get",path:"/pet/findByStatus",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"},BasicAuth:{type:"http",scheme:"basic"},BearerAuth:{type:"http",scheme:"bearer"},ApiKeyAuth:{type:"apiKey",in:"header",name:"X-API-Key"},OpenID:{type:"openIdConnect",openIdConnectUrl:"https://example.com/.well-known/openid-configuration"},OAuth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://example.com/oauth/authorize",tokenUrl:"https://example.com/oauth/token",scopes:{read:"Grants read access",write:"Grants write access",admin:"Grants access to admin operations"}}}}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\n  \nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},"x-dark-logo":{url:"/img/petstore-logo-dark.png",altText:"Petstore dark logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Finds Pets by status",description:{content:"Multiple status values can be provided with comma separated strings",type:"text/plain"},url:{path:["pet","findByStatus"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Status values that need to be considered for filter",type:"text/plain"},key:"status",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"api_key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"am/petstore_versioned/swagger-petstore-yaml",custom_edit_url:null},y=void 0,g={unversionedId:"am/petstore_versioned/find-pets-by-status",id:"am/petstore_versioned/find-pets-by-status",title:"Finds Pets by status",description:"Multiple status values can be provided with comma separated strings",source:"@site/docs/am/petstore_versioned/find-pets-by-status.api.mdx",sourceDirName:"am/petstore_versioned",slug:"/am/petstore_versioned/find-pets-by-status",permalink:"/am/petstore_versioned/find-pets-by-status",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"find-pets-by-status",title:"Finds Pets by status",description:"Multiple status values can be provided with comma separated strings",sidebar_label:"Finds Pets by status",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pet"],description:"Multiple status values can be provided with comma separated strings",operationId:"findPetsByStatus",parameters:[{name:"status",in:"query",description:"Status values that need to be considered for filter",required:!0,style:"form",schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["available","pending","sold"],default:"available"}}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",required:["name","photoUrls","tags"],discriminator:{propertyName:"petType",mapping:{cat:{description:"A representation of a cat",allOf:["circular(Pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}],title:"Cat"},dog:{description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}],title:"Dog"},bee:{description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}],title:"HoneyBee"}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"Category"}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(Pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"},title:"Tag"}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{description:"A representation of a cat",allOf:["circular(Pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}],title:"Cat"},{description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}],title:"Dog"},{description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}],title:"HoneyBee"}]}},xml:{name:"Pet"},title:"Pet"}}},"application/xml":{schema:{type:"array",items:{type:"object",required:["name","photoUrls","tags"],discriminator:{propertyName:"petType",mapping:{cat:{description:"A representation of a cat",allOf:["circular(Pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}],title:"Cat"},dog:{description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}],title:"Dog"},bee:{description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}],title:"HoneyBee"}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"Category"}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(Pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"},title:"Tag"}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{description:"A representation of a cat",allOf:["circular(Pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}],title:"Cat"},{description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}],title:"Dog"},{description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}],title:"HoneyBee"}]}},xml:{name:"Pet"},title:"Pet"}}}}},400:{description:"Invalid status value"}},security:[{api_key:[]}],method:"get",path:"/pet/findByStatus",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"},BasicAuth:{type:"http",scheme:"basic"},BearerAuth:{type:"http",scheme:"bearer"},ApiKeyAuth:{type:"apiKey",in:"header",name:"X-API-Key"},OpenID:{type:"openIdConnect",openIdConnectUrl:"https://example.com/.well-known/openid-configuration"},OAuth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://example.com/oauth/authorize",tokenUrl:"https://example.com/oauth/token",scopes:{read:"Grants read access",write:"Grants write access",admin:"Grants access to admin operations"}}}}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\n  \nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},"x-dark-logo":{url:"/img/petstore-logo-dark.png",altText:"Petstore dark logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Finds Pets by status",description:{content:"Multiple status values can be provided with comma separated strings",type:"text/plain"},url:{path:["pet","findByStatus"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Status values that need to be considered for filter",type:"text/plain"},key:"status",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"api_key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"am/petstore_versioned/swagger-petstore-yaml",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Delete user",permalink:"/am/petstore_versioned/delete-user"},next:{title:"Finds Pets by tags",permalink:"/am/petstore_versioned/find-pets-by-tags"}},h={},f=[{value:"Finds Pets by status",id:"finds-pets-by-status",level:2}],b={toc:f},k="wrapper";function v(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"finds-pets-by-status"},"Finds Pets by status"),(0,r.kt)("p",null,"Multiple status values can be provided with comma separated strings"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"status",in:"query",description:"Status values that need to be considered for filter",required:!0,style:"form",schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["available","pending","sold"],default:"available"}}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"integer",format:"int64",readOnly:!0,title:"Id"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"category"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Category")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{description:"Category ID",type:"integer",format:"int64",readOnly:!0,title:"Id"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",schema:{description:"Category name",type:"string",minLength:1},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"sub"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Test Sub Category")),(0,r.kt)(l.Z,{collapsible:!1,name:"prop1",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Dumb Property"},mdxType:"SchemaItem"}))))))),(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name given to a pet",type:"string",example:"Guru"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"photoUrls",required:!1,schemaName:"url[]",qualifierMessage:"**Possible values:** `<= 20`",schema:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"friend",required:!1,schemaName:"circular(Pet)",qualifierMessage:void 0,schema:{},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"tags"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Tag[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,r.kt)("inlineCode",{parentName:"p"},">= 1"))),(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Tags attached to the pet")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"integer",format:"int64",readOnly:!0,title:"Id"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",schema:{description:"Tag name",type:"string",minLength:1},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(l.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`available`, `pending`, `sold`]",schema:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},mdxType:"SchemaItem"}),(0,r.kt)("div",{className:"discriminatorItem"},(0,r.kt)("div",null,(0,r.kt)("strong",{style:{paddingLeft:"1rem"}},"petType"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{paddingLeft:"1rem"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"cat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dog"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bee"),"]")),(0,r.kt)("div",{style:{paddingLeft:"1rem"}},(0,r.kt)("p",null,"Type of a pet")),(0,r.kt)(d.Z,{mdxType:"DiscriminatorTabs"},(0,r.kt)(c.Z,{label:"cat",value:"0-item-discriminator",mdxType:"TabItem"},(0,r.kt)("div",{style:{marginLeft:"-4px"}},(0,r.kt)(l.Z,{collapsible:!1,name:"huntingSkill",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`clueless`, `lazy`, `adventurous`, `aggressive`]",schema:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]},mdxType:"SchemaItem"}))),(0,r.kt)(c.Z,{label:"dog",value:"1-item-discriminator",mdxType:"TabItem"},(0,r.kt)("div",{style:{marginLeft:"-4px"}},(0,r.kt)(l.Z,{collapsible:!1,name:"packSize",required:!1,schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1},mdxType:"SchemaItem"}))),(0,r.kt)(c.Z,{label:"bee",value:"2-item-discriminator",mdxType:"TabItem"},(0,r.kt)("div",{style:{marginLeft:"-4px"}},(0,r.kt)(l.Z,{collapsible:!1,name:"honeyPerDay",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01},mdxType:"SchemaItem"})))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'[\n  {\n    "id": 0,\n    "category": {\n      "id": 0,\n      "name": "string",\n      "sub": {\n        "prop1": "string"\n      }\n    },\n    "name": "Guru",\n    "photoUrls": [\n      "string"\n    ],\n    "friend": {},\n    "tags": [\n      {\n        "id": 0,\n        "name": "string"\n      }\n    ],\n    "status": "available",\n    "petType": {\n      "huntingSkill": "adventurous"\n    }\n  }\n]',language:"json",mdxType:"ResponseSamples"})))),(0,r.kt)(c.Z,{label:"application/xml",value:"application/xml",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"integer",format:"int64",readOnly:!0,title:"Id"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"category"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Category")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{description:"Category ID",type:"integer",format:"int64",readOnly:!0,title:"Id"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",schema:{description:"Category name",type:"string",minLength:1},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"sub"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Test Sub Category")),(0,r.kt)(l.Z,{collapsible:!1,name:"prop1",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Dumb Property"},mdxType:"SchemaItem"}))))))),(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name given to a pet",type:"string",example:"Guru"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"photoUrls",required:!1,schemaName:"url[]",qualifierMessage:"**Possible values:** `<= 20`",schema:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"friend",required:!1,schemaName:"circular(Pet)",qualifierMessage:void 0,schema:{},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"tags"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Tag[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,r.kt)("inlineCode",{parentName:"p"},">= 1"))),(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Tags attached to the pet")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"integer",format:"int64",readOnly:!0,title:"Id"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",schema:{description:"Tag name",type:"string",minLength:1},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(l.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`available`, `pending`, `sold`]",schema:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},mdxType:"SchemaItem"}),(0,r.kt)("div",{className:"discriminatorItem"},(0,r.kt)("div",null,(0,r.kt)("strong",{style:{paddingLeft:"1rem"}},"petType"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{paddingLeft:"1rem"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"cat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dog"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bee"),"]")),(0,r.kt)("div",{style:{paddingLeft:"1rem"}},(0,r.kt)("p",null,"Type of a pet")),(0,r.kt)(d.Z,{mdxType:"DiscriminatorTabs"},(0,r.kt)(c.Z,{label:"cat",value:"0-item-discriminator",mdxType:"TabItem"},(0,r.kt)("div",{style:{marginLeft:"-4px"}},(0,r.kt)(l.Z,{collapsible:!1,name:"huntingSkill",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`clueless`, `lazy`, `adventurous`, `aggressive`]",schema:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]},mdxType:"SchemaItem"}))),(0,r.kt)(c.Z,{label:"dog",value:"1-item-discriminator",mdxType:"TabItem"},(0,r.kt)("div",{style:{marginLeft:"-4px"}},(0,r.kt)(l.Z,{collapsible:!1,name:"packSize",required:!1,schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1},mdxType:"SchemaItem"}))),(0,r.kt)(c.Z,{label:"bee",value:"2-item-discriminator",mdxType:"TabItem"},(0,r.kt)("div",{style:{marginLeft:"-4px"}},(0,r.kt)(l.Z,{collapsible:!1,name:"honeyPerDay",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01},mdxType:"SchemaItem"})))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:"<0>\n  <id>0</id>\n  <category>\n    <id>0</id>\n    <name>string</name>\n    <sub>\n      <prop1>string</prop1>\n    </sub>\n  </category>\n  <name>Guru</name>\n  <photoUrls>string</photoUrls>\n  <friend/>\n  <tags>\n    <id>0</id>\n    <name>string</name>\n  </tags>\n  <status>available</status>\n  <petType>\n    <huntingSkill>adventurous</huntingSkill>\n  </petType>\n</0>",language:"xml",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Invalid status value")),(0,r.kt)("div",null)))))}v.isMDXComponent=!0}}]);