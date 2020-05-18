import { 
  fetchSomeApiSuccess,
  fetchApiArticleSuccess,
} from '../actions'
import { handleActions } from 'redux-actions';

const initState = {
  data:{},
  test:{}
}

const apiReducer = handleActions({
  [fetchSomeApiSuccess] : (state, {payload}) => {
    // 測試
    return  {test: {}}
  },
  [fetchApiArticleSuccess] : (state, {payload}) => {
    return {data: payload}
  },
},
initState,
)

export default apiReducer