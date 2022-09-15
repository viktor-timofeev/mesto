export class UserInfo {
  constructor(SelectorProfileName, SelectorProfileInfo, SelectorProfileAvatar) {
    this._profileName = document.querySelector(SelectorProfileName);
    this._profileInfo = document.querySelector(SelectorProfileInfo);
    this._profileAvatar = document.querySelector(SelectorProfileAvatar);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileInfo.textContent,
    };
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileInfo.textContent = data.about;
    this._profileAvatar.src = data.avatar;
  }
}

