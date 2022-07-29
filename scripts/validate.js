const form = {
  form: '.popup__form',
  button: '.popup__submit-button',
  input: '.popup__input',
  inputError: '.popup__input-error',
  buttonActive: 'popup__submit-button_type_active',
  buttonInactive: 'popup__submit-button_type_inactive',
}

function enableValidation(config) {
  //Найти форму в документе
  const form = Array.from(document.querySelectorAll(config.form));
  form.forEach((form) => {
    form.addEventListener('input', (evt) => handleFormInput(evt, config));
  });
  form.forEach((form) => {
    form.addEventListener('submit', (evt) => handleFormSubmit(evt, config));
  });
}

function handleFormInput(evt, config) {
  //target - элемент, на котором произошло событие; currentTarget - элемент, на который повешен слушатель
  const input = evt.target;
  const form = evt.currentTarget;
  //установить кастомные тексты ошибок
  //setCustomError(input);
  //показать ошибкив контейнере под каждым полем
  showFieldError(input, form);
  //активировать кнопку отправки формы
  setSubmitButtonState(form, config);
}

function handleFormSubmit(evt, config) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const isValid = form.checkValidity();
  
  if(isValid) {
    form.reset();
    button.setAttribute('disabled', true);
    button.classList.add(config.buttonInactive);
    button.classList.remove(config.buttonActive);
  }
}
  

function showFieldError(input, form) {
  const span = form.querySelector(`.${input.name}-error`);
  span.textContent = input.validationMessage;
}

function setSubmitButtonState(form, config) {
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

enableValidation(form);