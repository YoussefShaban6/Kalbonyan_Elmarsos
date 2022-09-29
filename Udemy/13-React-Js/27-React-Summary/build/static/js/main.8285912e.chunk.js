(this["webpackJsonpreact-course"]=this["webpackJsonpreact-course"]||[]).push([[0],{12:function(e,t,c){e.exports={item:"MeetupItem_item__ssGaK",image:"MeetupItem_image__2Om5E",content:"MeetupItem_content__hplBB",actions:"MeetupItem_actions__1phs8"}},13:function(e,t,c){e.exports={header:"MainNavigation_header__2y_LT",logo:"MainNavigation_logo__15IH1",active:"MainNavigation_active__1axKW",badge:"MainNavigation_badge__1lIoJ"}},18:function(e,t,c){e.exports={card:"Card_card__3qLd9"}},19:function(e,t,c){e.exports={list:"MeetupList_list__11n5B"}},22:function(e,t,c){e.exports={main:"Layout_main__3gbkG"}},31:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var i=c(1),r=c(17),n=c.n(r),s=c(7),a=(c(31),c(2)),o=c(23),j=c(11),d=c(18),l=c.n(d),u=c(0);var b=function(e){return Object(u.jsx)("div",{className:l.a.card,children:e.children})},h=c(12),O=c.n(h),x=Object(i.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}});function m(e){var t=Object(i.useState)([]),c=Object(j.a)(t,2),r=c[0],n=c[1];var s={favorites:r,totalFavorites:r.length,addFavorite:function(e){n((function(t){return t.concat(e)}))},removeFavorite:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return r.some((function(t){return t.id===e}))}};return Object(u.jsx)(x.Provider,{value:s,children:e.children})}var v=x;var f=function(e){var t=Object(i.useContext)(v),c=t.itemIsFavorite(e.id);return Object(u.jsx)("li",{className:O.a.item,children:Object(u.jsxs)(b,{children:[Object(u.jsx)("div",{className:O.a.image,children:Object(u.jsx)("img",{src:e.image,alt:e.title})}),Object(u.jsxs)("div",{className:O.a.content,children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("address",{children:e.address}),Object(u.jsx)("p",{children:e.description})]}),Object(u.jsx)("div",{className:O.a.actions,children:Object(u.jsx)("button",{onClick:function(){c?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,description:e.description,image:e.image,address:e.address})},children:c?"Remove from Favorites":"To Favorites"})})]})})},p=c(19),_=c.n(p);var g=function(e){return Object(u.jsx)("ul",{className:_.a.list,children:e.meetups.map((function(e){return Object(u.jsx)(f,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})};var N=function(){var e=Object(i.useState)(!0),t=Object(j.a)(e,2),c=t[0],r=t[1],n=Object(i.useState)([]),s=Object(j.a)(n,2),a=s[0],d=s[1];return Object(i.useEffect)((function(){r(!0),fetch("https://react-summary-1cc29-default-rtdb.firebaseio.com/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var i=Object(o.a)({id:c},e[c]);t.push(i)}r(!1),d(t)}))}),[]),c?Object(u.jsx)("section",{children:Object(u.jsx)("p",{children:"Loading..."})}):Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:"All Meetups"}),Object(u.jsx)(g,{meetups:a})]})},F=c(9),M=c.n(F);var y=function(e){var t=Object(i.useRef)(),c=Object(i.useRef)(),r=Object(i.useRef)(),n=Object(i.useRef)();return Object(u.jsx)(b,{children:Object(u.jsxs)("form",{className:M.a.form,onSubmit:function(i){i.preventDefault();var s={title:t.current.value,image:c.current.value,address:r.current.value,description:n.current.value};e.onAddMeetup(s)},children:[Object(u.jsxs)("div",{className:M.a.control,children:[Object(u.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(u.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(u.jsxs)("div",{className:M.a.control,children:[Object(u.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),Object(u.jsx)("input",{type:"url",required:!0,id:"image",ref:c})]}),Object(u.jsxs)("div",{className:M.a.control,children:[Object(u.jsx)("label",{htmlFor:"address",children:"Address"}),Object(u.jsx)("input",{type:"text",required:!0,id:"address",ref:r})]}),Object(u.jsxs)("div",{className:M.a.control,children:[Object(u.jsx)("label",{htmlFor:"description",children:"Description"}),Object(u.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:n})]}),Object(u.jsx)("div",{className:M.a.actions,children:Object(u.jsx)("button",{children:"Add Meetup"})})]})})};var I=function(){var e=Object(a.f)();return Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:"Add New Meetup"}),Object(u.jsx)(y,{onAddMeetup:function(t){fetch("https://react-summary-1cc29-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})};var w=function(){var e,t=Object(i.useContext)(v);return e=0===t.totalFavorites?Object(u.jsx)("p",{children:"You got no favorites yet. Start adding some?"}):Object(u.jsx)(g,{meetups:t.favorites}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:"My Favorites"}),e]})},A=c(13),C=c.n(A);var S=function(){var e=Object(i.useContext)(v);return Object(u.jsxs)("header",{className:C.a.header,children:[Object(u.jsx)("div",{className:C.a.logo,children:"React Meetups"}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/",children:"All Meetups"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/new-meetup",children:"Add New Meetup"})}),Object(u.jsx)("li",{children:Object(u.jsxs)(s.b,{to:"/favorites",children:["My Favorites",Object(u.jsx)("span",{className:C.a.badge,children:e.totalFavorites})]})})]})})]})},R=c(22),q=c.n(R);var J=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(S,{}),Object(u.jsx)("main",{className:q.a.main,children:e.children})]})};var L=function(){return Object(u.jsx)(J,{children:Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{path:"/",exact:!0,children:Object(u.jsx)(N,{})}),Object(u.jsx)(a.a,{path:"/new-meetup",children:Object(u.jsx)(I,{})}),Object(u.jsx)(a.a,{path:"/favorites",children:Object(u.jsx)(w,{})})]})})};n.a.render(Object(u.jsx)(m,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(L,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={form:"NewMeetupForm_form__2sjJr",control:"NewMeetupForm_control__12I2E",actions:"NewMeetupForm_actions__3hjen"}}},[[40,1,2]]]);
//# sourceMappingURL=main.8285912e.chunk.js.map