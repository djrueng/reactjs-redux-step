// conponents/AddNote.js
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { actAddNote } from "../actions/actNote"; //Import các actions 
function TaoNote(props) {
  const [content, setContent] = useState(); 
  const noteInput = useRef('abcd')
  const hamThemNote = () => {
    props.addNote(content); //Props này tạo bởi hàm mapDispatch
    noteInput.current.value = '';    
    setContent('');
  };
  
  return (
    <div className="col-md-12">
      <div className="input-group mb-8">
        {props.note}
        <input type="text"  className="form-control"
          placeholder="Nội dung ghi chú"  value =  {content}
          onChange={(e) => { setContent(e.target.value) }}  
          ref={noteInput} 
        />
        <div className="input-group-append">
          <button type="button" className="btn btn-primary" 
            onClick={hamThemNote}>
            Thêm ghi chú
          </button>
        </div>
      </div>
    </div>
  );
} 
const mapDispatch = (dispatch) => {
  return {
    addNote: (content) => {
      dispatch(actAddNote(content));
    },
  };
};

export default connect(null, mapDispatch)(TaoNote);