import { 
  fetchSomeApiSuccess,
  fetchApiArticleSuccess,
} from '../actions'
import { handleActions } from 'redux-actions';

const initState = {
  data:{}
}

const apiReducer = handleActions({
  [fetchSomeApiSuccess] : (state, {payload}) => {
    return  {data: []}
  },
  [fetchApiArticleSuccess] : (state, {payload}) => {
    return {data: payload}
  },
},
initState,
)

export default apiReducer