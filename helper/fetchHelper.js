
const fetchHelper = (API, callback)=>{
  API.then(res => {
    // console.log(res);
    return res.data;
  })
    .then(data => {
      return data.result !== undefined ? callback(data.result, data.code, data.message) : callback(data);
    })
    .catch(error => {
      console.log('error',error);
    })
}

export default fetchHelper