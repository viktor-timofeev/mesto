(()=>{"use strict";var e={form:".popup__form",button:".popup__submit-button",input:".popup__input",inputError:"popup__input_type_error",buttonActive:"popup__submit-button_type_active",buttonInactive:"popup__submit-button_type_inactive"},t={popupProfileEdit:".popup_function_edit",popupCardAdd:".popup_function_add",popupImage:".popup_function_closeup",buttonProfileEdit:".profile__edit-button",buttonCardAdd:".profile__add-button",formPopupProfileEdit:".popup__form_function_edit",formPopupAddCard:".popup__form_function_add",inputCardName:".popup__input_type_name",inputCardLink:".popup__input_type_link",profileTitle:".profile__title",profileInfo:".profile__subtitle",templateCard:".elements-item",cardsList:".elements",titleInputValue:".popup__input_type_title",occupationInputValue:".popup__input_type_subtitle"},n=document.querySelector(t.buttonProfileEdit),r=document.querySelector(t.buttonCardAdd),o=document.querySelector(t.formPopupProfileEdit),i=document.querySelector(t.formPopupAddCard);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}document.querySelector(t.inputCardName),document.querySelector(t.inputCardLink),document.querySelector(t.titleInputValue),document.querySelector(t.occupationInputValue);var c=function(){function e(t,n){var r=this,o=t.data,i=t.handleCardClick,a=t.handleLikeCard,c=t.handleDeleteCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_handleLikeCard",(function(){r._like.classList.toggle("elements__like_state_active")})),u(this,"removeCard",(function(){r._element.remove(),r._element=null})),this._text=o.name,this._link=o.link,this._likes=o.likes,this._cardId=o._id,this._handleCardClick=i,this._handleLikeCard=a,this._handleDeleteCard=c,this._templateSelector=n,this._element=document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0),this._like=this._element.querySelector(".elements__like"),this._image=this._element.querySelector(".elements__image"),this._trash=this._element.querySelector(".elements__trash"),this._title=this._element.querySelector(".elements__title")}var t,n;return t=e,(n=[{key:"generate",value:function(){return this._image.src=this._link,this._image.alt=this._text,this._element=this._getTemplate(),this._updateLikesView,this._setEventListeners(),this._title.textContent=this._text,this._element}},{key:"_handleImageClick",value:function(){this._handleCardClick({title:this._text,link:this._link})}},{key:"_updateLikesView",value:function(){}},{key:"setLikesInfo",value:function(e){}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",this._handleLikeCard(this)),this._trash.addEventListener("click",this._handleDeleteCard(this)),this._image.addEventListener("click",(function(){return e._handleCardClick(e._title,e._link)}))}},{key:"id",value:function(){return this._cardId}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=s((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_handleFormInput",(function(e){var t=e.target;t.validity.valid?r._hideFieldError(t):r._showFieldError(t),r._setSubmitButtonState()})),p(this,"_showFieldError",(function(e){r._form.querySelector(".".concat(e.name,"-error")).textContent=e.validationMessage,e.classList.add(r._config.inputError)})),p(this,"_hideFieldError",(function(e){r._form.querySelector(".".concat(e.name,"-error")).textContent="",e.classList.remove(r._config.inputError)})),p(this,"_setSubmitButtonState",(function(){r._form.checkValidity()?(r._button.removeAttribute("disabled"),r._button.classList.remove(r._config.buttonInactive),r._button.classList.add(r._config.buttonActive)):(r._button.setAttribute("disabled",!0),r._button.classList.add(r._config.buttonInactive),r._button.classList.remove(r._config.buttonActive))})),p(this,"enableValidation",(function(){r._form.addEventListener("input",(function(e){return r._handleFormInput(e)}))})),p(this,"resetValidation",(function(){r._setSubmitButtonState(),r._inputList.forEach((function(e){r._hideFieldError(e)}))})),this._config=t,this._form=n,this._button=this._form.querySelector(this._config.button),this._inputList=Array.from(this._form.querySelectorAll(this._config.input))}));function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popup=document.querySelector(n._popupSelector),n._image=n._popup.querySelector(".popup__image"),n._caption=n._popup.querySelector(".popup__image-caption"),g((t=k(n),w(a.prototype)),"close",t).call(t),n}return t=a,(n=[{key:"open",value:function(e){this._image.src=e.link,this._image.alt=e.title,this._caption.textContent=e.title,g(w(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._closeButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleClickClose",value:function(e){e.target===this._popup&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",(function(t){return e._handleClickClose(t)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t),this._profileInfo=document.querySelector(n),this._profileAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileInfo.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileInfo.textContent=e.about,this._profileAvatar.src=e.avatar}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.json()}))}},{key:"setUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name,about})}).then((function(e){return e.json()}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.json()}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.json()}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=new f(e,o);q.enableValidation();var A=new f(e,i);A.enableValidation();var T=new _({renderer:function(e){T.addItem(F(e))}},t.cardsList),x=new O(t.popupImage);x.setEventListeners();var V=new E(t.profileTitle,t.profileInfo,t.profileAvatar),D=new j({baseUrl:"https://nomoreparties.co/v1/cohort-50",headers:{authorization:"5d18e568-66bc-4809-86d6-8fc39fab9075","content-type":"application/json"}});D.getInitialCards().then((function(e){e.reverse(),T.renderItems(e)})).catch((function(e){return console.log("Ошибка: ".concat(e))})),r.addEventListener("click",(function(){popupWithFormCardAdd.open(),A.resetValidation()})),n.addEventListener("click",(function(){popupWithFormProfileEdit.open(),q.resetValidation();var e=V.getUserInfo();popupWithFormProfileEdit.setInputValues(e)}));var F=function(e){var n=new c({data:{name:e.name,link:e.link,likes:e.likes,_id:e.id},handleCardClick:function(){x.open(e)},handleLikeCard:function(e){D.changeLikeStatus(e.id(),!e.isLiked()).then((function(t){e.setLikesInfo(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))})).catch((function(e){return console.log("Ошибка изменения статуса лайка: ".concat(e))}))},handleDeleteIconClick:function(e){cardInfoSubmit.open(),cardInfoSubmit.setSubmitAction((function(){D.removeCard(e.id()).then((function(){e.removeCard(),cardInfoSubmit.close()})).catch((function(e){return console.log("При удалении карточки ошибка: ".concat(e))}))}))}},t.templateCard);return n.generate()}})();