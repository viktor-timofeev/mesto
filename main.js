(()=>{"use strict";var e={form:".popup__form",button:".popup__submit-button",input:".popup__input",inputError:"popup__input_type_error",buttonActive:"popup__submit-button_type_active",buttonInactive:"popup__submit-button_type_inactive"},t={popupProfileEdit:".popup_function_edit",popupCardAdd:".popup_function_add",popupImage:".popup_function_closeup",buttonProfileEdit:".profile__edit-button",buttonCardAdd:".profile__add-button",formPopupProfileEdit:".popup__form_function_edit",formPopupAddCard:".popup__form_function_add",inputCardName:".popup__input_type_name",inputCardLink:".popup__input_type_link",profileTitle:".profile__title",profileInfo:".profile__subtitle",templateCard:".elements-item",cardsList:".elements",titleInputValue:".popup__input_type_title",occupationInputValue:".popup__input_type_subtitle"},n=document.querySelector(t.buttonProfileEdit),r=document.querySelector(t.buttonCardAdd),o=document.querySelector(t.formPopupProfileEdit),i=document.querySelector(t.formPopupAddCard);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(t.inputCardName),document.querySelector(t.inputCardLink),document.querySelector(t.titleInputValue),document.querySelector(t.occupationInputValue);var a=function(){function e(t,n){var r,o,i=this,u=t.data,a=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i._element.remove(),i._element=null},(r="removeCard")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._text=u.name,this._link=u.link,this._likes=u.likes,this._cardId=u._id,this._handleCardClick=a,this._templateSelector=n,this._element=document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0),this._like=this._element.querySelector(".elements__like"),this._image=this._element.querySelector(".elements__image"),this._trash=this._element.querySelector(".elements__trash"),this._title=this._element.querySelector(".elements__title")}var t,n;return t=e,(n=[{key:"generate",value:function(){return this._image.src=this._link,this._image.alt=this._text,this._updateLikesView,this._setEventListeners(),this._title.textContent=this._text,this._element}},{key:"_handleImageClick",value:function(){this._handleCardClick({title:this._text,link:this._link})}},{key:"_updateLikesView",value:function(){}},{key:"setLikesInfo",value:function(e){}},{key:"_setEventListeners",value:function(){var e=this;this._image.addEventListener("click",(function(){return e._handleCardClick(e._title,e._link)}))}},{key:"id",value:function(){return this._cardId}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=l((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_handleFormInput",(function(e){var t=e.target;t.validity.valid?r._hideFieldError(t):r._showFieldError(t),r._setSubmitButtonState()})),s(this,"_showFieldError",(function(e){r._form.querySelector(".".concat(e.name,"-error")).textContent=e.validationMessage,e.classList.add(r._config.inputError)})),s(this,"_hideFieldError",(function(e){r._form.querySelector(".".concat(e.name,"-error")).textContent="",e.classList.remove(r._config.inputError)})),s(this,"_setSubmitButtonState",(function(){r._form.checkValidity()?(r._button.removeAttribute("disabled"),r._button.classList.remove(r._config.buttonInactive),r._button.classList.add(r._config.buttonActive)):(r._button.setAttribute("disabled",!0),r._button.classList.add(r._config.buttonInactive),r._button.classList.remove(r._config.buttonActive))})),s(this,"enableValidation",(function(){r._form.addEventListener("input",(function(e){return r._handleFormInput(e)}))})),s(this,"resetValidation",(function(){r._setSubmitButtonState(),r._inputList.forEach((function(e){r._hideFieldError(e)}))})),this._config=t,this._form=n,this._button=this._form.querySelector(this._config.button),this._inputList=Array.from(this._form.querySelectorAll(this._config.input))}));function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._closeButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleClickClose",value:function(e){e.target===this._popup&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",(function(t){return e._handleClickClose(t)}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popup=document.querySelector(n._popupSelector),n._image=n._popup.querySelector(".popup__image"),n._caption=n._popup.querySelector(".popup__image-caption"),w((t=g(n),k(u.prototype)),"close",t).call(t),n}return t=u,(n=[{key:"open",value:function(e){this._image.src=e.link,this._image.alt=e.name,this._caption.textContent=e.name,w(k(u.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function L(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popup=document.querySelector(n._popupSelector),n._submitButton=n._popup.querySelector(".popup__submit-button"),n._profileForm=n._popup.querySelector(".popup__form"),n._handleFormSubmit=t,n._inputList=n._profileForm.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){return t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;P(q(u.prototype),"setEventListeners",this).call(this),this._profileForm.onsubmit=function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}}},{key:"close",value:function(){P(q(u.prototype),"close",this).call(this),this._profileForm.reset()}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t),this._profileInfo=document.querySelector(n),this._profileAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileInfo.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.userName,this._profileInfo.textContent=e.userDescription,this._profileAvatar.src=e.userAvatar}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.json()}))}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.json()}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.json()}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.json()}))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=new p(e,o);B.enableValidation();var G=new p(e,i);G.enableValidation();var J=new d({renderer:function(e){J.addItem(W(e))}},t.cardsList),M=null,z=new S(t.popupImage);z.setEventListeners();var H=new A(t.popupCardAdd,(function(e){var t=W(e);J.addItem(t),H.close()}));H.setEventListeners();var $=new T(t.profileTitle,t.profileInfo,t.profileAvatar),K=new x({baseUrl:"https://nomoreparties.co/v1/cohort-50",headers:{authorization:"5d18e568-66bc-4809-86d6-8fc39fab9075","content-type":"application/json"}}),Q=new A(t.popupProfileEdit,(function(e){$.setUserInfo(e),K.setUserInfo({name:e.userName,about:e.userDescription}).then((function(e){$.setUserInfo({userName:e.name,userDescription:e.about}),Q.close()})).catch((function(e){return console.log("Ошибка при обновлении информации о пользователе: ".concat(e))})).finally((function(){t.popupProfileEdit?(spinner.classList.add("spinner_visible"),content.classList.add("content_hidden")):(spinner.classList.remove("spinner_visible"),content.classList.remove("content_hidden"))}))}));Q.setEventListeners(),Promise.all([K.getUserInfo(),K.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M=o._id,i.reverse(),J.renderItems(i),$.setUserInfo({userName:o.name,userDescription:o.about,userAvatar:o.avatar})})).catch((function(e){return console.log("Ошибка загрузки данных: ".concat(e))})),r.addEventListener("click",(function(){H.open(),G.resetValidation()})),n.addEventListener("click",(function(){Q.open(),B.resetValidation();var e=$.getUserInfo();Q.setInputValues(e)}));var W=function(e){return new a({data:D(D({},e),{},{currentUserId:M}),handleCardClick:function(){z.open(e)}},t.templateCard).generate()}})();