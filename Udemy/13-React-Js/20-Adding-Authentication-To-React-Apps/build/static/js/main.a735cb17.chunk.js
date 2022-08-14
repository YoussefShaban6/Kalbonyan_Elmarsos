(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={form:"ProfileForm_form__TxA8E",control:"ProfileForm_control__i8o7D",action:"ProfileForm_action__1x6ID"}},15:function(e,t,n){e.exports={header:"MainNavigation_header__1Q5sh",logo:"MainNavigation_logo__1FT6P"}},20:function(e,t,n){e.exports={profile:"UserProfile_profile__2I5mJ"}},21:function(e,t,n){e.exports={starting:"StartingPageContent_starting__16Cv_"}},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var o,c=n(17),r=n.n(c),i=n(7),s=(n(30),n(1)),a=n.n(s),l=n(2),j=n(11),u=n(0),d=a.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),b=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},h=function(e){var t,n=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expirationTime"),n=b(t);return n<=3600?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),null):{token:e,duration:n}}();n&&(t=n.token);var c=Object(s.useState)(t),r=Object(j.a)(c,2),i=r[0],a=r[1],l=!!i,h=Object(s.useCallback)((function(){a(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),o&&clearTimeout(o)}),[]);Object(s.useEffect)((function(){n&&(console.log(n.duration),o=setTimeout(h,n.duration))}),[n,h]);var m={token:i,isLoggedIn:l,login:function(e,t){a(e),localStorage.setItem("token",e),localStorage.setItem("expirationTime",t);var n=b(t);o=setTimeout(h,n)},logout:h};return Object(u.jsx)(d.Provider,{value:m,children:e.children})},m=d,g=n(15),O=n.n(g),x=function(){var e=Object(s.useContext)(m),t=e.isLoggedIn;return Object(u.jsxs)("header",{className:O.a.header,children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("div",{className:O.a.logo,children:"React Auth"})}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[!t&&Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/auth",children:"Login"})}),t&&Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/profile",children:"Profile"})}),t&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:function(){e.logout()},children:"Logout"})})]})})]})},f=function(e){return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)(x,{}),Object(u.jsx)("main",{children:e.children})]})},p=n(12),v=n.n(p),_=function(){var e=Object(l.g)(),t=Object(s.useRef)(),n=Object(s.useContext)(m);return Object(u.jsxs)("form",{className:v.a.form,onSubmit:function(o){o.preventDefault();var c=t.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA3I-aVVWo9BA5Gmm5oZNuUU8Ispr2Xols",{method:"POST",body:JSON.stringify({idToken:n,password:c,returnSecureToken:!1}),headers:{"content-type":"application/json"}}).then((function(t){e.replace("/")}))},children:[Object(u.jsxs)("div",{className:v.a.control,children:[Object(u.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(u.jsx)("input",{type:"password",id:"new-password",minLength:"7",ref:t})]}),Object(u.jsx)("div",{className:v.a.action,children:Object(u.jsx)("button",{children:"Change Password"})})]})},I=n(20),w=n.n(I),S=function(){return Object(u.jsxs)("section",{className:w.a.profile,children:[Object(u.jsx)("h1",{children:"Your User Profile"}),Object(u.jsx)(_,{})]})},k=n(9),y=n.n(k),N=function(){var e=Object(l.g)(),t=Object(s.useRef)(),n=Object(s.useRef)(),o=Object(s.useContext)(m),c=Object(s.useState)(!0),r=Object(j.a)(c,2),i=r[0],a=r[1],d=Object(s.useState)(!1),b=Object(j.a)(d,2),h=b[0],g=b[1];return Object(u.jsxs)("section",{className:y.a.auth,children:[Object(u.jsx)("h1",{children:i?"Login":"Sign Up"}),Object(u.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r,s=t.current.value,a=n.current.value;g(!0),r=i?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3I-aVVWo9BA5Gmm5oZNuUU8Ispr2Xols":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3I-aVVWo9BA5Gmm5oZNuUU8Ispr2Xols",fetch(r,{method:"POST",body:JSON.stringify({email:s,password:a,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return g(!1),e.ok?e.json():e.json().then((function(e){var t="Authentication failed";throw e&&e.error&&e.error.message&&(t=e.error.message),new Error(t)}))})).then((function(t){var n=new Date((new Date).getTime()+1e3*t.expiresIn);o.login(t.idToken,n),e.replace("/")})).catch((function(e){alert(e.message)}))},children:[Object(u.jsxs)("div",{className:y.a.control,children:[Object(u.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(u.jsx)("input",{type:"email",id:"email",required:!0,ref:t})]}),Object(u.jsxs)("div",{className:y.a.control,children:[Object(u.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(u.jsx)("input",{type:"password",id:"password",required:!0,ref:n})]}),Object(u.jsxs)("div",{className:y.a.actions,children:[!h&&Object(u.jsx)("button",{children:i?"Login":"Create Account"}),h&&Object(u.jsx)("p",{children:"Sending request..."}),Object(u.jsx)("button",{type:"button",className:y.a.toggle,onClick:function(){a((function(e){return!e}))},children:i?"Create new account":"Login with existing account"})]})]})]})},T=function(){return Object(u.jsx)(N,{})},A=n(21),P=n.n(A),C=function(){return Object(u.jsx)("section",{className:P.a.starting,children:Object(u.jsx)("h1",{children:"Welcome on Board!"})})},L=function(){return Object(u.jsx)(C,{})};var F=function(){var e=Object(s.useContext)(m);return Object(u.jsx)(f,{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/",exact:!0,children:Object(u.jsx)(L,{})}),!e.isLoggedIn&&Object(u.jsx)(l.b,{path:"/auth",children:Object(u.jsx)(T,{})}),Object(u.jsxs)(l.b,{path:"/profile",children:[e.isLoggedIn&&Object(u.jsx)(S,{}),!e.isLoggedIn&&Object(u.jsx)(l.a,{to:"/auth"})]}),Object(u.jsx)(l.b,{path:"*",children:Object(u.jsx)(l.a,{to:"/"})})]})})};r.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(h,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(F,{})})}))},9:function(e,t,n){e.exports={auth:"AuthForm_auth__33pDy",control:"AuthForm_control__Lfozq",actions:"AuthForm_actions__avBUq",toggle:"AuthForm_toggle__AxV47"}}},[[39,1,2]]]);
//# sourceMappingURL=main.a735cb17.chunk.js.map