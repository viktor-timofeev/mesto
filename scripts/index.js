  const selectors = {
    popup: '.popup',
    popupProfileEdit: '.popup_function_edit',
    popupCardAdd: '.popup_function_add',
    popupImage: '.popup_function_closeup',
    popupImageCaption: '.popup__image-caption',
    popupImageItem: '.popup__image',
    buttonProfileEdit: '.profile__edit-button',
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
    image: '.elements__image',
  }
  
  const popups = document.querySelectorAll(selectors.popup);
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
  const images = document.querySelectorAll(selectors.image);

  function showPopup(element) {
    element.classList.add('popup_opened');
  }

  function hidePopup() {
    popups.forEach((popup) => {
      popup.classList.remove('popup_opened'); 
    });
  }

  function submitPopupCardAdd(evt) {
    evt.preventDefault();
    const newCards = [{
        name: inputCardName.value,
        link: inputCardLink.value,
      },]
    newCards.forEach((item) => {
      cardsList.prepend(createCard(item));
    })
    hidePopup();
    evt.target.reset();
    //inputCardName.value = "";
    //inputCardLink.value = "";
  }
  
   function submitPopupProfileEdit(evt) {
    evt.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileInfo.textContent = inputProfileInfo.value;
    hidePopup();
    evt.target.reset();
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
      popupImageItem.src = item.link;
      popupImageItem.alt = item.name;
      popupImageCaption.textContent = item.name;
    }); 
    return element;
  }

  function removeCard(evt) {
    const card = evt.target.closest('.elements__element');
    card.remove();
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

  popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        hidePopup();
      }
      if (evt.target.classList.contains('popup__close-button')) {
        hidePopup();
      }
    })
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        hidePopup();
      }   
    });
  }) 
  