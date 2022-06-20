import { connect } from 'react-redux'; 
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { actChangeStep, addValue } from "../actions/actStep";

function Step2(props) {


  //const dataStep = props.step.data;
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
    confirmEmail: Yup.string()
    .oneOf([Yup.ref('email'), null], 'Email does not match').required('Required'),
  });

  const kq= 
    <div className="container">
      <div className="row">
      <div className='col-md-12 col-xs-12 col-sm-12'>
              <h1>Email:</h1>
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
              props.actChangeStep(2);
              props.addValue(values)
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <p>
                  <Field name="email" type="email" className="form-control" />
                  {errors.email && touched.email ? <div className='errors'>{errors.email}</div> : null}
                </p>
                <p>
                  <Field name="confirmEmail" type="email" className="form-control" />
                  {errors.confirmEmail && touched.confirmEmail ? <div className='errors'>{errors.confirmEmail}</div> : null}
                </p>
                <button onClick={() => props.actChangeStep(0) } className='btn btn-warning'> Back</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step2);