import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './cards.js';
import { validateConfig } from './constants.js';


const selectors = {
  popup: ".popup",
  popupProfileEdit: ".popup_function_edit",
  popupCardAdd: ".popup_function_add",
  popupImage: ".popup_function_closeup",
  popupImageCaption: ".popup__image-caption",
  popupImageItem: ".popup__image",
  buttonProfileEdit: ".profile__edit-button",
  buttonCardAdd: ".profile__add-button",
  buttonClosePopup: ".popup__close-button",
  formPopupProfileEdit: ".popup__form_function_edit",
  formPopupAddCard: ".popup__form_function_add",
  inputProfileName: ".popup__input_type_title",
  inputProfileInfo: ".popup__input_type_subtitle",
  inputCardName: ".popup__input_type_name",
  inputCardLink: ".popup__input_type_link",
  profileTitle: ".profile__title",
  profileInfo: ".profile__subtitle",
  templateCard: ".elements-item",
  cardsList: ".elements",
  image: ".elements__image",
};

const popups = document.querySelectorAll(selectors.popup);
const buttonProfileEdit = document.querySelector(selectors.buttonProfileEdit);
const buttonPopupHide = document.querySelector(selectors.buttonPopupHide);
const buttonCardAdd = document.querySelector(selectors.buttonCardAdd);
const buttonsClosePopup = document.querySelectorAll(selectors.buttonClosePopup);
const formPopupProfileEdit = document.querySelector(selectors.formPopupProfileEdit);
const formPopupAddCard = document.querySelector(selectors.formPopupAddCard);
const popupProfileEdit = document.querySelector(selectors.popupProfileEdit);
const popupImage = document.querySelector(selectors.popupImage);
const popupImageCaption = document.querySelector(selectors.popupImageCaption);
const popupImageItem = document.querySelector(selectors.popupImageItem);
const popupCardAdd = document.querySelector(selectors.popupCardAdd);
const inputCardName = document.querySelector(selectors.inputCardName);
const inputCardLink = document.querySelector(selectors.inputCardLink);
const inputProfileName = document.querySelector(selectors.inputProfileName);
const inputProfileInfo = document.querySelector(selectors.inputProfileInfo);
const profileName = document.querySelector(selectors.profileTitle);
const profileInfo = document.querySelector(selectors.profileInfo);
const templateCard = document.querySelector(selectors.templateCard).content;
const cardsList = document.querySelector(selectors.cardsList);
const images = document.querySelectorAll(selectors.image);

const newCard = {
  name: inputCardName.value,
  link: inputCardLink.value,
};

const validatorFormPopupProfileEdit = new FormValidator(validateConfig, formPopupProfileEdit);
validatorFormPopupProfileEdit.enableValidation();

const validatorFormPopupAddCard = new FormValidator(validateConfig, formPopupAddCard);
validatorFormPopupAddCard.enableValidation();
  
function showPopup(element) {
  element.classList.add("popup_opened");
  document.addEventListener("keydown", hidePopupByEscape);
}

function hidePopupByEscape(evt, popup) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    hidePopup(activePopup);
  }
}

function createCard(item) {
  const card = new Card(item, '.elements-item', handleCardClick);
	const cardElement = card.generate(item);
  return cardElement;
}

function submitPopupCardAdd(evt) {
  evt.preventDefault();
  cardsList.prepend(createCard(newCard));
  hidePopup(popupCardAdd);
}

function submitPopupProfileEdit(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileInfo.textContent = inputProfileInfo.value;
  hidePopup(popupProfileEdit);
}

function handleCardClick(link, name) {
  showPopup(popupImage);
  popupImageItem.src = link;
  popupImageItem.alt = name;
  popupImageCaption.textContent = name;
}

buttonProfileEdit.addEventListener("click", function (evt) {
  showPopup(popupProfileEdit);
  inputProfileName.value = profileName.textContent;
  inputProfileInfo.value = profileInfo.textContent;
  validatorFormPopupProfileEdit.resetValidation();
});

formPopupProfileEdit.addEventListener("submit", submitPopupProfileEdit);

formPopupAddCard.addEventListener("submit", submitPopupCardAdd);

buttonCardAdd.addEventListener("click", function () {
  showPopup(popupCardAdd);
  inputCardName.value = "";
  inputCardLink.value = "";
  validatorFormPopupAddCard.resetValidation();
});

buttonsClosePopup.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => hidePopup(popup));
});

function hidePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", hidePopupByEscape);
}

popups.forEach((popup) => { 
  popup.addEventListener('mousedown', (evt) => { 
    if (evt.target.classList.contains('popup_opened')) { 
      hidePopup(popup); 
    }
  }) 
})

initialCards.forEach((item) => {
  cardsList.append(createCard(item));
});