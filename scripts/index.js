import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './cards.js';
import { validateConfig } from './constants.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

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

const validatorFormPopupProfileEdit = new FormValidator(validateConfig, formPopupProfileEdit);
validatorFormPopupProfileEdit.enableValidation();

const validatorFormPopupAddCard = new FormValidator(validateConfig, formPopupAddCard);
validatorFormPopupAddCard.enableValidation();

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(
      {
        link: item.link,
        name: item.name
      }, selectors.templateCard, (link, name) => 
      {popupWithImage.open(link, name);/*handleCardClick*/
      popupWithImage.setEventListeners();
    });
    const cardElement = card.generate(item);
    defaultCardList.addItem(cardElement);
  }
  }, selectors.cardsList);
  defaultCardList.renderItems();

  const popupWithImage = new PopupWithImage(selectors.popupImage);

  const popupWithFormCardAdd = new PopupWithForm(
    selectors.popupCardAdd,
     () => {
      const card = new Card ({
        link: inputCardLink.value,
        name: inputCardName.value
        },
        selectors.templateCard, () => {
        popupWithImage.open(data.name, data.link)
      });
      defaultCardList.addItem(card.generate());
      popupWithFormCardAdd.close();
    }
  );

  
  const userData = new UserInfo(selectors.inputProfileName, selectors.inputProfileInfo);
  const itemUserData = userData.getUserInfo();

  const popupWithFormProfileEdit = new PopupWithForm(
    selectors.popupProfileEdit,
    () => {
    popupWithFormProfileEdit.setEventListeners();
    popupWithFormProfileEdit.close();
    userData.setUserInfo(itemUserData);
    }
  );

   buttonCardAdd.addEventListener("click", () => {
    popupWithFormCardAdd.open();
    popupWithFormCardAdd.setEventListeners();
    validatorFormPopupAddCard.resetValidation();
  });

buttonProfileEdit.addEventListener("click", () => {
    popupWithFormProfileEdit.open();
    popupWithFormProfileEdit.setEventListeners();
    validatorFormPopupProfileEdit.resetValidation();
  });




