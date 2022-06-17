// reducers/loaitineducer.js
import { THEM_LOAITIN, XOA_LOAITIN, SUA_LOAITIN } from "../const/index";
 
const newData = [
  {data: null}
]

const loaitinReducer = (state = newData, action) => {
  switch (action.type) {
    case THEM_LOAITIN:
      const id_LT = new Date().getTime();
      state = [...state.data, { id: id_LT, ten: action.ten }];
      console.log("Thêm LT:" , state);
      return state;
    case SUA_LOAITIN:
      const indexLT = state.findIndex((row) =>  row.id === action.id);
      if (indexLT !== -1) state[indexLT].ten = action.ten;
      console.log("Chỉnh LT: ", state);
      return state;
    case XOA_LOAITIN:
      const idLT = action.id;
      state = state.filter(loaitin => {
        if (loaitin.id === idLT) return false
        return true
      })
      console.log("Xóa LT:", state);
      return state;
    default: return state;
  }
}; 
export default loaitinReducer