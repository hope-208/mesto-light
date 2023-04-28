export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameProfile = document.querySelector(nameSelector);
    this._jobProfile = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      nameProfile: this._nameProfile.textContent,
      jobProfile: this._jobProfile.textContent,
    };
  }

  setUserInfo({ newName, newJob }) {
    this._nameProfile.textContent = newName;
    this._jobProfile.textContent = newJob;
  }
}
