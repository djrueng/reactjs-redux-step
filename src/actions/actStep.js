// actions/actNote.js
import { CHANGE_STEP, ADD_VALUE_STEP } from "../const/index";
//action thêm note
export const actChangeStep = (payload) => {
  return { type: CHANGE_STEP, payload};
};

export const addValue = (payload) => {
    return { type: ADD_VALUE_STEP, payload};
  };
