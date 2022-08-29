export class UserInfo {
	constructor({SelectorProfileName, SelectorProfileInfo}) {
    this._SelectorProfileName = SelectorProfileName;
    this._SelectorProfileInfo = SelectorProfileInfo;
    this._name = document.querySelector(this._SelectorProfileName).textContent;
    this._description = document.querySelector(this._SelectorProfileInfo).textContent;
	}

  getUserInfo() {
    return {name: this._name,
    description: this._description}
  }

  setUserInfo() {
    this._name = this.getUserInfo.name;
    this._description = this.getUserInfo.description;
  }
  
}    

