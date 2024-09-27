import {createAction, handleActions} from 'redux-actions';

//파일 구조 : 덕스 패턴 (action 부터 store 까지 한 페이지에 있음)
//type 생성
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

//action 생성 (type 을 사용)
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//state 초기값 생성
const initialState = {
  number : 0
}

//reducer 리듀서 제작 (hook 함수 사용 X)
// const reducer = (state, action) => {
//   switch(action) {
//     case INCREASE :
//       action.setNumber(state.number + 1)
//     case DECREASE : 
//     action.setNumber(state.number - 1);
//   }
// }

//reducer 리듀서 제작 (hook 함수 사용 O)(이거 이용하기)
const count = handleActions({
  //안에서 분기처리
  [INCREASE] : (state, action) => ({number : parseInt(state.number) + parseInt(action.payload)}),
  [DECREASE] : (state, action) => ({number : parseInt(state.number) - parseInt(action.payload)}),
}, initialState)

export default count;
