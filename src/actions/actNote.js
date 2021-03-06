// actions/actNote.js
import { ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE } from "../const/index";
//action thêm note
export const actAddNote = (content) => {
  return { type: ADD_NEW_NOTE, content,};
};
//action xóa note
export const actRemoveNote = (id) => {
  return {type: REMOVE_NOTE, id,};
};
//action sửa note
export const actEditNote = (id, content) => {
  return { type: EDIT_NOTE, id, content,};
};