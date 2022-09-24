import {  validateConfig,
          selectors,
          buttonProfileEdit,
          buttonCardAdd,
          buttonEditProfilePhoto,
          formPopupProfileEdit,
          formPopupAddCard,
          formEditProfilePhoto
        } from "../utils/constants.js"; 
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

import './index.css';

//валидация

const validatorFormPopupProfileEdit = new FormValidator(validateConfig, formPopupProfileEdit);
validatorFormPopupProfileEdit.enableValidation();

const validatorFormPopupAddCard = new FormValidator(validateConfig, formPopupAddCard);
validatorFormPopupAddCard.enableValidation();

const validatorFormEditProfilePhoto = new FormValidator(validateConfig, formEditProfilePhoto);
validatorFormEditProfilePhoto.enableValidation();



const userInfo = new UserInfo(selectors.profileTitle, selectors.profileInfo, selectors.profileAvatar);
const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-50',
  headers: {
  authorization: "5d18e568-66bc-4809-86d6-8fc39fab9075", 
  "content-type": "application/json" 
  }
  });

//реализация массива заготовленных карточек

const defaultCardList = new Section(
  {
    renderer: (item) => {
      defaultCardList.addItem(createCard(item));
    },
  }, selectors.cardsList
);



let userId = null;

const popupWithImage = new PopupWithImage(selectors.popupImage);
popupWithImage.setEventListeners();

//реализация попапа с подтверждением удаления карточки

const popupConfirm = new PopupWithConfirmation(selectors.popupConfirmDeleteCard);
popupConfirm.setEventListeners();


//реализация попапа с редактированием фото профиля

const popupWithFormEditProfilePhoto = new PopupWithForm(selectors.popupProfilePhotoEdit,
  (data) => {
    //  renderLoading(selectors.popupCardAdd, true);
      api.setUserPic(data)
      .then((info) => {
        userInfo.setUserInfo({
          userAvatar: info.avatar
        })
        console.log(info.avatar);
        popupWithFormProfileEdit.close();
      })
      .catch(error => console.log(`Ошибка при добавлении карточки: ${error}`))
    /*.finally(() => {
      renderLoading(selectors.popupCardAdd);
    })*/
    });
    popupWithFormEditProfilePhoto.setEventListeners();

//реализация попапа добавления новой карточки
const popupWithFormCardAdd = new PopupWithForm(selectors.popupCardAdd, 
  (data) => {
  //  renderLoading(selectors.popupCardAdd, true);
    api.addNewCard(data)
    .then((cardData) => {
      defaultCardList.addItem(createCard(cardData));
      popupWithFormCardAdd.close();
    })
    .catch(error => console.log(`Ошибка при добавлении карточки: ${error}`))
  /*.finally(() => {
    renderLoading(selectors.popupCardAdd);
  })*/
  });
  popupWithFormCardAdd.setEventListeners();

//реализация попапа с данными профиля

const popupWithFormProfileEdit = new PopupWithForm(
  selectors.popupProfileEdit,
  (data) => {
    //renderLoading(selectors.popupProfileEdit, true);
    api.setUserInfo(data)
    .then((info) => {
      userInfo.setUserInfo({
        userName: info.name,
        userDescription: info.about
      })
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
    userAvatar: userData.avatar
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
  validatorFormPopupAddCard.resetValidation();
});

buttonProfileEdit.addEventListener("click", () => {
  popupWithFormProfileEdit.open();
  validatorFormPopupProfileEdit.resetValidation();
  popupWithFormProfileEdit.setInputValues(userInfo.getUserInfo());
});

buttonEditProfilePhoto.addEventListener("click", () => {
  popupWithFormEditProfilePhoto.open();
  validatorFormEditProfilePhoto.resetValidation();
});

const createCard = (cardData) => {
  const card = new Card({
    data: { ...cardData, currentUserId: userId},
        handleCardClick: () => {
          popupWithImage.open(cardData);
        },
        handleLikeCard: () => {
          if (card.isLiked()) {
            api.deleteLike(card.id())
            .then(data => {
              return card.setLikesInfo(data.likes);
            })
            .catch(error => console.log(`Ошибка изменения статуса лайка: ${error}`))
          } else {
            api.addLike(card.id())
            .then(data => {
              return card.setLikesInfo(data.likes);
            })
            .catch(error => console.log(`Ошибка изменения статуса лайка: ${error}`))
          }
        },         
        handleDeleteCard: (card) => {
          popupConfirm.open();
          popupConfirm.submitHandler(() => {
            api.removeCard(card.id())
            .then(() => {
              card.removeCard();
              popupConfirm.close();
            })
            .catch(error => console.log(`При удалении карточки ошибка: ${error}`))
            });
          },
    }, selectors.templateCard
  )
  return card.generate();
}