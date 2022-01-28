import axios from 'axios';
import APIService from './APIService';

const AWSAPI = APIService.AWSAPI;
const LOCALAPI = APIService.LOCALAPI;

export default class SearchService {
  static async getSearchList(value) {
    const response = await axios.get(
      // `${LOCALAPI}/movie/search?searchWord=${value}`,
      `${AWSAPI}/movie/search?searchWord=${value}`,
    );
    console.log(response);
    return response.data.result;
  }
}
