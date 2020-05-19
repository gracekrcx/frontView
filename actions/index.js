import {createAction} from 'redux-actions'
import WebAPI from '../utils/webAPI'

export const clickMember = createAction('CLICK-MEMBER')
export const fetchSomeApiSuccess = createAction('FETCH_SOME_API_SUCCESS');
export const fetchSomeApiFailure = createAction('FETCH_SOME_API_FAILURE');
export const fetchApiArticleSuccess = createAction('FETCH_API_ARTICLE_SUCCESS');
export const setArticleType = createAction('SET_ARTICLE_TYPE');
export const setLoading = createAction('SET_LOADING');


// Api : 測試串接 
export const getApi = () => dispatch => {
  const cb = val => { 
    dispatch(fetchSomeApiSuccess(val));
  }
  WebAPI.GET_DATA(1, cb)
};

// Api : 拿文章
export const getApiArticles = (page = 1, type) => dispatch => {

  const cb = data => { 
    dispatch(fetchApiArticleSuccess(data));
  }
  WebAPI.GET_ARTICLE(page, type, cb)
};

// Api : 拿文章 and loading
export const getApiArticlesLoading = (page = 1, type) => dispatch => {
  dispatch(setLoading(true));
  const cb = data => { 
    dispatch(setLoading(false));
    dispatch(fetchApiArticleSuccess(data));
  }
  WebAPI.GET_ARTICLE(page, type, cb)
};