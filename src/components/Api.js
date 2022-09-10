export class Api {
  constructor(setting) { 
    this._address = setting.baseUrl; 
    this._headers = setting.headers; 
}
  
getUserInfo() { 
  return fetch(`${this._address}/users/me`, {
      method: "GET", 
      headers: this._headers 
  }).then((res) => {
     console.log(res);
});
}

getCards() {
  return fetch(`${this._address}/users/me`, {
    method: "GET", 
    headers: this._headers, 
}).then((res) => {
   console.log(res);
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

