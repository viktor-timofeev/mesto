(()=>{"use strict";var e={form:".popup__form",button:".popup__submit-button",input:".popup__input",inputError:"popup__input_type_error",buttonActive:"popup__submit-button_type_active",buttonInactive:"popup__submit-button_type_inactive"},t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),r=document.querySelector(".popup__form_function_edit"),o=document.querySelector(".popup__form_function_add");function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".popup__input_type_name"),document.querySelector(".popup__input_type_link"),document.querySelector(".popup__input_type_title"),document.querySelector(".popup__input_type_subtitle");var u=function(){function e(t,n){var r,o,i=this,u=t.data,c=t.handleCardClick,a=t.handleLikeCard,s=t.handleDeleteCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i._element.remove(),i._element=null},(r="removeCard")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._text=u.name,this._link=u.link,this._likes=u.likes,this._userId=u.currentUserId,this._ownerId=u.owner._id,this._cardId=u._id,this._handleCardClick=c,this._handleLikeCard=a,this._handleDeleteCard=s,this._templateSelector=n,this._element=document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0),this._like=this._element.querySelector(".elements__like"),this._image=this._element.querySelector(".elements__image"),this._trash=this._element.querySelector(".elements__trash"),this._title=this._element.querySelector(".elements__title"),this._likeCounter=this._element.querySelector(".elements__like-number")}var t,n;return t=e,(n=[{key:"generate",value:function(){return this._image.src=this._link,this._image.alt=this._text,this._title.textContent=this._text,this._updateLikesView(),this._setEventListeners(),this._trash.classList.add(this._userId===this._ownerId?"elements__trash_visible":"elements__trash_hidden"),this._likeCounter.textContent=this._likes.length,this._element}},{key:"_updateLikesView",value:function(){this.isLiked()&&this._like.classList.add("elements__like_state_active")}},{key:"setLikesInfo",value:function(e){this._likeCounter.textContent=e.length,this._like.classList.toggle("elements__like_state_active")}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){return e._handleLikeCard(e)})),this._trash.addEventListener("click",(function(){return e._handleDeleteCard(e)})),this._image.addEventListener("click",(function(){return e._handleCardClick(e._title,e._link)}))}},{key:"isLiked",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id===e._userId})))}},{key:"id",value:function(){return this._cardId}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=a((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_handleFormInput",(function(e){var t=e.target;t.validity.valid?r._hideFieldError(t):r._showFieldError(t),r._setSubmitButtonState()})),s(this,"_showFieldError",(function(e){r._form.querySelector(".".concat(e.name,"-error")).textContent=e.validationMessage,e.classList.add(r._config.inputError)})),s(this,"_hideFieldError",(function(e){r._form.querySelector(".".concat(e.name,"-error")).textContent="",e.classList.remove(r._config.inputError)})),s(this,"_setSubmitButtonState",(function(){r._form.checkValidity()?(r._button.removeAttribute("disabled"),r._button.classList.remove(r._config.buttonInactive),r._button.classList.add(r._config.buttonActive)):(r._button.setAttribute("disabled",!0),r._button.classList.add(r._config.buttonInactive),r._button.classList.remove(r._config.buttonActive))})),s(this,"enableValidation",(function(){r._form.addEventListener("input",(function(e){return r._handleFormInput(e)}))})),s(this,"resetValidation",(function(){r._setSubmitButtonState(),r._inputList.forEach((function(e){r._hideFieldError(e)}))})),this._config=t,this._form=n,this._button=this._form.querySelector(this._config.button),this._inputList=Array.from(this._form.querySelectorAll(this._config.input))}));function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._closeButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleClickClose",value:function(e){e.target===this._popup&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",(function(t){return e._handleClickClose(t)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function m(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function u(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popup=document.querySelector(n._popupSelector),n._image=n._popup.querySelector(".popup__image"),n._caption=n._popup.querySelector(".popup__image-caption"),g((t=v(n),w(u.prototype)),"close",t).call(t),n}return t=u,(n=[{key:"open",value:function(e){this._image.src=e.link,this._image.alt=e.name,this._caption.textContent=e.name,g(w(u.prototype),"open",this).call(this)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function L(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popup=document.querySelector(n._popupSelector),n._submitButton=n._popup.querySelector(".popup__submit-button"),n._profileForm=n._popup.querySelector(".popup__form"),n._handleFormSubmit=t,n._inputList=n._profileForm.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){return t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;E(I(u.prototype),"setEventListeners",this).call(this),this._profileForm.onsubmit=function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}}},{key:"close",value:function(){E(I(u.prototype),"close",this).call(this),this._profileForm.reset()}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t),this._profileInfo=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileInfo.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.userName,this._profileInfo.textContent=e.userDescription}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.json()}))}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.json()}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.json()}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.link})}).then((function(e){return e.json()}))}},{key:"addLike",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.json()}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.json()}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.json()})):fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.json()}))}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.json()}))}},{key:"setUserPic",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.json()}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function N(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupForm=t._popup.querySelector(".popup__form_function_confirm"),t._submitButton=t._popup.querySelector(".popup__submit-button"),t}return t=u,(n=[{key:"submitHandler",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;A(H(u.prototype),"setEventListeners",this).call(this),this._popupForm.onsubmit=function(t){t.preventDefault(),e._handleFormSubmit(),e.close()}}},{key:"close",value:function(){A(H(u.prototype),"close",this).call(this)}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=new l(e,r);K.enableValidation();var Q=new l(e,o);Q.enableValidation();var W=new T(".profile__title",".profile__subtitle"),X=new x({baseUrl:"https://nomoreparties.co/v1/cohort-50",headers:{authorization:"5d18e568-66bc-4809-86d6-8fc39fab9075","content-type":"application/json"}}),Y=new p({renderer:function(e){Y.addItem(ie(e))}},".elements"),Z=null,ee=new O(".popup_function_closeup");ee.setEventListeners();var te=new J(".popup_function_confirm");te.setEventListeners();var ne=new q(".popup_function_edit-photo",(function(e){X.setUserPic(e).then((function(){ne.close()})).catch((function(e){return console.log("Ошибка при добавлении карточки: ".concat(e))}))}));re.setEventListeners();var re=new q(".popup_function_add",(function(e){X.addNewCard(e).then((function(e){Y.addItem(ie(e)),re.close()})).catch((function(e){return console.log("Ошибка при добавлении карточки: ".concat(e))}))}));re.setEventListeners();var oe=new q(".popup_function_edit",(function(e){X.setUserInfo(e).then((function(e){W.setUserInfo({userName:e.name,userDescription:e.about}),oe.close()})).catch((function(e){return console.log("Ошибка при обновлении информации о пользователе: ".concat(e))}))}));oe.setEventListeners(),Promise.all([X.getUserInfo(),X.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z=o._id,i.reverse(),Y.renderItems(i),W.setUserInfo({userName:o.name,userDescription:o.about})})).catch((function(e){return console.log("Ошибка загрузки данных: ".concat(e))})),n.addEventListener("click",(function(){re.open(),Q.resetValidation()})),t.addEventListener("click",(function(){oe.open(),K.resetValidation(),oe.setInputValues(W.getUserInfo())}));var ie=function(e){var t=new u({data:M(M({},e),{},{currentUserId:Z}),handleCardClick:function(){ee.open(e)},handleLikeCard:function(){t.isLiked()?X.deleteLike(t.id()).then((function(e){return t.setLikesInfo(e.likes)})).catch((function(e){return console.log("Ошибка изменения статуса лайка: ".concat(e))})):X.addLike(t.id()).then((function(e){return t.setLikesInfo(e.likes)})).catch((function(e){return console.log("Ошибка изменения статуса лайка: ".concat(e))}))},handleDeleteCard:function(e){te.open(),te.submitHandler((function(){X.removeCard(e.id()).then((function(){e.removeCard(),te.close()})).catch((function(e){return console.log("При удалении карточки ошибка: ".concat(e))}))}))}},".elements-item");return t.generate()}})();