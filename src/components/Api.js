export class Api {
  constructor(setting) { 
    this._address = setting.baseUrl; 
    this._headers = setting.headers; 
}
  
getUserInfo() { 
  return fetch(`${this._address}/users/me`, {
      method: "GET", 
      headers: this._headers 
    })
      .then(res => {
      return res.json();
    });
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
  .then(res => {
    return res.json();
  })
 }; 

getInitialCards() {
  return fetch(`${this._address}/cards`, {
    method: "GET", 
    headers: this._headers
}).then(res => {
  return res.json();
});
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
.then(res => {
  return res.json();
});
} 


addLike (cardId) {
  return fetch(`${this._address}/cards/${cardId}/likes`, {
    method: "PUT", 
    headers: this._headers
})
.then(res => {
  return res.json();
});
}

deleteLike (cardId) {
  return fetch(`${this._address}/cards/${cardId}/likes`, {
    method: "DELETE", 
    headers: this._headers
})
.then(res => {
  return res.json();
});
}


/*changeLikeCardStatus(cardId, isLiked) {
  if (isLiked) {
    return fetch(`${this._address}/cards/${cardId}/likes`, {
      method: "DELETE", 
      headers: this._headers
  })
  .then(res => {
    return res.json();
  });
  } else {
    return fetch(`${this._address}/cards/${cardId}/likes`, {
      method: "PUT", 
      headers: this._headers
  })
  .then(res => {
    return res.json();
  });
  }
}*/

removeCard(cardId) {
return fetch(`${this._address}/cards/${cardId}`, {
  method: "DELETE", 
  headers: this._headers
})
.then(res => {
return res.json();
});
}

setUserPic(newData) {
  return fetch(`${this._address}/users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar: newData.avatar
    })
  })
  .then(res => {
    return res.json();
  })
 }; 
}



