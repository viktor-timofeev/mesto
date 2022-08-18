const validateConfig = {
  form: ".popup__form",
  button: ".popup__submit-button",
  input: ".popup__input",
  inputError: "popup__input_type_error",
  buttonActive: "popup__submit-button_type_active",
  buttonInactive: "popup__submit-button_type_inactive",
};

class FormValidator {
	constructor(config, formSelector) {
    this._config = config;
    this._formSelector = formSelector; 
	}

  _handleFormInput = (evt) => {
    const input = evt.target;
    const form = evt.currentTarget;
    if (!input.validity.valid) {
      this._showFieldError(input);
    } else {
      this._hideFieldError(input);
    }
    this._setSubmitButtonState(form);
  }
  
  _showFieldError = (input) => {
    const span = this._formSelector.querySelector(`.${input.name}-error`);
    span.textContent = input.validationMessage;
    input.classList.add(this._config.inputError);
  }
  
  _hideFieldError = (input) => {
    const span = this._formSelector.querySelector(`.${input.name}-error`);
    span.textContent = "";
    input.classList.remove(this._config.inputError);
  }
  
  _setSubmitButtonState = () => {
    const button = this._formSelector.querySelector(this._config.button);
    const isValid = this._formSelector.checkValidity();
    if (isValid) {
      button.removeAttribute("disabled");
    button.classList.remove(this._config.buttonInactive);
    button.classList.add(this._config.buttonActive);
    } else {
      button.setAttribute("disabled", true);
    button.classList.add(this._config.buttonInactive);
    button.classList.remove(this._config.buttonActive);
    }
  }

  enableValidation = () => {
    const forms = Array.from(document.querySelectorAll(this._config.form));
    forms.forEach((form) => {
      form.addEventListener("input", (evt) => this._handleFormInput(evt));
    });
  }

  resetValidation = () => {
    this._setSubmitButtonState();
    const inputList = Array.from(this._formSelector.querySelectorAll(this._config.input));
    inputList.forEach((input) => {
      this._hideFieldError(input);
    });
}
}

export {validateConfig, FormValidator};