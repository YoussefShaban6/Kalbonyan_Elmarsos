(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModel_backdrop__1fdJW",modal:"ErrorModel_modal__xRZrw",header:"ErrorModel_header__2ZSgG",content:"ErrorModel_content__2tdoB",actions:"ErrorModel_actions__1INfL"}},,,,,function(e,t,n){e.exports={card:"Card_card__2f1OY"}},function(e,t,n){e.exports={button:"Button_button__1x_ng"}},function(e,t,n){e.exports={input:"AddUser_input__3Q2sA"}},function(e,t,n){e.exports={users:"UsersList_users__3clmE"}},,,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),s=(n(21),n(12)),o=n(2),i=n(8),l=n.n(i),d=n(0),u=function(e){return Object(d.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},j=n(9),b=n.n(j),m=function(e){return Object(d.jsx)("button",{className:b.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},h=n(3),O=n.n(h),x=function(e){return console.log(e),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:O.a.backdrop,onClick:e.onConfirm}),Object(d.jsxs)(u,{className:O.a.modal,children:[Object(d.jsx)("header",{className:O.a.header,children:Object(d.jsx)("h2",{children:e.type.title})}),Object(d.jsx)("div",{className:O.a.content,children:Object(d.jsx)("div",{children:e.type.message})}),Object(d.jsx)("footer",{className:O.a.actions,children:Object(d.jsx)(m,{onClick:e.onConfirm,children:"Okay"})})]})]})},p=n(10),f=n.n(p),_=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1],b=Object(c.useState)(),h=Object(o.a)(b,2),O=h[0],p=h[1];return Object(d.jsxs)("div",{children:[O&&Object(d.jsx)(x,{type:O,onConfirm:function(){p(null)}}),Object(d.jsx)(u,{className:f.a.input,children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==r.trim().length&&0!==l.trim().length?+l<1?p({title:"Invalid age",message:"Please enter a valid age (>0)."}):(e.onAddUser(r,l),a(""),j("")):p({title:"Invalid input",message:"please enter a valid name and age (non-empty values)."})},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{id:"username",type:"text",value:r,onChange:function(e){a(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(d.jsx)("input",{id:"age",type:"number",value:l,onChange:function(e){j(e.target.value)}}),Object(d.jsx)(m,{type:"submit",children:"Add User"})]})})]})},g=n(11),v=n.n(g),y=function(e){return Object(d.jsx)(u,{className:v.a.users,children:Object(d.jsx)("ul",{children:e.users.map((function(e){return Object(d.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var N=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{onAddUser:function(e,t){r((function(n){return[{name:e,age:t,id:Math.round(2e4*Math.random()).toString}].concat(Object(s.a)(n))}))}}),Object(d.jsx)(y,{users:n})]})};a.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(N,{}))}],[[23,1,2]]]);
//# sourceMappingURL=main.439fcd80.chunk.js.map