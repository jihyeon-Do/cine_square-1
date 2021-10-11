import axios from 'axios';

export default class BoxOfficeService {
  static async getBoxOfficeList() {
    // const response = await axios.get();
    const response = {
      result: [
        {
          movieCd: '111',
          audience: '874명',
          mainImg: '../images/venom.jpg',
          ranking: 1,
          movieNm: '베놈',
          reportDt: '2021-10-05',
        },
        {
          movieCd: '112',
          audience: '80만명',
          mainImg: '../images/notime.jpg',
          ranking: 2,
          movieNm: '노 타임 투 다이',
          reportDt: '2021-09-29',
        },
        {
          movieCd: '113',
          audience: '874명',
          mainImg: '../images/venom.jpg',
          ranking: 3,
          movieNm: '베놈',
          reportDt: '2021-10-05',
        },
        {
          movieCd: '114',
          audience: '80만명',
          mainImg: '../images/notime.jpg',
          ranking: 4,
          movieNm: '노 타임 투 다이',
          reportDt: '2021-09-29',
        },
        {
          movieCd: '115',
          audience: '874명',
          mainImg: '../images/venom.jpg',
          ranking: 5,
          movieNm: '베놈',
          reportDt: '2021-10-05',
        },
        {
          movieCd: '116',
          audience: '80만명',
          mainImg: '../images/notime.jpg',
          ranking: 6,
          movieNm: '노 타임 투 다이',
          reportDt: '2021-09-29',
        },
        {
          movieCd: '117',
          audience: '874명',
          mainImg: '../images/venom.jpg',
          ranking: 7,
          movieNm: '베놈',
          reportDt: '2021-10-05',
        },
        {
          movieCd: '118',
          audience: '80만명',
          mainImg: '../images/notime.jpg',
          ranking: 8,
          movieNm: '노 타임 투 다이',
          reportDt: '2021-09-29',
        },
        {
          movieCd: '119',
          audience: '874명',
          mainImg: '../images/venom.jpg',
          ranking: 9,
          movieNm: '베놈',
          reportDt: '2021-10-05',
        },
        {
          movieCd: '120',
          audience: '80만명',
          mainImg: '../images/notime.jpg',
          ranking: 10,
          movieNm: '노 타임 투 다이',
          reportDt: '2021-09-29',
        },
      ],
    };
    return response;
  }
}
