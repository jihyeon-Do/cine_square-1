import axios from 'axios';
import APIService from './APIService';

const AWSAPI = APIService.AWSAPI;
const LOCALAPI = APIService.LOCALAPI;

const BOXOFFICE_URL = `${AWSAPI}/movie/boxoffice`;
// const BOXOFFICE_URL = `${LOCALAPI}/movie/boxoffice`;

export default class BoxOfficeService {
  static async getBoxOfficeList() {
    const response = await axios.get(`${BOXOFFICE_URL}`);
    return response.data.result;
  }
}
