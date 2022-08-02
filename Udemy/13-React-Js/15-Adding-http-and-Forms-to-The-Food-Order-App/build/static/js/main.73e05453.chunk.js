(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__1zg9s",control:"Checkout_control__11DtP",actions:"Checkout_actions__1E5WZ",submit:"Checkout_submit__3soiv",invalid:"Checkout_invalid__cULiP"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1B2v8",total:"Cart_total__3okgK",actions:"Cart_actions__xS90h","button--alt":"Cart_button--alt___MRaM",button:"Cart_button__XP_He"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1ZRp0",summary:"CartItem_summary__1u2BY",price:"CartItem_price__3uvY6",amount:"CartItem_amount__3s6a0",actions:"CartItem_actions__22tVD"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__9ixFg",icon:"HeaderCartButton_icon__JVupf",badge:"HeaderCartButton_badge___LeFk",bump:"HeaderCartButton_bump__2wt-o"}},,,,function(e,t,n){e.exports={meal:"MealItem_meal__ckn-U",description:"MealItem_description__P_hSX",price:"MealItem_price__1ZAz8"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1S_Z1","meals-appear":"AvailableMeals_meals-appear__1qAi-",MealsLoading:"AvailableMeals_MealsLoading__39xfa",MealsError:"AvailableMeals_MealsError__2qj_V"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1Pgns",modal:"Modal_modal__2Z0_n","slide-down":"Modal_slide-down__TCn7p"}},function(e,t,n){e.exports={header:"Header_header__2i_Cg","main-image":"Header_main-image__1nDyQ"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__2mU1Z"}},function(e,t,n){e.exports={card:"Card_card__2zL6T"}},function(e,t,n){e.exports={input:"Input_input__2GUUp"}},function(e,t,n){e.exports={form:"MealItemForm_form__3kt2L"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(19),a=n.n(c),r=(n(31),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),d=n(9),j=n.n(d),m=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(u).items,d=s.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(c?j.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(16),x=n.n(O),f=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("header",{className:x.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:x.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},h=n(20),p=n.n(h),_=function(){return Object(o.jsxs)("section",{className:p.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n(12),g=n(21),y=n.n(g),N=function(e){return Object(o.jsx)("div",{className:y.a.card,children:e.children})},k=n(5),A=n(22),M=n.n(A),S=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:M.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(k.a)({ref:t},e.input))]})})),w=n(23),I=n.n(w),F=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:I.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(o.jsx)(S,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!c&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},R=n(13),P=n.n(R),E=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:P.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:P.a.description,children:e.description}),Object(o.jsx)("div",{className:P.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(F,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},H=n(14),D=n.n(H),B=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),s=Object(r.a)(a,2),l=s[0],u=s[1],d=Object(i.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(C.a)(Object(v.a)().mark((function e(){var t,n,a,r;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-order-app-f22f7-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:D.a.MealsLoading,children:Object(o.jsx)("p",{children:"Loading..."})});if(m)return Object(o.jsx)("section",{className:D.a.MealsError,children:Object(o.jsx)("p",{children:m})});var O=n.map((function(e){return Object(o.jsx)(E,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:D.a.meals,children:Object(o.jsx)(N,{children:Object(o.jsx)("ul",{children:O})})})},L=function(){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(B,{})]})},T=n(10),z=n.n(T),V=n(15),Z=n.n(V),U=function(e){return Object(o.jsx)("div",{className:Z.a.backdrop,onClick:e.onClose})},Y=function(e){return Object(o.jsx)("div",{className:Z.a.modal,children:Object(o.jsx)("div",{className:Z.a.content,children:e.children})})},J=document.getElementById("overlays"),q=function(e){return Object(o.jsxs)(i.Fragment,{children:[z.a.createPortal(Object(o.jsx)(U,{onClose:e.onClose}),J),z.a.createPortal(Object(o.jsx)(Y,{children:e.children}),J)]})},$=n(7),X=n.n($),G=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:X.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:X.a.summary,children:[Object(o.jsx)("span",{className:X.a.price,children:t}),Object(o.jsxs)("span",{className:X.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:X.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=n(4),Q=n.n(K),W=n(3),ee=n.n(W),te=function(e){return""===e.trim()},ne=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),d=Object(i.useRef)(),j="".concat(ee.a.control," ").concat(c.name?"":ee.a.invalid),m="".concat(ee.a.control," ").concat(c.street?"":ee.a.invalid),b="".concat(ee.a.control," ").concat(c.postalCode?"":ee.a.invalid),O="".concat(ee.a.control," ").concat(c.city?"":ee.a.invalid);return Object(o.jsxs)("form",{className:ee.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=l.current.value,r=u.current.value,i=d.current.value,o=!te(n),j=!te(c),m=!te(i),b=5===r.trim().length;a({name:o,street:j,city:m,postalCode:b}),o&&j&&m&&b&&e.onConfirm({name:n,street:c,city:i,postalCode:r})},children:[Object(o.jsxs)("div",{className:j,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(o.jsx)("p",{children:"Please enter a valid name!"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!c.street&&Object(o.jsx)("p",{children:"Please enter a valid street!"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!c.postalCode&&Object(o.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(o.jsx)("p",{children:"Please enter a valid city!"})]}),Object(o.jsxs)("div",{className:ee.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:ee.a.submit,children:"Confirm"})]})]})},ce=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],l=Object(i.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),x=O[0],f=O[1],h=Object(i.useContext)(u),p="$".concat(h.totalAmount.toFixed(2)),_=h.items.length>0,g=function(e){h.removeItem(e)},y=function(e){h.addItem(e)},N=function(){var e=Object(C.a)(Object(v.a)().mark((function e(t){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://food-order-app-f22f7-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:h.items})});case 3:m(!1),f(!0),h.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(o.jsx)("ul",{className:Q.a["cart-items"],children:h.items.map((function(e){return Object(o.jsx)(G,{name:e.name,amount:e.amount,price:e.price,onRemove:g.bind(null,e.id),onAdd:y.bind(null,e)},e.id)}))}),A=Object(o.jsxs)("div",{className:Q.a.actions,children:[Object(o.jsx)("button",{className:Q.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:Q.a.button,onClick:function(){a(!0)},children:"Order"})]}),M=Object(o.jsxs)(s.a.Fragment,{children:[k,Object(o.jsxs)("div",{className:Q.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:p})]}),c&&Object(o.jsx)(ne,{onConfirm:N,onCancel:e.onClose}),!c&&A]}),S=Object(o.jsx)("p",{children:"Sending order data..."}),w=Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("p",{children:"Successfully sent the order!"}),Object(o.jsx)("div",{className:Q.a.actions,children:Object(o.jsx)("button",{className:Q.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(q,{onClose:e.onClose,children:[!j&&!x&&M,j&&S,!j&&x&&w]})},ae=n(17),re={items:[],totalAmount:0},ie=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(k.a)(Object(k.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(k.a)(Object(k.a)({},l),{},{amount:l.amount-1});(s=Object(ae.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,re},se=function(e){var t=Object(i.useReducer)(ie,re),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var oe=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(se,{children:[n&&Object(o.jsx)(ce,{onClose:function(){c(!1)}}),Object(o.jsx)(f,{onShowCart:function(){c(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(L,{})})]})};a.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(oe,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.73e05453.chunk.js.map