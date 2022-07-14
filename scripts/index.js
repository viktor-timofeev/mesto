const selectors = {
  buttonEditProfile: '.profile__edit-button',
  buttonCloseForm: '.popup__close-icon',
  formElement: '.popup',
  form: '.popup__form',
  nameInput: '.popup__input_type_title',
  infoInput: '.popup__input_type_subtitle',
  title: '.profile__title',
  subtitle: '.profile__subtitle',
  buttonAddCard: '.profile__add-button',
  cardFormElement: '.add-form',
  cardForm: '.add-form__form',
  buttonCloseCardForm: '.add-form__close-icon',
  cardNameInput: '.add-form__input_type_name',
  cardLinkInput: '.add-form__input_type_link',
  cards: '.elements',
  templateCard: '.elements-item',
  buttonRemoveCard: '.elements__trash',
  popupImage: '.image-popup',
  popupImageItem: '.image-popup__image',
  popupImageTitle: '.image-popup__title',
  buttonCloseImagePopup: '.image-popup__close-icon',
}

const buttonEditProfile = document.querySelector(selectors.buttonEditProfile);
const formElement = document.querySelector(selectors.formElement);
const form = document.querySelector(selectors.form);
const nameInput = document.querySelector(selectors.nameInput);
const infoInput = document.querySelector(selectors.infoInput);
const title = document.querySelector(selectors.title);
const subtitle = document.querySelector(selectors.subtitle);
const buttonCloseForm = formElement.querySelector(selectors.buttonCloseForm);
const buttonAddCard = document.querySelector(selectors.buttonAddCard);
const cardFormElement = document.querySelector(selectors.cardFormElement);
const cardForm = document.querySelector(selectors.cardForm);
const buttonCloseCardForm = cardFormElement.querySelector(selectors.buttonCloseCardForm);
const cardNameInput = document.querySelector(selectors.cardNameInput);
const cardLinkInput = document.querySelector(selectors.cardLinkInput);
const cards = document.querySelector(selectors.cards);
const templateCard = document.querySelector(selectors.templateCard).content;
const buttonRemoveCard = document.querySelector(selectors.buttonRemoveCard);
const popupImage = document.querySelector(selectors.popupImage);
const popupImageItem = document.querySelector(selectors.popupImageItem);
const popupImageTitle = document.querySelector(selectors.popupImageTitle);
const buttonCloseImagePopup = document.querySelector(selectors.buttonCloseImagePopup);
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function showCardPopup() {
  cardFormElement.classList.add('add-form_opened');
}

function hideCardPopup() {
  cardFormElement.classList.remove('add-form_opened');
}

function showPopup() {
  formElement.classList.add('popup_opened');
  nameInput.value = title.textContent;
  infoInput.value = subtitle.textContent;
}

function hidePopup() {
  formElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = infoInput.value;
  hidePopup();
}

function handleRemove(event) {
  const cardItem = event.target.closest('.elements__element');
  cardItem.remove();
}

function handleShowPopupImage(event) {
  const image = event.target.closest('.elements__image');
  const cardItem = event.target.closest('.elements__element');
  const imageTitle = cardItem.querySelector('.elements__title');
  popupImage.classList.add('image-popup_opened');
  popupImageItem.src = image.src;
  popupImageItem.alt = image.alt;
  popupImageTitle.textContent = imageTitle.textContent;
}

function handleHidePopupImage() {
  popupImage.classList.remove('image-popup_opened');
}

initialCards.forEach(function (element) {
  const userElementCard = templateCard.querySelector('.elements__element').cloneNode(true);
  userElementCard.querySelector('.elements__image').src = element.link;
  userElementCard.querySelector('.elements__image').alt = element.name;
  userElementCard.querySelector('.elements__title').textContent = element.name;
  userElementCard.querySelector('.elements__like').addEventListener('click', function (event) {
    event.target.classList.toggle('elements__like_state_active');
  });
  userElementCard.querySelector('.elements__trash').addEventListener('click', handleRemove);
  userElementCard.querySelector('.elements__image').addEventListener('click', handleShowPopupImage);
  cards.append(userElementCard);
});

function cardSubmitHandler(evt) {
  evt.preventDefault();
  const userElementCard = templateCard.querySelector('.elements__element').cloneNode(true);
  userElementCard.querySelector('.elements__image').src = cardLinkInput.value;
  userElementCard.querySelector('.elements__image').alt = cardNameInput.value;
  userElementCard.querySelector('.elements__title').textContent = cardNameInput.value;
  userElementCard.querySelector('.elements__like').addEventListener('click', function (event) {
    event.target.classList.toggle('elements__like_state_active');
  });
  userElementCard.querySelector('.elements__trash').addEventListener('click', handleRemove);
  userElementCard.querySelector('.elements__image').addEventListener('click', handleShowPopupImage);
  cards.append(userElementCard);
  cards.prepend(userElementCard);
  hideCardPopup();
  cardLinkInput.value = "";
  cardNameInput.value = "";
}

buttonEditProfile.addEventListener('click', showPopup);
form.addEventListener('submit', formSubmitHandler);
buttonCloseForm.addEventListener('click', hidePopup);
buttonCloseCardForm.addEventListener('click', hideCardPopup);
buttonAddCard.addEventListener('click', showCardPopup);
cardForm.addEventListener('submit', cardSubmitHandler);
buttonCloseImagePopup.addEventListener('click', handleHidePopupImage);