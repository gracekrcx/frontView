import {createAction} from 'redux-actions'
import WebAPI from '../utils/webAPI'

export const clickMember = createAction('CLICK-MEMBER')
export const fetchSomeApiSuccess = createAction('FETCH_SOME_API_SUCCESS');
export const fetchSomeApiFailure = createAction('FETCH_SOME_API_FAILURE');
export const fetchApiArticleSuccess = createAction('FETCH_API_ARTICLE_SUCCESS');

export const getApi = () => dispatch => {
  // 測試
  const cb = val => { 
    // console.log('end', val) 
    dispatch(fetchSomeApiSuccess(val));
  }
  WebAPI.GET_DATA(1, cb)
};

export const getApiArticles = (page = 1) => dispatch => {
  const cb = data => { 
    // console.log('end', data) 
    dispatch(fetchApiArticleSuccess(data));
  }
  WebAPI.GET_ARTICLE(page, cb)
};