import axios from 'axios';

export default class UserService {
  static async getUserInfo(account, password) {
    const response = await axios.post(
      'http://cinesquare.yahmedora.com:8080/user/signin',
      { account, password },
    );
    console.log(response);
    if (response.data.result === null) {
      return false;
    }
    return response.data.result;
  }
}
