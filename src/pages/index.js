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

import './index.css';

/*import arkhyzImage from '../images/arkhyz.jpg';
import chelyabinskOblastImage from '../images/chelyabinsk-oblast.jpg';
import ivanovoImage from '../images/ivanovo.jpg';
import kamchatkaImage from '../images/kamchatka.jpg';
import kholmogorskyRayonImage from '../images/kholmogorsky-rayon.jpg';
import baikalImage from '../images/baikal.jpg';*/
import { Api } from "../components/Api.js";

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

//let userId = null;

const popupWithImage = new PopupWithImage(selectors.popupImage);
popupWithImage.setEventListeners();


/*const popupWithFormCardAdd = new PopupWithForm(selectors.popupCardAdd, 
  (data) => {
  const card = createCard(data);
  defaultCardList.addItem(card);
  popupWithFormCardAdd.close();
  });
  popupWithFormCardAdd.setEventListeners();*/


const userInfo = new UserInfo(selectors.profileTitle, selectors.profileInfo, selectors.profileAvatar);
const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-50',
  headers: {
  authorization: "5d18e568-66bc-4809-86d6-8fc39fab9075", 
  "content-type": "application/json" 
  }
  });


//реализация попапа с данными профиля
/*
const popupWithFormProfileEdit = new PopupWithForm(
  selectors.popupProfileEdit,
  (data) => {*/
    /*userInfo.setUserInfo(data);*/
    //renderLoading(selectors.popupProfileEdit, true);
/*    api.setUserInfo({
      name: data.userName,
      about: data.userDescription
    })
    .then((info) => {
      userInfo.setUserInfo({
        userName: info.name,
        userDescription: info.about
      })
      popupWithFormProfileEdit.close();
    })
    .catch(error => console.log(`Ошибка при обновлении информации о пользователе: ${error}`))
    .finally(() => {
      renderLoading(selectors.popupProfileEdit);
    })
  });
  popupWithFormProfileEdit.setEventListeners();
*/

//сервер

/*Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([userData, cards]) => {
  cards.reverse();
  defaultCardList.renderItems(cards);
  userInfo.setUserInfo(userData);
  console.log(userData);
  console.log(cards);
})
.catch(error => console.log(`Ошибка: ${error}`));*/

api.getInitialCards()
.then((cards) => {
  cards.reverse();
  defaultCardList.renderItems(cards);
})
.catch(error => console.log(`Ошибка: ${error}`));

































function renderLoading(isLoading) {
  if (isLoading) {
    spinner.classList.add("spinner_visible");
    content.classList.add("content_hidden");
  } else {
   spinner.classList.remove("spinner_visible");
    content.classList.remove("content_hidden");
  }
} 


/*api.setUserInfo()
.then((res) =>)*/






/*api.getInitialCards()

api.addNewCard()
.then(([userData, cards]) => {

cards.reverse();
defaultCardList.renderItems(cards);
})
.catch((error) => console.log(`Ошибка: ${error}`))*/






buttonCardAdd.addEventListener("click", () => {
  popupWithFormCardAdd.open();
  //popupWithFormCardAdd.setEventListeners();
  validatorFormPopupAddCard.resetValidation();
});

buttonProfileEdit.addEventListener("click", () => {
  popupWithFormProfileEdit.open();
  //popupWithFormProfileEdit.setEventListeners();
  validatorFormPopupProfileEdit.resetValidation();
  const data = userInfo.getUserInfo();
  popupWithFormProfileEdit.setInputValues(data);
});

const createCard = (item) => {
  const card = new Card(
    {  data: {
      name: item.name,
      link: item.link,
      likes: item.likes,
      currentUserId: userId,
      _id: item.id,
 //     owner: {id: item.owner._id}
      
        },
        handleCardClick: () => {
          popupWithImage.open(item);
        },
        handleLikeCard: (card) => {
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
          },
    }, selectors.templateCard
  )
	//const cardElement = card.generate(item);
  //return cardElement;
  return card.generate();
}

/*

api.getApiInfo()
.then(([cardsArray, userData]) => {
  userId = userData._id;
  userInfo.setUserInfo({
    userName: userData.name,
    userDescription: userData.about,
    userAvatar: userData.avatar
  });
  defaultCardList.renderItems(cardsArray);
})
.catch(error=>console.log(`Ошибка загрузки данных: ${error}`));

*/
