  const validateConfig = {
    form: ".popup__form",
    button: ".popup__submit-button",
    input: ".popup__input",
    inputError: "popup__input_type_error",
    buttonActive: "popup__submit-button_type_active",
    buttonInactive: "popup__submit-button_type_inactive",
  };

  const selectors = {
    popupProfileEdit: ".popup_function_edit",
    popupCardAdd: ".popup_function_add",
    popupImage: ".popup_function_closeup",
    buttonProfileEdit: ".profile__edit-button",
    buttonCardAdd: ".profile__add-button",
    formPopupProfileEdit: ".popup__form_function_edit",
    formPopupAddCard: ".popup__form_function_add",
    inputCardName: ".popup__input_type_name",
    inputCardLink: ".popup__input_type_link",
    profileTitle: ".profile__title",
    profileInfo: ".profile__subtitle",
    templateCard: ".elements-item",
    cardsList: ".elements"
  };

  const buttonProfileEdit = document.querySelector(selectors.buttonProfileEdit);
  const buttonCardAdd = document.querySelector(selectors.buttonCardAdd);
  const formPopupProfileEdit = document.querySelector(selectors.formPopupProfileEdit);
  const formPopupAddCard = document.querySelector(selectors.formPopupAddCard);
  const inputCardName = document.querySelector(selectors.inputCardName);
  const inputCardLink = document.querySelector(selectors.inputCardLink);

  export {  validateConfig,
            selectors,
            buttonProfileEdit,
            buttonCardAdd,
            formPopupProfileEdit,
            formPopupAddCard,
            inputCardName,
            inputCardLink
          }; 

