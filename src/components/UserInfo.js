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
      avatar: this._profileAvatar
    };
  }

  setUserInfo(data) {
    this._profileName.textContent = data.userName;
    this._profileInfo.textContent = data.userDescription;

  }

  setUserPic(data) {
    this._profileAvatar.src = data.userAvatar;
  }

}

