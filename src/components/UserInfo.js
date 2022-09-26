export class UserInfo {
  constructor(selectorProfileName, selectorProfileInfo, selectorProfileAvatar) {
    this._profileName = document.querySelector(selectorProfileName);
    this._profileInfo = document.querySelector(selectorProfileInfo);
    this._profileAvatar = document.querySelector(selectorProfileAvatar);
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

