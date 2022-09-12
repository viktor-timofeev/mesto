export class Api {
  constructor(setting) { 
    this._address = setting.baseUrl; 
    this._headers = setting.headers; 
}
  
getUserInfo() { 
  return fetch(`${this._address}/users/me`, {
      method: "GET", 
      headers: this._headers 
  }).then(res => {
    return res.json();

});
}

getInitialCards() {
  return fetch(`${this._address}/cards`, {
    method: "GET", 
    headers: this._headers
}).then(res => {
  return res.json();
});
}

editProfile(item) {
  return fetch(`${this._address}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: item.name,
      about: item.about
    })
  }).then(res => {
    return res.json();
  });
}

addNewCard(newCard) {
  return fetch(`${this._address}/cards`, {
    method: "POST", 
    headers: this._headers,
    body: JSON.stringify({
      name: newCard.name,
      link: newCard.link
})
}).then(res => {
  return res.json();
});
} 

/*  fetch('https://mesto.nomoreparties.co/v1/cohort-50/cards', {
   headers: {
      authorization: '5d18e568-66bc-4809-86d6-8fc39fab9075'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    }); */


}

