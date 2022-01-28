import axios from 'axios';
import APIService from '../service/APIService';

const AWSAPI = APIService.AWSAPI;
const LOCALAPI = APIService.LOCALAPI;

export default class UserService {
  static async getUserInfo(account, password) {
    const response = await axios.post(
      `${AWSAPI}/user/signin`,
      // `${LOCALAPI}/user/signin`,
      { account, password },
    );
    console.log(response);
    if (response.data.result === null) {
      return false;
    }
    return response.data.result;
  }
}
