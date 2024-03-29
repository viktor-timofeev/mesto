export class Api {
  constructor(setting) { 
    this._address = setting.baseUrl; 
    this._headers = setting.headers; 
}

_getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
}
  
getUserInfo() { 
  return fetch(`${this._address}/users/me`, {
      method: "GET", 
      headers: this._headers 
    })
      .then(res => this._getResponseData(res));
}

setUserInfo(newData) {
  return fetch(`${this._address}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: newData.name,
      about: newData.about
    })
  })
  .then(res => this._getResponseData(res));
 }; 

getInitialCards() {
  return fetch(`${this._address}/cards`, {
    method: "GET", 
    headers: this._headers
})
.then(res => this._getResponseData(res));
}

addNewCard(newCard) {
  return fetch(`${this._address}/cards`, {
    method: "POST", 
    headers: this._headers,
    body: JSON.stringify({
      name: newCard.title,
      link: newCard.link
})
})
.then(res => this._getResponseData(res));
} 


addLike (cardId) {
  return fetch(`${this._address}/cards/${cardId}/likes`, {
    method: "PUT", 
    headers: this._headers
})
.then(res => this._getResponseData(res));
}

deleteLike (cardId) {
  return fetch(`${this._address}/cards/${cardId}/likes`, {
    method: "DELETE", 
    headers: this._headers
})
.then(res => this._getResponseData(res));
}

removeCard(cardId) {
return fetch(`${this._address}/cards/${cardId}`, {
  method: "DELETE", 
  headers: this._headers
})
.then(res => this._getResponseData(res));
}

setUserPic(newData) {
  return fetch(`${this._address}/users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar: newData.avatar
    })
  })
  .then(res => this._getResponseData(res));
}

}



