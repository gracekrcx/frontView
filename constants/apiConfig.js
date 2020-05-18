import axios from 'axios';

const sendRequest = (param = {}) => {
  const baseURL = param.baseURL === undefined ? '/new_ezding' : param.baseURL;
  const headers = param.headers === undefined ? '' : param.headers;

  return axios.create({
    baseURL,
    headers,
    // timeout: 1000,
  });
    
}


const APIConfig = {
  GET_DATA: (id)=> {
    return sendRequest().get(`/todos/${id}`)
  },
  GET_ARTICLE: (page) => {
    return sendRequest().get(`/contents?content_category=movie_express&valid=1&page=${page}&page_size=6`)
  }
}

export default APIConfig  