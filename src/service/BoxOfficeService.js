import axios from 'axios';

const BOXOFFICE_URL = 'http://cinesquare.yahmedora.com:8080/movie/boxoffice';

export default class BoxOfficeService {
  static async getBoxOfficeList() {
    const response = await axios.get(`${BOXOFFICE_URL}`);
    return response.data.result;
  }
}
