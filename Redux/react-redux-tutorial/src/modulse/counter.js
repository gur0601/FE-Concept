const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
//액션 타입을 정의한 것

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
// 액션 생성 함수를 만든 것

const initalState = {
  number: 0, //초기상태를 number값으로 설정해 주었다.
};

function counter(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
//export default는 단 한개만 내보낼 수 있다.
