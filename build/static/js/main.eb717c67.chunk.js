(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(24),a=n.n(r),o=(n(105),n(106),n(107),n(35)),i=n(8),s=n(30),l=n(95),j=Object(l.io)("http://localhost:5000/");j.on("connect",(function(){return console.log("we is connected")}));var u=n(3),h=Object(c.createContext)({login:function(){},logout:function(){},authName:"",employeeID:"",authIDs:[],isAuthed:!1}),d=function(e){var t=e.children,n=Object(c.useState)({authName:"",employeeID:"",authIDs:[],isAuthed:!1}),r=Object(s.a)(n,2),a=r[0],o=r[1];return Object(u.jsx)(h.Provider,{value:{login:function(e,t,n){o({authName:e,employeeID:t,authIDs:n,isAuthed:!0}),console.log("logging in")},logout:function(){o({authName:"",employeeID:"",authIDs:[],isAuthed:!1}),j.disconnect()},authName:a.authName,employeeID:a.employeeID,authIDs:a.authIDs,isAuthed:a.isAuthed},children:t})},b=n(39),O=n(26),x=n(28),p=n(100),f=n(29),m=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(s.a)(a,2),l=o[0],d=o[1],m=Object(c.useState)(!1),g=Object(s.a)(m,2),v=g[0],y=g[1],C=Object(c.useContext)(h),I=Object(i.g)();Object(c.useEffect)((function(){v&&setTimeout((function(){y(!1)}),5e3)}),[v]),Object(c.useEffect)((function(){return j.on("USER_ACCEPTED",(function(e){var t=JSON.parse(e),n=t.userName,c=t.employeeID,r=t.authIDs;C.login(n,c,r),I.push("/")})),j.on("USER_REJECTED",(function(e){y(!0),d("")})),function(){j.off("USER_ACCEPTED"),j.off("USER_REJECTED")}}),[I,C]);return Object(u.jsxs)(b.a,{fluid:!0,className:"d-flex flex-column align-items-center justify-content-center",style:{height:"100vh"},children:[Object(u.jsx)(f.a,{in:v,children:Object(u.jsx)("div",{className:"position-absolute",style:{top:"30px",right:"30px"},children:Object(u.jsx)(p.a,{variant:"danger",show:v,children:"Your email or password was incorrect"})})}),Object(u.jsx)("h1",{children:"Accounting n' Shit"}),Object(u.jsxs)(O.a,{style:{width:"50%"},onSubmit:function(e){e.preventDefault(),j.emit("LOG_IN_USER",{userName:n,password:l})},onMouseEnter:function(){j.disconnected&&j.connect()},children:[Object(u.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(u.jsx)(O.a.Label,{children:"Email address"}),Object(u.jsx)(O.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return r(e.target.value)},value:n})]}),Object(u.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(u.jsx)(O.a.Label,{children:"Password"}),Object(u.jsx)(O.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return d(e.target.value)},value:l})]}),Object(u.jsx)(O.a.Group,{controlId:"formBasicCheckbox",children:Object(u.jsx)(O.a.Check,{type:"checkbox",label:"Stay logged In"})}),Object(u.jsx)(x.a,{variant:"outline-info",type:"submit",children:"Submit"})]})]})},g=n(67),v=n(55),y=n(60),C=n(97),I=function(e){var t=e.direction,n=e.delay,c=e.tooltipText,r=e.reportName,a=e.button;return Object(u.jsx)(y.a,{placement:t,delay:{show:n,hide:0},overlay:Object(u.jsx)(C.a,{id:r,children:c}),children:a})},S=n(49),w=n(37),E=n(50),N=n(99),k=n(46),D=n(68),A=n(98),T=n.n(A);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=c.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),L=c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"});function U(e,t){var n=e.title,r=e.titleId,a=P(e,["title","titleId"]);return c.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,_,L)}var B=c.forwardRef(U),z=(n.p,Object(c.memo)((function(){var e=Object(c.useContext)(h);return Object(u.jsx)(b.a,{children:Object(u.jsxs)(N.a,{children:[Object(u.jsx)(k.a,{lg:"auto",children:Object(u.jsx)(y.a,{placement:"bottom",trigger:"click",overlay:Object(u.jsxs)(D.a,{id:"left",children:[Object(u.jsx)(D.a.Title,{as:"h3",children:Object(u.jsx)("strong",{children:e.authName})}),Object(u.jsxs)(D.a.Content,{children:[Object(u.jsx)("p",{children:"Some pertinent info about the user"}),Object(u.jsx)("p",{children:"Some pertinent info about the user"}),Object(u.jsx)("p",{children:"Some pertinent info about the user"}),Object(u.jsx)(x.a,{variant:"secondary",onClick:function(){return e.logout()},children:"Log Out"})]})]}),children:Object(u.jsx)(B,{className:T.a.Avatar})})}),Object(u.jsxs)(k.a,{children:[Object(u.jsx)("i",{className:"bi bi-cloud-lightning-rain-fill"}),Object(u.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"})]})]})})}))),J=Object(c.memo)((function(){return Object(u.jsxs)(S.a,{expand:"lg",children:[Object(u.jsx)(S.a.Brand,{children:"A Clever Name"}),Object(u.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsxs)(S.a.Collapse,{id:"basic-navbar-nav",children:[Object(u.jsxs)(E.a,{justify:!0,className:"mr-auto",variant:"pills",children:[Object(u.jsx)(E.a.Link,{as:o.b,to:"/",exact:!0,children:"Reports"}),Object(u.jsx)(E.a.Link,{as:o.b,to:"/uploads",children:"Uploads"}),Object(u.jsxs)(w.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(u.jsx)(w.a.Item,{children:"Action"}),Object(u.jsx)(w.a.Item,{children:"Another action"}),Object(u.jsx)(w.a.Item,{children:"Something"}),Object(u.jsx)(w.a.Divider,{}),Object(u.jsx)(w.a.Item,{children:"Separated link"})]})]}),Object(u.jsx)(E.a,{children:Object(u.jsx)(z,{})})]})]})})),M=function(e){var t=e.children;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(b.a,{fluid:!0,children:[Object(u.jsx)(J,{}),t]})})},G=[{title:"Billing",onClick:function(){return console.log("billing has been clicked")},color:"primary",tipText:"Information related to the billing reports"},{title:"Check History",onClick:function(){return console.log("check history has been clicked")},color:"secondary",tipText:"Information related to the Check History reports"},{title:"Census",onClick:function(){return j.emit("test")},color:"info",tipText:"Information related to the Census report"}],H=function(){var e=Object(c.useState)(G),t=Object(s.a)(e,2),n=t[0],r=t[1],a=function(e){if(console.log(e),e){var t=(n=e,[].concat(G).filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})));console.log(t),console.log(t.length),0===t.length?r(null):r(t)}else r(G);var n};return Object(u.jsx)(M,{children:Object(u.jsxs)("div",{className:"flex-column  flex-grow-1",style:{width:"20%",height:"90vh"},children:[Object(u.jsxs)(g.a,{className:"pt-2",children:[Object(u.jsx)(g.a.Prepend,{children:Object(u.jsx)(g.a.Text,{id:"search-icon",children:Object(u.jsx)("i",{className:"bi bi-search",role:"img","aria-label":"Search"})})}),Object(u.jsx)(v.a,{placeholder:"Search Reports","aria-label":"Search Reports","aria-describedby":"search-icon",onChange:function(e){return a(e.target.value)}})]}),null!==n?n.map((function(e){return Object(u.jsx)(I,{delay:500,direction:"right",reportName:e.title,tooltipText:e.tipText,button:Object(u.jsx)(x.a,{variant:e.color,onClick:e.onClick,block:!0,className:"my-2",children:e.title})},e.title)})):Object(u.jsx)("p",{children:"There are no reports like this"})]})})},F=function(){return Object(u.jsx)(M,{children:Object(u.jsx)("p",{children:"This is the upload page"})})},V=(n(144),function(){return Object(c.useContext)(h).isAuthed?Object(u.jsx)(o.a,{children:Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{path:"/",exact:!0,component:H}),Object(u.jsx)(i.b,{path:"/uploads",component:F})]})}):Object(u.jsx)(o.a,{children:Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{path:"/auth",exact:!0,component:m}),Object(u.jsx)(i.a,{to:"/auth"})]})})});a.a.render(Object(u.jsx)(d,{children:Object(u.jsx)(V,{})}),document.getElementById("root"))},98:function(e,t,n){e.exports={Avatar:"UserInfo_Avatar__g-U7u"}}},[[145,1,2]]]);
//# sourceMappingURL=main.eb717c67.chunk.js.map