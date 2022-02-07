import axios from 'axios';
import APIService from '../service/APIService';
import { message } from 'antd';

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
      message.error('이메일 또는 비밀번호가 맞지 않습니다.');
      return false;
    } else {
      return response.data.result;
    }
  }
}
