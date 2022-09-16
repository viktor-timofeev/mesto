(()=>{"use strict";var e={form:".popup__form",button:".popup__submit-button",input:".popup__input",inputError:"popup__input_type_error",buttonActive:"popup__submit-button_type_active",buttonInactive:"popup__submit-button_type_inactive"},t={popupProfileEdit:".popup_function_edit",popupCardAdd:".popup_function_add",popupImage:".popup_function_closeup",buttonProfileEdit:".profile__edit-button",buttonCardAdd:".profile__add-button",formPopupProfileEdit:".popup__form_function_edit",formPopupAddCard:".popup__form_function_add",inputCardName:".popup__input_type_name",inputCardLink:".popup__input_type_link",profileTitle:".profile__title",profileInfo:".profile__subtitle",templateCard:".elements-item",cardsList:".elements",titleInputValue:".popup__input_type_title",occupationInputValue:".popup__input_type_subtitle"},n=document.querySelector(t.buttonProfileEdit),r=document.querySelector(t.buttonCardAdd),o=document.querySelector(t.formPopupProfileEdit),i=document.querySelector(t.formPopupAddCard);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}document.querySelector(t.inputCardName),document.querySelector(t.inputCardLink),document.querySelector(t.titleInputValue),document.querySelector(t.occupationInputValue);var c=function(){function e(t,n){var r=this,o=t.data,i=t.handleCardClick,a=t.handleLikeCard,c=t.handleDeleteCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_handleLikeCard",(function(){r._like.classList.toggle("elements__like_state_active")})),u(this,"removeCard",(function(){r._element.remove(),r._element=null})),this._text=o.name,this._link=o.link,this._likes=o.likes,this._cardId=o._id,this._handleCardClick=i,this._handleLikeCard=a,this._handleDeleteCard=c,this._templateSelector=n,this._element=document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0),this._like=this._element.querySelector(".elements__like"),this._image=this._element.querySelector(".elements__image"),this._trash=this._element.querySelector(".elements__trash"),this._title=this._element.querySelector(".elements__title")}var t,n;return t=e,(n=[{key:"generate",value:function(){return this._image.src=this._link,this._image.alt=this._text,this._updateLikesView,this._setEventListeners(),this._title.textContent=this._text,this._element}},{key:"_handleImageClick",value:function(){this._handleCardClick({title:this._text,link:this._link})}},{key:"_updateLikesView",value:function(){}},{key:"setLikesInfo",value:function(e){}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",this._handleLikeCard(this)),this._trash.addEventListener("click",this._handleDeleteCard(this)),this._image.addEventListener("click",(function(){return e._handleCardClick(e._title,e._link)}))}},{key:"isLiked",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id===e._userId})))}},{key:"id",value:function(){return this._cardId}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=s((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_handleFormInput",(function(e){var t=e.target;t.validity.valid?r._hideFieldError(t):r._showFieldError(t),r._setSubmitButtonState()})),p(this,"_showFieldError",(function(e){r._form.querySelector(".".concat(e.name,"-error")).textContent=e.validationMessage,e.classList.add(r._config.inputError)})),p(this,"_hideFieldError",(function(e){r._form.querySelector(".".concat(e.name,"-error")).textContent="",e.classList.remove(r._config.inputError)})),p(this,"_setSubmitButtonState",(function(){r._form.checkValidity()?(r._button.removeAttribute("disabled"),r._button.classList.remove(r._config.buttonInactive),r._button.classList.add(r._config.buttonActive)):(r._button.setAttribute("disabled",!0),r._button.classList.add(r._config.buttonInactive),r._button.classList.remove(r._config.buttonActive))})),p(this,"enableValidation",(function(){r._form.addEventListener("input",(function(e){return r._handleFormInput(e)}))})),p(this,"resetValidation",(function(){r._setSubmitButtonState(),r._inputList.forEach((function(e){r._hideFieldError(e)}))})),this._config=t,this._form=n,this._button=this._form.querySelector(this._config.button),this._inputList=Array.from(this._form.querySelectorAll(this._config.input))}));function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popup=document.querySelector(n._popupSelector),n._image=n._popup.querySelector(".popup__image"),n._caption=n._popup.querySelector(".popup__image-caption"),k((t=g(n),C(a.prototype)),"close",t).call(t),n}return t=a,(n=[{key:"open",value:function(e){this._image.src=e.link,this._image.alt=e.title,this._caption.textContent=e.title,k(C(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._closeButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleClickClose",value:function(e){e.target===this._popup&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",(function(t){return e._handleClickClose(t)}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t),this._profileInfo=document.querySelector(n),this._profileAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileInfo.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileInfo.textContent=e.about,this._profileAvatar.src=e.avatar}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.json()}))}},{key:"setUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name,about})}).then((function(e){return e.json()}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.json()}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.json()}))}},{key:"getAppInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.json()}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=new f(e,o);T.enableValidation();var x=new f(e,i);x.enableValidation();var V=new h({renderer:function(e){V.addItem(R(e))}},t.cardsList),D=null,U=new S(t.popupImage);U.setEventListeners();var F=new E(t.profileTitle,t.profileInfo,t.profileAvatar),N=new P({baseUrl:"https://nomoreparties.co/v1/cohort-50",headers:{authorization:"5d18e568-66bc-4809-86d6-8fc39fab9075","content-type":"application/json"}});Promise.all([N.getUserInfo(),N.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];D=o._id,i.reverse(),V.renderItems(i),F.setUserInfo({userName:o.name,userDescription:o.about,userAvatar:o.avatar})})).catch((function(e){return console.log("Ошибка загрузки данных: ".concat(e))})),r.addEventListener("click",(function(){popupWithFormCardAdd.open(),x.resetValidation()})),n.addEventListener("click",(function(){popupWithFormProfileEdit.open(),T.resetValidation();var e=F.getUserInfo();popupWithFormProfileEdit.setInputValues(e)}));var R=function(e){return new c({data:L(L({},cardData),{},{currentUserId:D}),handleCardClick:function(){U.open(e)},handleLikeCard:function(e){N.changeLikeStatus(e.id(),!e.isLiked()).then((function(t){e.setLikesInfo(L({},t))})).catch((function(e){return console.log("Ошибка изменения статуса лайка: ".concat(e))}))},handleDeleteIconClick:function(e){cardInfoSubmit.open(),cardInfoSubmit.setSubmitAction((function(){N.removeCard(e.id()).then((function(){e.removeCard(),cardInfoSubmit.close()})).catch((function(e){return console.log("При удалении карточки ошибка: ".concat(e))}))}))}},t.templateCard).generate()}})();