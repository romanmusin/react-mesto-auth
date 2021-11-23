(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(17),i=n.n(s),o=n(8),r=(n(29),n(22)),l=n(2),u=n(3),p=n.p+"static/media/header_logo.03b78ada.svg",d=n(0),j=function(e){var t=e.email,n=e.onSignOut;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),Object(d.jsxs)("div",{className:"header__info",children:[Object(d.jsx)(u.b,{exact:!0,path:"/sign-in",children:Object(d.jsx)(o.b,{to:"sign-up",className:"header__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(u.b,{exact:!0,path:"/sign-up",children:Object(d.jsx)(o.b,{to:"sign-in",className:"header__title",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsxs)(u.b,{exact:!0,path:"/",children:[Object(d.jsx)("p",{className:"header__email",children:t}),Object(d.jsx)("button",{onClick:n,className:"header__signout",children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]})},m=n.p+"static/media/pen.8667ac4a.svg",h=n.p+"static/media/plus-button.d86bb2ed.svg",b=n.p+"static/media/delete.a274c87c.svg",_=Object(a.createContext)();var f=function(e){var t=e.item,n=e.onCardClick,a=e.onCardLike,s=e.onClickDeleteCard,i=c.a.useContext(_),o=t.owner._id===i._id,r="element__delete ".concat(o?"element__delete_active":"element__delete"),l=t.likes.some((function(e){return e._id===i._id})),u="element__like ".concat(l?"element__like_active":"");return Object(d.jsxs)("article",{className:"element",children:[Object(d.jsxs)("div",{className:"element__picture",children:[Object(d.jsx)("img",{src:t.link,alt:t.name,className:"element__image",onClick:function(){n(t)}}),Object(d.jsx)("button",{type:"reset",className:r,style:{backgroundImage:"url(".concat(b,")")},onClick:function(){s(t)}})]}),Object(d.jsxs)("div",{className:"element__text-container",children:[Object(d.jsx)("h3",{className:"element__name",children:t.name}),Object(d.jsxs)("div",{className:"element__like-container",children:[Object(d.jsx)("button",{type:"button",className:u,onClick:function(){a(t)}}),Object(d.jsx)("p",{className:"element__like-amount",children:t.likes.length})]})]})]})},O=function(e){var t=c.a.useContext(_);return Object(d.jsxs)("main",{children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsx)("div",{onClick:e.onEditAvatar,className:"profile__avatar-container",children:Object(d.jsx)("img",{src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__button-container",children:[Object(d.jsx)("h1",{className:"profile__name",children:t.name}),Object(d.jsx)("button",{type:"button",onClick:e.onEditProfile,className:"profile__edit-button",children:Object(d.jsx)("img",{src:m,alt:"\u0438\u0437\u043c\u0435\u0438\u0442\u044c"})})]}),Object(d.jsx)("p",{className:"profile__text",children:t.about})]}),Object(d.jsx)("button",{type:"button",onClick:e.onAddPlace,className:"profile__plus",children:Object(d.jsx)("img",{src:h,alt:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"profile__plus-img"})})]}),Object(d.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(d.jsx)(f,{item:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onClickDeleteCard:e.onClickDeleteCard},t._id)}))})]})},g=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__text",children:"\xa9 2021 Mesto Russia"})})};var x=function(e){var t=e.item,n=e.onClose;return Object(d.jsx)("div",{className:"popup popup_image ".concat(t?"popup_visible":""),children:Object(d.jsxs)("div",{className:"popup__image-content",children:[Object(d.jsx)("button",{type:"button",className:"popup__image-content popup__close-button popup__image-close",onClick:n}),Object(d.jsx)("img",{src:t?t.link:"",alt:t?t.name:"",className:"popup__image-content popup__image-pic"}),Object(d.jsx)("h3",{className:"popup__image-content popup__image-text",children:t?t.name:""})]})})},v=n(20),C=n(21),N=new(function(){function e(t){Object(v.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(C.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._getResponse)}},{key:"getCardsInfo",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._getResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._getResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponse)}},{key:"toggleLike",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._getResponse)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-28",headers:{authorization:"75402bac-517a-4bd7-81a8-9a28f9725978","Content-Type":"application/json"}}),k=function(e){return Object(d.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_visible":""),children:Object(d.jsxs)("div",{className:"popup__content",children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),Object(d.jsx)("h2",{className:"popup__header",children:e.title}),Object(d.jsxs)("form",{name:e.name,className:"popup__form",onSubmit:e.onSubmit,children:[e.children,Object(d.jsx)("button",{type:"submit",className:"popup__save ".concat(e.isDisabled&&"popup__save_disabled"),children:e.buttonText})]})]})})};var y=function(e){var t=c.a.useContext(_),n=c.a.useState(""),a=Object(l.a)(n,2),s=a[0],i=a[1],o=c.a.useState(""),r=Object(l.a)(o,2),u=r[0],p=r[1];return c.a.useEffect((function(){i(t.name),p(t.about)}),[t,e.isOpen]),Object(d.jsxs)(k,{name:"edit_form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:u})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(d.jsx)("input",{type:"text",id:"name",className:"popup__input popup__input_type_name",name:"name",minLength:"2",maxLength:"40",required:!0,placeholder:"\u0418\u043c\u044f",value:s||"",onChange:function(e){i(e.target.value)}}),Object(d.jsx)("span",{className:"input-error input-error_valid",id:"name-error"}),Object(d.jsx)("input",{type:"text",id:"text",className:"popup__input popup__input_type_text",name:"job",minLength:"2",maxLength:"200",required:!0,placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",value:u||"",onChange:function(e){p(e.target.value)}}),Object(d.jsx)("span",{className:"input-error input-error_valid",id:"text-error"})]})};var S=function(e){var t=c.a.useRef();return Object(d.jsxs)(k,{name:"edit-avatar_form",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),t.current.value=""},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(d.jsx)("input",{ref:t,type:"url",id:"avatar-link",className:"popup__input popup__input_type_link",minLength:"2",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link"}),Object(d.jsx)("span",{className:"input-error input-error_valid",id:"avatar-link-error"})]})};var E=function(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],i=c.a.useState(""),o=Object(l.a)(i,2),r=o[0],u=o[1];return Object(d.jsxs)(k,{name:"add-card_form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:r,link:a}),u(""),s("")},buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(d.jsx)("input",{type:"text",id:"card-name",className:"popup__input popup__input_type_card",minLength:"2",maxLength:"30",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",value:r||"",onChange:function(e){u(e.target.value)}}),Object(d.jsx)("span",{className:"input-error input-error_valid",id:"card-name-error"}),Object(d.jsx)("input",{type:"url",id:"link",className:"popup__input popup__input_type_link",minLength:"2",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",value:a||"",onChange:function(e){s(e.target.value)}}),Object(d.jsx)("span",{className:"input-error input-error_valid",id:"link-error"})]})};var L=function(e){return Object(d.jsx)(k,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",closePopupClickOverlay:e.closePopupClickOverlay,onSubmit:function(t){t.preventDefault(),e.onDeleteCard(e.deleteCard)},isOpen:e.isOpen,onClose:e.onClose})};var T=function(e){var t=e.onLogin,n=c.a.useState(""),a=Object(l.a)(n,2),s=a[0],i=a[1],o=c.a.useState(""),r=Object(l.a)(o,2),u=r[0],p=r[1];return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),t({password:u,email:s})},children:[Object(d.jsx)("input",{type:"email",id:"email",className:"login__input",placeholder:"Email",onChange:function(e){i(e.target.value)},value:s}),Object(d.jsx)("input",{type:"password",id:"password",className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){p(e.target.value)},value:u}),Object(d.jsx)("button",{className:"login__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var w=function(e){var t=e.onRegister,n=c.a.useState(""),a=Object(l.a)(n,2),s=a[0],i=a[1],r=c.a.useState(""),u=Object(l.a)(r,2),p=u[0],j=u[1];return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)("h2",{className:"login__title",children:" \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f "}),Object(d.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),t({password:s,email:p})},children:[Object(d.jsx)("input",{type:"email",id:"email",className:"login__input",placeholder:"Email",onChange:function(e){j(e.target.value)},value:p}),Object(d.jsx)("input",{type:"password",id:"password",className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){i(e.target.value)},value:s}),Object(d.jsx)("button",{type:"submit",className:"login__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsx)("div",{className:"login__link",children:Object(d.jsx)(o.b,{className:"login__link_sign",to:"sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})})]})},P=n.p+"static/media/successReg.1b6082f8.svg",D=n.p+"static/media/failedReg.df8eddf6.svg";var A=function(e){var t=e.isOpen,n=e.onClose,a=e.message;return Object(d.jsx)("div",{className:"popup ".concat(t?"popup_visible":""),children:Object(d.jsxs)("div",{className:"popup__content popup__info",children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button popup__info_close",onClick:n}),Object(d.jsx)("img",{src:a.image,alt:a.text,className:"popup__info_image"}),Object(d.jsxs)("p",{className:"popup__info_text",children:[" ",a.text," "]})]})})},I=n(23),R=n(24),U=["component"];var J=function(e){var t=e.component,n=Object(R.a)(e,U);return Object(d.jsx)(u.b,{children:function(){return n.isLoggedIn?Object(d.jsx)(t,Object(I.a)({},n)):Object(d.jsx)(u.a,{to:"/sign-in"})}})},q="https://auth.nomoreparties.co";function F(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}var B=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),i=Object(l.a)(s,2),o=i[0],p=i[1],m=c.a.useState(!1),h=Object(l.a)(m,2),b=h[0],f=h[1],v=c.a.useState(!1),C=Object(l.a)(v,2),k=C[0],I=C[1],R=c.a.useState(null),U=Object(l.a)(R,2),B=U[0],G=U[1],z=c.a.useState(null),H=Object(l.a)(z,2),M=H[0],K=H[1],Q=c.a.useState({}),V=Object(l.a)(Q,2),W=V[0],X=V[1],Y=c.a.useState([]),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=c.a.useState(!1),ne=Object(l.a)(te,2),ae=ne[0],ce=ne[1],se=c.a.useState(!1),ie=Object(l.a)(se,2),oe=ie[0],re=ie[1],le=c.a.useState({image:"",text:""}),ue=Object(l.a)(le,2),pe=ue[0],de=ue[1],je=c.a.useState("email"),me=Object(l.a)(je,2),he=me[0],be=me[1],_e=Object(u.g)();var fe=function(){a(!1),p(!1),f(!1),G(null),K(null),I(!1),re(!1)};c.a.useEffect((function(){ae&&Promise.all([N.getUserInfo(),N.getCardsInfo()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];X(n),ee(a)})).catch((function(e){return console.log(e)}))}),[ae]),c.a.useEffect((function(){!function(){var e=localStorage.getItem("jwt");e&&(t=e,fetch("".concat(q,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(F)).then((function(e){be(e.data.email),ce(!0),_e.push("/")})).catch((function(e){console.log(e)}));var t}()})),c.a.useEffect((function(){var e=function(e){e.target.classList.contains("popup")&&fe()};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}),[]),c.a.useEffect((function(){var e=function(e){"Escape"===e.key&&fe()};return document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[]),c.a.useEffect((function(){localStorage.getItem("jwt")&&_e.push("/")}),[_e]);return Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)(_.Provider,{value:W,children:[Object(d.jsx)(j,{email:he,onSignOut:function(){localStorage.removeItem("jwt"),ce(!1),_e.push("/sign-in")}}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(J,{exact:!0,path:"/",isLoggedIn:ae,component:O,onEditAvatar:function(){return f(!0)},onEditProfile:function(){return a(!0)},onAddPlace:function(){return p(!0)},onCardClick:function(e){G(e)},cards:$,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===W._id}));N.toggleLike(e._id,!t).then((function(t){ee((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onClickDeleteCard:function(e){I(!0),K(e)}}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(T,{onLogin:function(e){var t=e.password,n=e.email;(function(e,t){return fetch("".concat(q,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(F)})(t,n).then((function(e){(e.token||200===e.statusCode)&&(ce(!0),localStorage.setItem("jwt",e.token),_e.push("/"),be(n))})).catch((function(e){re(!0),de({image:D,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})}))}})}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(w,{onRegister:function(e){(function(e,t){return fetch("".concat(q,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(F)})(e.password,e.email).then((function(e){(e.data._id||400!==e.statusCode)&&(be(e.data.email),_e.push("/sign-in"),de({image:P,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}))})).catch((function(e){de({image:D,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})})).finally((function(){re(!0)}))}})}),Object(d.jsx)(u.b,{path:"*",children:ae?Object(d.jsx)(u.a,{to:"/"}):Object(d.jsx)(u.a,{to:"/sign-in"})})]}),ae&&Object(d.jsx)(g,{}),Object(d.jsx)(y,{isOpen:n,onClose:fe,onUpdateUser:function(e){N.setUserInfo(e).then((function(e){X(e),fe()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(S,{isOpen:b,onClose:fe,onUpdateAvatar:function(e){N.editAvatar(e).then((function(e){X(e),fe()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(E,{isOpen:o,onClose:fe,onAddPlace:function(e){N.addCard(e).then((function(e){ee([e].concat(Object(r.a)($))),fe()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(L,{onClose:fe,onDeleteCard:function(e){N.deleteCard(e._id).then((function(){ee((function(t){return t.filter((function(t){return t._id!==e._id}))})),fe()})).catch((function(e){return console.log(e)}))},isOpen:k,deleteCard:M}),Object(d.jsx)(x,{item:B,onClose:fe}),Object(d.jsx)(A,{isOpen:oe,onClose:fe,message:pe})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(B,{})})}),document.getElementById("root")),G()}},[[36,1,2]]]);
//# sourceMappingURL=main.b6bc7a30.chunk.js.map