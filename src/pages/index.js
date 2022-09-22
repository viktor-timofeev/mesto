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
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

import './index.css';

//валидация

const validatorFormPopupProfileEdit = new FormValidator(validateConfig, formPopupProfileEdit);
validatorFormPopupProfileEdit.enableValidation();

const validatorFormPopupAddCard = new FormValidator(validateConfig, formPopupAddCard);
validatorFormPopupAddCard.enableValidation();

//const validatorFormEditProfilePhoto = new FormValidator(validateConfig, formEditProfilePhoto);
//validatorFormEditProfilePhoto.enableValidation();



const userInfo = new UserInfo(selectors.profileTitle, selectors.profileInfo/*, selectors.profileAvatar*/);
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

//реализация попапа добавления новой карточки

let userId = null;

const popupWithImage = new PopupWithImage(selectors.popupImage);
popupWithImage.setEventListeners();

//реализация попапа с подтверждением удаления карточки

const popupConfirm = new PopupWithConfirmation(selectors.popupConfirmDeleteCard);
popupConfirm.setEventListeners();


//реализация попапа с редактированием фото профиля


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

/*function handleLikeCard(id) {
  if (card.isLiked) {
    api.deleteLike(id)
    .then(data => {
      card.setLikesInfo({...data});
    })
    .catch(error => console.log(`Ошибка изменения статуса лайка: ${error}`))
  } else {
    api.likeCard(id)
    .then(data => {
      card.setLikesInfo({...data});
    })
    .catch(error => console.log(`Ошибка изменения статуса лайка: ${error}`))
  }           
} */


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
      
        handleDeleteIconClick: (card) => {
          console.log(card);
          popupConfirm.open();
        /*  popupConfirm.submitHandler(() => {
            api.removeCard(card.id())
            .then(() => {
              card.removeCard();
              popupConfirm.close();
            })
            .catch(error => console.log(`При удалении карточки ошибка: ${error}`))
            });*/
          },
    }, selectors.templateCard
  )
  return card.generate();
}
