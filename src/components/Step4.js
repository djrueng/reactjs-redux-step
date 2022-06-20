import { connect } from 'react-redux'; 
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { actChangeStep, addValue } from "../actions/actStep";

function Step4(props) {

  //const dataStep = props.step.data;

  const SignupSchema = Yup.object().shape({
    checkbox: Yup.string('Invalid checkbox').required('Required'),
    
  });

  const kq= 
    <div className="container">
      <div className="row">
        <div className='col-md-12 col-xs-12 col-sm-12'>
        <h1>Complete</h1>
        </div>
            
        <div className='col-md-12 col-xs-12 col-sm-12'>
            <Formik 
                initialValues={{
                    firstName: props.step.data?.firstName,
                    lastName: props.step.data?.lastName,
                    email:  props.step.data?.email,
                    confirmEmail:  props.step.data?.email,
                    password:  props.step.data?.password,
                    confirmPassword:  props.step.data?.confirmPassword,
                    checkbox: props.step.data?.checkbox,
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                        // same shape as initial values
                    props.actChangeStep(4);
                    props.addValue(values)
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                    
                    <p>By clicking "Accept" I agree that:</p>
                    <ul>
                      <li>I have read and accepted the <a href='/'>User Agreement</a></li>
                      <li>I have read and accepted the <a href='/'>Privacy Policy</a></li>
                    </ul>
                    <p>
                        <Field name="checkbox" type="checkbox" />
                        {errors.checkbox && touched.checkbox ? <div className='errors'>{errors.checkbox}</div> : null}
                    </p>
                    <button onClick={() => props.actChangeStep(2) } className='btn btn-warning'> Back</button>
                    <button type="submit" className='btn btn-success'>Finish</button>
                    </Form>
                )}
            </Formik>
        </div>
      </div>
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
        addValue: values => dispatch(addValue(values))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step4);