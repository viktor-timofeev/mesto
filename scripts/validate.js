const validateConfig = {
  form: ".popup__form",
  button: ".popup__submit-button",
  input: ".popup__input",
  inputError: "popup__input_type_error",
  buttonActive: "popup__submit-button_type_active",
  buttonInactive: "popup__submit-button_type_inactive",
};

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.form));
  forms.forEach((form) => {
    form.addEventListener("input", (evt) => handleFormInput(evt, config));
  });
}

function handleFormInput(evt, config) {
  const input = evt.target;
  const form = evt.currentTarget;
  if (!input.validity.valid) {
    showFieldError(input, form, config);
  } else {
    hideFieldError(input, form, config);
  }
  setSubmitButtonState(form, config);
}

function showFieldError(input, form, config) {
  const span = form.querySelector(`.${input.name}-error`);
  span.textContent = input.validationMessage;
  input.classList.add(config.inputError);
}

function hideFieldError(input, form, config) {
  const span = form.querySelector(`.${input.name}-error`);
  span.textContent = "";
  input.classList.remove(config.inputError);
}

function setSubmitButtonState(form, config) {
  const button = form.querySelector(config.button);
  const isValid = form.checkValidity();
  if (isValid) {
    button.removeAttribute("disabled");
    button.classList.remove(config.buttonInactive);
    button.classList.add(config.buttonActive);
  } else {
    button.setAttribute("disabled", true);
    button.classList.add(config.buttonInactive);
    button.classList.remove(config.buttonActive);
  }
}

enableValidation(validateConfig);