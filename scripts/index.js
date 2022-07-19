const selectors = {
    popupProfileEdit: '.popup_function_edit',
    popupCardAdd: '.popup_function_add',
    popupImage: '.popup_function_closeup',
    popupImageCaption: '.popup__image-caption',
    popupImageItem: '.popup__image',
    buttonProfileEdit: '.profile__edit-button',
    buttonPopupHide: '.popup__close-button',
    buttonCardAdd: '.profile__add-button',
    buttonClosePopup: '.popup__close-button',
    formPopupProfileEdit: '.popup__form_function_edit',
    formPopupAddCard: '.popup__form_function_add',
    inputProfileName: '.popup__input_type_title',
    inputProfileInfo: '.popup__input_type_subtitle',
    inputCardName: '.popup__input_type_name',
    inputCardLink: '.popup__input_type_link',
    profileTitle: '.profile__title',
    profileInfo: '.profile__subtitle',
    templateCard: '.elements-item',
    cardsList: '.elements',
  }
  
  const buttonProfileEdit = document.querySelector(selectors.buttonProfileEdit);
  const buttonPopupHide = document.querySelector(selectors.buttonPopupHide);
  const buttonCardAdd = document.querySelector(selectors.buttonCardAdd);
  const buttonsClosePopup = document.querySelectorAll(selectors.buttonClosePopup)
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
  
  function showPopup(element) {
    element.classList.add('popup_opened');
    element.querySelector('.popup__close-button').addEventListener('click', hidePopup);
  }
  
   function submitPopupProfileEdit(evt) {
    evt.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileInfo.textContent = inputProfileInfo.value;
    hidePopup(evt);
  }

  function removeCard(event) {
    const card = event.target.closest('.elements__element');
    card.remove();
  }

  function createCard(item) {
    const element = templateCard.querySelector('.elements__element').cloneNode(true);
    element.querySelector('.elements__image').src = item.link;
    element.querySelector('.elements__image').alt = item.name;
    element.querySelector('.elements__title').textContent = item.name;
   element.querySelector('.elements__like').addEventListener('click', function(evt) {
   evt.target.classList.toggle('elements__like_state_active');
   });
   element.querySelector('.elements__trash').addEventListener('click', removeCard);
   element.querySelector('.elements__image').addEventListener('click', function() {
   showPopup(popupImage);
   }); 
   return element;
  }

  function submitPopupCardAdd(evt) {
    evt.preventDefault();
    const newCards = [
      {
        name: inputCardName.value,
        link: inputCardLink.value,
      },
    ]
    newCards.forEach((item) => {
      cardsList.prepend(createCard(item));
    })
    hidePopup(evt);
    evt.target.reset();
  }

  function showPopupImage(evt) {
    const image = evt.target.closest('.elements__image');
    const item = evt.target.closest('.elements__element');
    const caption = item.querySelector('.elements__title').textContent;
    console.log(caption);
    showPopup(popupImage);
    popupImageItem.src = image.src;
    popupImageItem.alt = image.alt;
    popupImageCaption.textContent = caption;
  }

  initialCards.forEach((item) => {
    cardsList.append(createCard(item));
  });
  buttonProfileEdit.addEventListener('click', function() {
  showPopup(popupProfileEdit);
  inputProfileName.value = profileName.textContent;
  inputProfileInfo.value = profileInfo.textContent;
  })
  formPopupProfileEdit.addEventListener('submit', submitPopupProfileEdit);
  formPopupAddCard.addEventListener('submit', submitPopupCardAdd);
  buttonCardAdd.addEventListener('click', function() {
  showPopup(popupCardAdd);
  });

  buttonsClosePopup.forEach((button) => {
    const popup = button.closest('.popup')
    button.addEventListener('click', hidepopup);
  })
  
  function hidePopup(evt) {
    const closedPopup = evt.target.closest('.popup');
    closedPopup.classList.remove('popup_opened');
   }