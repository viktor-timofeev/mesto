export class UserInfo {
	constructor(SelectorProfileName, SelectorProfileInfo) {
    this._selectorProfileName = SelectorProfileName;
    this._selectorProfileInfo = SelectorProfileInfo;
    this._profileName = document.querySelector(this._selectorProfileName).textContent;
    this._profileInfo = document.querySelector(this._selectorProfileInfo).textContent;
    //this._profileNameInPopup = document.querySelector(this._selectorProfileName).value;
    //this._profileInfoInPopup = document.querySelector(this._selectorProfileInfo).value;
	}

  getUserInfo() {
    return {
      name: this._profileName,
      info: this._profileInfo
    }
  }

  setUserInfo(item) {
    this._profileName = item.name;
    this._profileInfo = item.info;
  }
}    

