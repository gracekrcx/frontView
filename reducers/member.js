import { clickMember } from '../actions'
import { handleActions } from 'redux-actions';

// 測試 test.js
const initState = {
  qty:0
}

const memberReducer = handleActions({
  [clickMember] : (state, {payload}) => {
    // console.log('--> state',state);
    // console.log('--> payload',payload);
    return  {qty: state.qty + payload.val}
  }, 
},
initState,
)

export default memberReducer