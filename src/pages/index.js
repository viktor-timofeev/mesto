import {  validateConfig,
          selectors,
          buttonProfileEdit,
          buttonCardAdd,
          formPopupProfileEdit,
          formPopupAddCard,
          titleInputValue,
          occupationInputValue
        } from "../utils/constants.js"; 
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

import './index.css';

//валидация

const validatorFormPopupProfileEdit = new FormValidator(validateConfig, formPopupProfileEdit);
validatorFormPopupProfileEdit.enableValidation();

const validatorFormPopupAddCard = new FormValidator(validateConfig, formPopupAddCard);
validatorFormPopupAddCard.enableValidation();

//реализация массива заготовленных карточек

const defaultCardList = new Section(
  {
    renderer: (item) => {
      defaultCardList.addItem(createCard(item));
    },
  }, selectors.cardsList
);

//реализация попапа добавления новой карточки

let userId = null;

const popupWithImage = new PopupWithImage(selectors.popupImage);
popupWithImage.setEventListeners();


const popupWithFormCardAdd = new PopupWithForm(selectors.popupCardAdd, 
  (data) => {
  const card = createCard(data);
  defaultCardList.addItem(card);
  popupWithFormCardAdd.close();
  });
  popupWithFormCardAdd.setEventListeners();


const userInfo = new UserInfo(selectors.profileTitle, selectors.profileInfo/*, selectors.profileAvatar*/);
const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-50',
  headers: {
  authorization: "5d18e568-66bc-4809-86d6-8fc39fab9075", 
  "content-type": "application/json" 
  }
  });


//реализация попапа с данными профиля

const popupWithFormProfileEdit = new PopupWithForm(
  selectors.popupProfileEdit,
  (data) => {
    //renderLoading(selectors.popupProfileEdit, true);
    api.setUserInfo({
      name: data.userName,
      about: data.userDescription
    })
    .then((data)=> {
      api.setUserInfo({
        name: data.name,
        about: data.about
      })
    })
    .then((res) => {
      userInfo.setUserInfo(res)
      popupWithFormProfileEdit.close();
    })
    .catch(error => console.log(`Ошибка при обновлении информации о пользователе: ${error}`))
    /*.finally(() => {
      renderLoading(selectors.popupProfileEdit);
    })*/
  });
  popupWithFormProfileEdit.setEventListeners();


//сервер

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([userData, cards]) => {
  userId = userData._id;

  cards.reverse();
  defaultCardList.renderItems(cards);
  userInfo.setUserInfo({
    userName: userData.name,
    userDescription: userData.about,
   // userAvatar: userData.avatar
  });
  
})
.catch(error => console.log(`Ошибка загрузки данных: ${error}`));


function renderLoading(isLoading) {
  if (isLoading) {
    spinner.classList.add("spinner_visible");
    content.classList.add("content_hidden");
  } else {
   spinner.classList.remove("spinner_visible");
    content.classList.remove("content_hidden");
  }
} 

buttonCardAdd.addEventListener("click", () => {
  popupWithFormCardAdd.open();
  //popupWithFormCardAdd.setEventListeners();
  validatorFormPopupAddCard.resetValidation();
});

buttonProfileEdit.addEventListener("click", () => {
  popupWithFormProfileEdit.open();
  //popupWithFormProfileEdit.setEventListeners();
  validatorFormPopupProfileEdit.resetValidation();
  //const data = userInfo.getUserInfo();
  popupWithFormProfileEdit.setInputValues(userInfo.getUserInfo());
});

const createCard = (cardData) => {
  const card = new Card({
    data: { ...cardData, currentUserId: userId },
        handleCardClick: () => {
          popupWithImage.open(cardData);
        },
   /*     handleLikeCard: (card) => {
        //  this._like.classList.toggle("elements__like_state_active");

          api.changeLikeStatus(card.id(), !card.isLiked())
          .then(data => {
            card.setLikesInfo({...data});
          })
          .catch(error => console.log(`Ошибка изменения статуса лайка: ${error}`))
      },
        handleDeleteIconClick: (card) => {
          cardInfoSubmit.open();
          cardInfoSubmit.setSubmitAction(() => {
            api.removeCard(card.id())
            .then(() => {
              card.removeCard();
              cardInfoSubmit.close();
            })
            .catch(error => console.log(`При удалении карточки ошибка: ${error}`))
            });
          },*/
    }, selectors.templateCard
  )
  return card.generate();
}
