 // reducers/noteReducers.js
 import { CHANGE_STEP, ADD_VALUE_STEP } from "../const/index";
 const initialState = {
    step: 0,
    data: {
        firstName: '',
        lastName: '',
        email:  ''
    }
  }
  
 const stepReducer = (state = initialState, action) => {
 switch (action.type) {
   case CHANGE_STEP:
    return {
        ...state,
        step: action.payload
      }
      case ADD_VALUE_STEP:
        return {
            ...state,
            data: action.payload
          }
   default:
     return state;
 }
};
export default stepReducer