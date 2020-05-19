import { 
  fetchSomeApiSuccess,
  fetchApiArticleSuccess,
  setArticleType,
  setLoading,
} from '../actions'
import { handleActions } from 'redux-actions';

const initState = {
  test:{},
  data:{},
  articleTyle: '',
  loading: false
}

const apiReducer = handleActions({
  [fetchSomeApiSuccess] : (state, {payload}) => {
    // 測試
    return  {test: {}}
  },
  [fetchApiArticleSuccess] : (state, {payload}) => {
    return {...state, data: payload}
  },
  [setArticleType] : (state, {payload}) => {
    return {...state, articleTyle: payload.articleTyle}
  },
  [setLoading] : (state, {payload}) => {
    return {...state, loading: payload}
  },
},
initState,
)

export default apiReducer