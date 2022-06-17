// actions/actLoaiTin.js
import { THEM_LOAITIN, XOA_LOAITIN, SUA_LOAITIN } from "../const/index";

//action thêm loại tin
export const actThemLoaiTin = (ten) => {
  return { type: THEM_LOAITIN, ten};
};
//action xóa loại tin
export const actXoaLoaiTin = (id) => {
  return {type: XOA_LOAITIN, id,};
};
//action sửa loại tin
export const actSuaLoaiTin = (id, ten) => {
  return { type: SUA_LOAITIN, id, ten,};
};