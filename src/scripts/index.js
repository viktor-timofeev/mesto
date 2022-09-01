import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./cards.js";
import { validateConfig } from "./constants.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

import '../pages/index.css';

import arkhyzImage from '../images/arkhyz.jpg';
import chelyabinskOblastImage from '../images/chelyabinsk-oblast.jpg';
import ivanovoImage from '../images/ivanovo.jpg';
import kamchatkaImage from '../images/kamchatka.jpg';
import kholmogorskyRayonImage from '../images/kholmogorsky-rayon.jpg';
import baikalImage from '../images/baikal.jpg';

const selectors = {
  popupProfileEdit: ".popup_function_edit",
  popupCardAdd: ".popup_function_add",
  popupImage: ".popup_function_closeup",
  buttonProfileEdit: ".profile__edit-button",
  buttonCardAdd: ".profile__add-button",
  formPopupProfileEdit: ".popup__form_function_edit",
  formPopupAddCard: ".popup__form_function_add",
  inputCardName: ".popup__input_type_name",
  inputCardLink: ".popup__input_type_link",
  profileTitle: ".profile__title",
  profileInfo: ".profile__subtitle",
  templateCard: ".elements-item",
  cardsList: ".elements",
};

const buttonProfileEdit = document.querySelector(selectors.buttonProfileEdit);
const buttonCardAdd = document.querySelector(selectors.buttonCardAdd);
const formPopupProfileEdit = document.querySelector(selectors.formPopupProfileEdit);
const formPopupAddCard = document.querySelector(selectors.formPopupAddCard);
const inputCardName = document.querySelector(selectors.inputCardName);
const inputCardLink = document.querySelector(selectors.inputCardLink);

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
      const card = new Card(
        {
          link: item.link,
          name: item.name
        },
        selectors.templateCard,
        (link, name) => {
          popupWithImage.open(link, name);
          popupWithImage.setEventListeners();
        }
      );
      const cardElement = card.generate(item);
      defaultCardList.addItem(cardElement);
    },
  },
  selectors.cardsList
);
defaultCardList.renderItems();

//реализация попапа добавления новой карточки

const popupWithImage = new PopupWithImage(selectors.popupImage);

const popupWithFormCardAdd = new PopupWithForm(selectors.popupCardAdd, () => {
  const card = new Card({
    link: inputCardLink.value,
    name: inputCardName.value,
  },
    selectors.templateCard,
    () => {
      popupWithImage.open(data.name, data.link)
    }
  );
  defaultCardList.addItem(card.generate());
  popupWithFormCardAdd.close();
});


const userInfo = new UserInfo(selectors.profileTitle, selectors.profileInfo);

//реализация поапа с данными профиля

const popupWithFormProfileEdit = new PopupWithForm(
  selectors.popupProfileEdit,
  (inputValues) => {
    const data = {
      name: inputValues["name-input"],
      info: inputValues["occupation-input"]
    };
    userInfo.setUserInfo(data);
    popupWithFormProfileEdit.close();
  }
);

//слушатели

popupWithFormCardAdd.setEventListeners();
popupWithFormProfileEdit.setEventListeners();

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