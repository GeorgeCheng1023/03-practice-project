(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2GtyY",total:"Cart_total__3RBTj",actions:"Cart_actions__2FdNC","button--alt":"Cart_button--alt__1a5Uz",button:"Cart_button__2HY5a"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__195I6",summary:"CartItem_summary__LUDyj",price:"CartItem_price__2H0uJ",amount:"CartItem_amount__2TQBo",actions:"CartItem_actions__W_z-5"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__acHhn",icon:"HeaderCartButton_icon__Kw1Dy",badge:"HeaderCartButton_badge__7MhOm",bump:"HeaderCartButton_bump__Pcwxb"}},,function(e,t,n){e.exports={meal:"MealsItem_meal__2qWUZ",description:"MealsItem_description__1u1TR",price:"MealsItem_price__3ywwS"}},function(e,t,n){e.exports={header:"Header_header__1Vzrg","main-image":"Header_main-image__2JRo5"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2MaU2",modal:"Modal_modal__1nnh_","slide-down":"Modal_slide-down__xb2NH"}},,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__2vKvo","meals-appear":"AvailableMeals_meals-appear__WTsox"}},function(e,t,n){e.exports={card:"Card_card__3eGxe"}},function(e,t,n){e.exports={form:"MealItemForm_form__3wB1I"}},function(e,t,n){e.exports={input:"Input_input__1HMib"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1P8ed"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(12),a=n.n(c),i=(n(25),n(9)),r=n.n(i),o=n(5),s=n(1),l=n.n(s),m=n(0),d=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=n(6),j=n.n(u),b=n(2),x=l.a.createContext(),h=function(e,t){if("ADD"===t.type){var n=e.totalAmount+t.item.amount,c=e.totalPrice+t.item.amount*t.item.price;return{items:e.items.findIndex((function(e){return e.id===t.item.id}))>-1?e.items.map((function(e){return e.id===t.item.id?Object(b.a)(Object(b.a)({},e),{},{amount:e.amount+t.item.amount}):e})):e.items.concat(t.item),totalAmount:n,totalPrice:c}}if("REMOVE"===t.type){var a=e.totalAmount-t.item.amount,i=e.totalPrice-t.item.amount*t.item.price,r=e.items.findIndex((function(e){return e.id===t.item.id}));return{items:e.items[r].amount===t.item.amount?e.items.filter((function(e){return e.id!==t.item.id})):e.items.map((function(e){return e.id===t.item.id?Object(b.a)(Object(b.a)({},e),{},{amount:e.amount-t.item.amount}):e})),totalAmount:a,totalPrice:i}}},O={items:[],totalAmount:0,totalPrice:0},p=function(e){var t=Object(s.useState)(!1),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(s.useReducer)(h,O),r=Object(o.a)(i,2),l=r[0],d=r[1],u={items:l.items,totalAmount:l.totalAmount,totalPrice:l.totalPrice,addItem:function(e){d({type:"ADD",item:e})},removeItem:function(e){d({type:"REMOVE",item:e})},isDisplay:c,onShow:function(e){a(!0)},onHide:function(e){a(!1)}};return Object(m.jsx)(x.Provider,{value:u,children:e.children})},_=x,f=function(e){var t=Object(s.useContext)(_),n=Object(s.useState)(!1),c=Object(o.a)(n,2),a=c[0],i=c[1];return Object(s.useEffect)((function(){if(0!==t.items.length){i(!0);var e=setTimeout((function(){i(!1)}),300);return function(){clearTimeout(e)}}}),[t.items]),Object(m.jsxs)("button",{className:"".concat(j.a.button," ").concat(a&&j.a.bump),onClick:t.onShow,children:[Object(m.jsxs)("span",{className:j.a.icon,children:[" ",Object(m.jsx)(d,{})]}),Object(m.jsx)("span",{children:" Your Cart "}),Object(m.jsx)("span",{className:j.a.badge,children:t.totalAmount})]})},v=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{className:r.a.header,children:[Object(m.jsx)("h1",{children:"Order your meal"}),Object(m.jsx)(f,{})]}),Object(m.jsx)("div",{className:r.a["main-image"],children:Object(m.jsx)("img",{alt:"header",src:"https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"})})]})},C=n(13),g=n.n(C),y=n(14),N=n.n(y),w=function(e){return Object(m.jsx)("div",{className:N.a.card,children:e.children})},A=n(8),I=n.n(A),M=n(15),H=n.n(M),B=n(16),z=n.n(B),P=l.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:z.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(b.a)({ref:t},e.input))]})})),R=function(e){var t=e.meal,n=Object(s.useRef)();return Object(m.jsxs)("form",{className:H.a.form,onSubmit:function(t){t.preventDefault();var c=+n.current.value;e.onAddItemToCart(c)},children:[Object(m.jsx)(P,{ref:n,label:"Amount",input:{id:"amount_".concat(t.id),type:"number",min:"0",max:"10",step:"1",defaultValue:"0"}})," ",Object(m.jsx)("button",{children:"+ Add"})]})},F=function(e){var t=e.meal,n=Object(s.useContext)(_);return Object(m.jsxs)("li",{className:I.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:t.name}),Object(m.jsx)("div",{className:I.a.description,children:t.description}),Object(m.jsxs)("div",{className:I.a.price,children:["$",t.price.toFixed(2)]})]}),Object(m.jsx)("div",{children:Object(m.jsx)(R,{meal:t,onAddItemToCart:function(e){n.addItem({id:t.id,name:t.name,price:t.price,amount:e})}})})]})},S=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],k=function(e){var t=S.map((function(e){return Object(m.jsx)(F,{id:e.id,meal:e},e.id)}));return Object(m.jsx)("div",{className:g.a.meals,children:Object(m.jsx)("ul",{children:Object(m.jsx)(w,{children:t})})})},D=n(17),V=n.n(D),T=function(){return Object(m.jsxs)("section",{className:V.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},E=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{}),Object(m.jsx)(k,{})]})},J=n(3),U=n.n(J),Y=n(10),G=n.n(Y),W=n(7),$=n.n(W),q=function(e){return Object(m.jsx)("div",{className:G.a.backdrop})},K=function(e){return Object(m.jsx)("div",{className:G.a.modal,children:Object(m.jsx)("div",{className:"modal-content",children:e.children})})},L=function(e){return Object(m.jsxs)(m.Fragment,{children:[$.a.createPortal(Object(m.jsx)(q,{}),document.getElementById("overlay")),$.a.createPortal(Object(m.jsx)(K,{children:e.children}),document.getElementById("overlay"))]})},Q=n(4),Z=n.n(Q),X=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"100%",height:"100%",viewBox:"-20 -30 500 500",children:Object(m.jsx)("g",{children:Object(m.jsx)("g",{children:Object(m.jsxs)("g",{children:[Object(m.jsx)("path",{d:"M382.078,57.069h-89.78C289.128,25.075,262.064,0,229.249,0S169.37,25.075,166.2,57.069H76.421\r c-26.938,0-48.854,21.916-48.854,48.854c0,26.125,20.613,47.524,46.429,48.793V399.5c0,32.533,26.467,59,59,59h192.508\r c32.533,0,59-26.467,59-59V154.717c25.816-1.269,46.429-22.668,46.429-48.793C430.933,78.985,409.017,57.069,382.078,57.069z\r M229.249,30c16.244,0,29.807,11.673,32.76,27.069h-65.52C199.442,41.673,213.005,30,229.249,30z M354.503,399.501\r c0,15.991-13.009,29-29,29H132.995c-15.991,0-29-13.009-29-29V154.778c12.244,0,240.932,0,250.508,0V399.501z M382.078,124.778\r c-3.127,0-302.998,0-305.657,0c-10.396,0-18.854-8.458-18.854-18.854S66.025,87.07,76.421,87.07h305.657\r c10.396,0,18.854,8.458,18.854,18.854S392.475,124.778,382.078,124.778z"}),Object(m.jsx)("path",{d:"M229.249,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.715-15-15-15c-8.284,0-15,6.716-15,15v173.705\r C214.249,385.607,220.965,392.323,229.249,392.323z"}),Object(m.jsx)("path",{d:"M306.671,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15s-15,6.716-15,15v173.705\r C291.671,385.607,298.387,392.323,306.671,392.323z"}),Object(m.jsx)("path",{d:"M151.828,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v173.705\r C136.828,385.607,143.544,392.323,151.828,392.323z"})]})})})})},ee=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:Z.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:Z.a.summary,children:[Object(m.jsx)("span",{className:Z.a.price,children:t}),Object(m.jsxs)("span",{className:Z.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:Z.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"}),Object(m.jsx)("button",{onClick:e.onRemoveAll,children:Object(m.jsx)(X,{})})]})]})},te=function(e){var t=Object(s.useContext)(_),n=function(e){return t.addItem(Object(b.a)(Object(b.a)({},e),{},{amount:1}))},c=function(e){return t.removeItem(Object(b.a)(Object(b.a)({},e),{},{amount:1}))},a=function(e){return t.removeItem(Object(b.a)({},e))};return Object(m.jsx)(m.Fragment,{children:t.isDisplay&&Object(m.jsxs)(L,{children:[Object(m.jsx)("ul",{className:U.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)(ee,{name:e.name,amount:e.amount,price:e.price,item:e,onAdd:n.bind(null,e),onRemove:c.bind(null,e),onRemoveAll:a.bind(null,e)},e.id)}))}),Object(m.jsxs)("div",{className:U.a.total,children:[Object(m.jsx)("span",{children:"Total"}),Object(m.jsx)("span",{children:"$".concat(t.totalPrice.toFixed(2))})]}),Object(m.jsxs)("div",{className:U.a.actions,children:[Object(m.jsx)("button",{className:U.a["button--alt"],onClick:t.onHide,children:"Close"}),Object(m.jsx)("button",{className:U.a.button,children:"Order"})]})]})})};var ne=function(){return Object(m.jsxs)(p,{children:[Object(m.jsx)(v,{}),Object(m.jsxs)("main",{children:[Object(m.jsx)(te,{}),Object(m.jsx)(E,{})]})]})};a.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(ne,{}))}],[[27,1,2]]]);
//# sourceMappingURL=main.529ede18.chunk.js.map