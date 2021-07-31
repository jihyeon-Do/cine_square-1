// 모든 액션을 전부 여기다 쓴다.

// 액션 타입을 정의하여 변수로 빼는 단계
const START_LOADING = 'START_LOADING';
const END_LOADING = 'END_LOADING';

// function startLoading() {
//   return {
//     type: START_LOADING,
//   };
// }

// function endLoading() {
//   return {
//     type: END_LOADING,
//   };
// }

const initialState = {
  loading: false,
};

export default function reducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case START_LOADING:
      return {
        loading: true,
      };
    case END_LOADING:
      return {
        loading: false,
      };
    default:
      return state;
  }
}
