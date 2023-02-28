"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2756],{55328:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=s(87462),i=(s(67294),s(3905)),o=s(26389),a=(s(94891),s(75190)),c=(s(47507),s(24310),s(63303),s(75035),s(85162));const r={id:"access-tokens-delete",title:"Revokes an access token",description:"Revokes an access token",sidebar_label:"Revokes an access token",hide_title:!0,hide_table_of_contents:!0,api:{description:"Revokes an access token",operationId:"accessTokens_delete",tags:["access_tokens"],parameters:[{name:"id",in:"path",description:"The ID or URL-encoded path of the project",required:!0,schema:{oneOf:[{type:"integer"},{type:"string"}]}},{name:"token_id",in:"path",description:"The ID of the project access token",required:!0,schema:{oneOf:[{type:"integer"},{type:"string"}]}}],responses:{204:{description:"No content if successfully revoked"},400:{description:"Bad Request"},404:{description:"Not Found"}},method:"delete",path:"/v4/projects/{id}/access_tokens/{token_id}",servers:[{url:"https://gitlab.com/api/"}],security:[{ApiKeyAuth:[]}],securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"Private-Token"}},info:{description:"An OpenAPI definition for the GitLab REST API.\nFew API resources or endpoints are currently included.\nThe intent is to expand this to match the entire Markdown documentation of the API:\n<https://docs.gitlab.com/ee/api/>. Contributions are welcome.\n\nWhen viewing this on gitlab.com, you can test API calls directly from the browser\nagainst the `gitlab.com` instance, if you are logged in.\nThe feature uses the current [GitLab session cookie](https://docs.gitlab.com/ee/api/index.html#session-cookie),\nso each request is made using your account.\n\nInstructions for using this tool can be found in [Interactive API Documentation](openapi_interactive.md).\n",version:"v4",title:"GitLab API",termsOfService:"https://about.gitlab.com/terms/",license:{name:"CC BY-SA 4.0",url:"https://gitlab.com/gitlab-org/gitlab/-/blob/master/LICENSE"}},postman:{name:"Revokes an access token",description:{content:"Revokes an access token",type:"text/plain"},url:{path:["v4","projects",":id","access_tokens",":token_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The ID or URL-encoded path of the project",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) The ID of the project access token",type:"text/plain"},type:"any",value:"",key:"token_id"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"sumin/gitlab/gitlab-api",custom_edit_url:null},d=void 0,l={unversionedId:"sumin/gitlab/access-tokens-delete",id:"sumin/gitlab/access-tokens-delete",title:"Revokes an access token",description:"Revokes an access token",source:"@site/docs/sumin/gitlab/access-tokens-delete.api.mdx",sourceDirName:"sumin/gitlab",slug:"/sumin/gitlab/access-tokens-delete",permalink:"/sumin/gitlab/access-tokens-delete",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"access-tokens-delete",title:"Revokes an access token",description:"Revokes an access token",sidebar_label:"Revokes an access token",hide_title:!0,hide_table_of_contents:!0,api:{description:"Revokes an access token",operationId:"accessTokens_delete",tags:["access_tokens"],parameters:[{name:"id",in:"path",description:"The ID or URL-encoded path of the project",required:!0,schema:{oneOf:[{type:"integer"},{type:"string"}]}},{name:"token_id",in:"path",description:"The ID of the project access token",required:!0,schema:{oneOf:[{type:"integer"},{type:"string"}]}}],responses:{204:{description:"No content if successfully revoked"},400:{description:"Bad Request"},404:{description:"Not Found"}},method:"delete",path:"/v4/projects/{id}/access_tokens/{token_id}",servers:[{url:"https://gitlab.com/api/"}],security:[{ApiKeyAuth:[]}],securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"Private-Token"}},info:{description:"An OpenAPI definition for the GitLab REST API.\nFew API resources or endpoints are currently included.\nThe intent is to expand this to match the entire Markdown documentation of the API:\n<https://docs.gitlab.com/ee/api/>. Contributions are welcome.\n\nWhen viewing this on gitlab.com, you can test API calls directly from the browser\nagainst the `gitlab.com` instance, if you are logged in.\nThe feature uses the current [GitLab session cookie](https://docs.gitlab.com/ee/api/index.html#session-cookie),\nso each request is made using your account.\n\nInstructions for using this tool can be found in [Interactive API Documentation](openapi_interactive.md).\n",version:"v4",title:"GitLab API",termsOfService:"https://about.gitlab.com/terms/",license:{name:"CC BY-SA 4.0",url:"https://gitlab.com/gitlab-org/gitlab/-/blob/master/LICENSE"}},postman:{name:"Revokes an access token",description:{content:"Revokes an access token",type:"text/plain"},url:{path:["v4","projects",":id","access_tokens",":token_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The ID or URL-encoded path of the project",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) The ID of the project access token",type:"text/plain"},type:"any",value:"",key:"token_id"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"sumin/gitlab/gitlab-api",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Requests access for the authenticated user to a project",permalink:"/sumin/gitlab/access-requests-projects-post"},next:{title:"List access tokens for a project",permalink:"/sumin/gitlab/access-tokens-get"}},p={},u=[{value:"Revokes an access token",id:"revokes-an-access-token",level:2}],m={toc:u},k="wrapper";function h(e){let{components:t,...s}=e;return(0,i.kt)(k,(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"revokes-an-access-token"},"Revokes an access token"),(0,i.kt)("p",null,"Revokes an access token"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(a.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"The ID or URL-encoded path of the project",required:!0,schema:{oneOf:[{type:"integer"},{type:"string"}]}},mdxType:"ParamsItem"}),(0,i.kt)(a.Z,{className:"paramsItem",param:{name:"token_id",in:"path",description:"The ID of the project access token",required:!0,schema:{oneOf:[{type:"integer"},{type:"string"}]}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"No content if successfully revoked")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Not Found")),(0,i.kt)("div",null)))))}h.isMDXComponent=!0}}]);