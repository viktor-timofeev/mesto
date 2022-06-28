  let editButton = document.querySelector('.profile__edit-button');
  let formElement = document.querySelector('.popup');
  let closeButton = formElement.querySelector('.popup__close-icon');
  let saveButton = document.querySelector('.popup__save-button');
  let nameInput = document.querySelector('.popup__input-title');
  let infoInput = document.querySelector('.popup__input-subtitle');
  let title = document.querySelector('.profile__title');
  let subtitle = document.querySelector('.profile__subtitle');

  function showPopup() {
    formElement.classList.add('popup_opened');
  }

  function hidePopup() {
    formElement.classList.remove('popup_opened');
  }

  function formSubmitHandler(evt) {
    evt.preventDefault();
    title.textContent = `${nameInput.value}`;
    subtitle.textContent = `${infoInput.value}`;
    formElement.classList.remove('popup_opened');
    nameInput.value = 'Жак-Ив Кусто'
    infoInput.value = 'Исследователь океана'
  }

  editButton.addEventListener('click', showPopup);
  closeButton.addEventListener('click', hidePopup);
  saveButton.addEventListener('click', formSubmitHandler);