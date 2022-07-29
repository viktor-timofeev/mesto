

function enableValidation(config) {

  const formPage = {
    form: '.popup__form',
    button: '.popup__submit-button',
    input: '.popup__input',
    inputError: '.popup__input-error',
    buttonActive: 'popup__submit-button_type_active',
    buttonInactive: 'popup__submit-button_type_inactive',
  }
  //Найти форму в документе
  const form = Array.from(document.querySelectorAll(config.form));
  form.forEach((form) => {
    form.addEventListener('input', (event) => handleFormInput(event, config));
  });
}

function handleFormInput(event, config) {
  //target - элемент, на котором произошло событие; currentTarget - элемент, на который повешен слушатель
  const input = event.target;
  const form = event.currentTarget;
  //установить кастомные тексты ошибок
  //setCustomError(input);
  //показать ошибкив контейнере под каждым полем
  showFieldError(input, form);
  //активировать кнопку отправки формы
  setSubmitButtonState(form, config);
}

function showFieldError(input, form) {
  //const span = input.nextElementSibling;
  const span = form.querySelector(`.${input.name}-error`);
  span.textContent = input.validationMessage;
}

function setSubmitButtonState(forms, config) {
  const button = form.querySelector(config.button);
  const isValid = form.checkValidity();
  if(isValid) {
    button.removeAttribute('disabled');
    button.classList.remove(config.buttonInactive);
    button.classList.add(config.buttonActive);
  } else {
    button.setAttribute('disabled', true);
    button.classList.add(config.buttonInactive);
    button.classList.remove(config.buttonActive);
  }  
}

enableValidation(formPage);