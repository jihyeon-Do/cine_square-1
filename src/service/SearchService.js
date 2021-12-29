import axios from 'axios';

export default class SearchService {
  static async getSearchList(value) {
    const response = await axios.get(
      `http://cinesquare.yahmedora.com:8080/movie/search?searchWord=${value}`,
    );
    console.log(response);
    return response.data.result;
  }
}
