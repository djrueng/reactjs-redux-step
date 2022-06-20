import { connect } from 'react-redux'; 
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Final from './components/Final';

function App(props) {
  
  console.log(props.step);
  const currentStep = props.step.step;
  const kq= 
    <div className="container App">

      <div className="row">
        <div className="col-md-6 offset-md-3">
          {currentStep === 0 && <Step1 />}
          {currentStep === 1 && <Step2 />}
          {currentStep === 2 && <Step3 />}
          {currentStep === 3 && <Step4 />}
          {currentStep === 4 && <Final />}
        </div>
      </div>     
    </div>
  return (kq);
}
const mapStateToProps = (state, ownProps) => {  
  return {  
    step: state.step,
  }; 
};
export default connect(mapStateToProps, null)(App);