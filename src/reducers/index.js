//   src/reducers/index.js
import {combineReducers} from 'redux' 
import noteReducer from './noteReducer';
import stepReducer from './stepReducer';
import loaitinReducer from './loaitinReducer';
export default combineReducers({
    note: noteReducer, 
    step: stepReducer,      
    loaitin: loaitinReducer,    
})