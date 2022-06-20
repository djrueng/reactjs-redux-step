import { connect } from 'react-redux'; 

import { actChangeStep } from "../actions/actStep";

function Final(props) {

  const dataStep = props.step.data;

  const kq= 
    <div className="container">
      <h1>Danh sách</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dataStep?.firstName}</td>
            <td>{dataStep?.lastName}</td>
            <td>{dataStep?.email}</td>
          </tr>
        </tbody>
      </table>
      {/* <p> {dataStep?.firstName}</p>
      <p> {dataStep?.lastName}</p>
      <p> {dataStep?.email}</p> */}
      {/* <p> {dataStep?.password}</p> */}
      <button onClick={() => props.actChangeStep(3) } className='btn btn-warning'> Back</button>
     
    </div>
  return (kq);
}
const mapStateToProps = (state, ownProps) => {  
  console.log("Toàn bộ state " , state);
  return {  
    step: state.step,
  }; 
};
const mapDispatchToProps = dispatch => {
    return {
        actChangeStep: step => dispatch(actChangeStep(step)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Final);