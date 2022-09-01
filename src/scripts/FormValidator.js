class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._button = this._form.querySelector(this._config.button);
    this._inputList = Array.from(this._form.querySelectorAll(this._config.input));
  }

  _handleFormInput = (evt) => {
    const input = evt.target;
    if (!input.validity.valid) {
      this._showFieldError(input);
    } else {
      this._hideFieldError(input);
    }
    this._setSubmitButtonState();
  }

  _showFieldError = (input) => {
    const span = this._form.querySelector(`.${input.name}-error`);
    span.textContent = input.validationMessage;
    input.classList.add(this._config.inputError);
  }

  _hideFieldError = (input) => {
    const span = this._form.querySelector(`.${input.name}-error`);
    span.textContent = "";
    input.classList.remove(this._config.inputError);
  }

  _setSubmitButtonState = () => {
    const isValid = this._form.checkValidity();
    if (isValid) {
      this._button.removeAttribute("disabled");
      this._button.classList.remove(this._config.buttonInactive);
      this._button.classList.add(this._config.buttonActive);
    } else {
      this._button.setAttribute("disabled", true);
      this._button.classList.add(this._config.buttonInactive);
      this._button.classList.remove(this._config.buttonActive);
    }
  }

  enableValidation = () => {
    this._form.addEventListener("input", (evt) => this._handleFormInput(evt));
  }

  resetValidation = () => {
    this._setSubmitButtonState();
    this._inputList.forEach((input) => {
      this._hideFieldError(input);
    });
  }
}

export { FormValidator };