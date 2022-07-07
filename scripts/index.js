  let editButton = document.querySelector('.profile__edit-button');
  let formElement = document.querySelector('.popup');
  let form = document.querySelector('.popup__form');
  let nameInput = document.querySelector('.popup_input-type_title');
  let infoInput = document.querySelector('.popup_input-type_subtitle');
  let title = document.querySelector('.profile__title');
  let subtitle = document.querySelector('.profile__subtitle');
  let closeButton = formElement.querySelector('.popup__close-icon'); 

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

  editButton.addEventListener('click', showPopup);
  form.addEventListener('submit', formSubmitHandler);
  closeButton.addEventListener('click', hidePopup);
  