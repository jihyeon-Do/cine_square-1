const LOCALSTORAGE_ACCOUNT_ID = 'account';

export default class AccountService {
  static save(account) {
    localStorage.setItem(LOCALSTORAGE_ACCOUNT_ID, account);
  }

  static get() {
    return localStorage.getItem(LOCALSTORAGE_ACCOUNT_ID);
  }

  static delete() {
    return localStorage.removeItem(LOCALSTORAGE_ACCOUNT_ID);
  }
}
