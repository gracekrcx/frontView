import { combineReducers } from 'redux'
import memberReducer from './member'
import apiReducer from './api'

const rootReducer = combineReducers({
  member: memberReducer,
  api: apiReducer
});
  
export default rootReducer;