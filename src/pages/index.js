import {  validateConfig,
          selectors,
          buttonProfileEdit,
          buttonCardAdd,
          formPopupProfileEdit,
          formPopupAddCard,
        } from "../utils/constants.js"; 
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

import './index.css';

import arkhyzImage from '../images/arkhyz.jpg';
import chelyabinskOblastImage from '../images/chelyabinsk-oblast.jpg';
import ivanovoImage from '../images/ivanovo.jpg';
import kamchatkaImage from '../images/kamchatka.jpg';
import kholmogorskyRayonImage from '../images/kholmogorsky-rayon.jpg';
import baikalImage from '../images/baikal.jpg';

const initialCards = [
  {
    title: 'Архыз',
    link: arkhyzImage
  },
  {
    title: 'Челябинская область',
    link: chelyabinskOblastImage
  },
  {
    title: 'Иваново',
    link: ivanovoImage
  },
  {
    title: 'Камчатка',
    link: kamchatkaImage
  },
  {
    title: 'Холмогорский район',
    link: kholmogorskyRayonImage
  },
  {
    title: 'Байкал',
    link: baikalImage
  }
];

//валидация

const validatorFormPopupProfileEdit = new FormValidator(validateConfig, formPopupProfileEdit);
validatorFormPopupProfileEdit.enableValidation();

const validatorFormPopupAddCard = new FormValidator(validateConfig, formPopupAddCard);
validatorFormPopupAddCard.enableValidation();

//реализация массива заготовленных карточек

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      defaultCardList.addItem(card);
    },
  },
  selectors.cardsList
);
defaultCardList.renderItems();

//реализация попапа добавления новой карточки

const popupWithImage = new PopupWithImage(selectors.popupImage);
popupWithImage.setEventListeners();

const popupWithFormCardAdd = new PopupWithForm(selectors.popupCardAdd, 
  (data) => {
  const card = createCard(data);
  defaultCardList.addItem(card);
  popupWithFormCardAdd.close();
  });

const userInfo = new UserInfo(selectors.profileTitle, selectors.profileInfo);

//реализация поапа с данными профиля

const popupWithFormProfileEdit = new PopupWithForm(
  selectors.popupProfileEdit,
  (data) => {
    userInfo.setUserInfo(data);
    popupWithFormProfileEdit.close();
  }
);

//слушатели

buttonCardAdd.addEventListener("click", () => {
  popupWithFormCardAdd.open();
  popupWithFormCardAdd.setEventListeners();
  validatorFormPopupAddCard.resetValidation();
});

buttonProfileEdit.addEventListener("click", () => {
  popupWithFormProfileEdit.open();
  popupWithFormProfileEdit.setEventListeners();
  validatorFormPopupProfileEdit.resetValidation();
  const data = userInfo.getUserInfo();
  popupWithFormProfileEdit.setInputValues(data);
});

function createCard(item) {
  const card = new Card(
    {
      title: item.title,
      link: item.link
    }, selectors.templateCard,
    (title, link) => {
      popupWithImage.open(item);
  //    popupWithImage.setEventListeners();
    });
	const cardElement = card.generate(item);
  return cardElement;
}