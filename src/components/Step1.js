import { connect } from 'react-redux'; 
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { actChangeStep, addValue } from "../actions/actStep";
import './HienNote';

function Step1(props) {

  //const dataStep = props.step.data;

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    //email: Yup.string().email('Invalid email').required('Required'),
  });

  const kq= 
    <div className="container">
          <div className="row">
            <div className='col-md-12 col-xs-12 col-sm-12'>
              <h1>Full name:</h1>
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
                  props.actChangeStep(1);
                  props.addValue(values)
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                      <p>
                      <Field name="firstName" className="form-control" />
                        {errors.firstName && touched.firstName ? (
                          <div className='errors'>{errors.firstName}</div>
                        ) : null}
                      </p>
                      <p>
                        <Field name="lastName" className="form-control" />
                        {errors.lastName && touched.lastName ? (
                          <div className='errors'>{errors.lastName}</div>
                        ) : null}
                      </p>
                      {/* <p>
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                      </p> */}
                    
                      <button type="submit" className='btn btn-success'>Next</button>
                  </Form>
                )}
        
              </Formik>
            </div>
            
          </div>     
      </div>
  return (kq);
}
const mapStateToProps = (state, ownProps) => {  
  //console.log("Toàn bộ state " , state);
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

export default connect(mapStateToProps, mapDispatchToProps)(Step1);