//스토어를 만들 때는 리듀서를 하나만 사용해야 되는데 combineReducers함수를 쓰면 하나로 뭉쳐준다.

import {combineReducers} from 'redux'
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;