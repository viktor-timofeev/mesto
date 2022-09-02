export class UserInfo {
  constructor(SelectorProfileName, SelectorProfileInfo) {
    this._profileName = document.querySelector(SelectorProfileName);
    this._profileInfo = document.querySelector(SelectorProfileInfo);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      occupation: this._profileInfo.textContent,
    };
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileInfo.textContent = data.occupation;
  }
}

