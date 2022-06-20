import { connect } from 'react-redux'; 
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { actChangeStep, addValue } from "../actions/actStep";

function Step3(props) {

  //const dataStep = props.step.data;

  const SignupSchema = Yup.object().shape({
    password: Yup.string('Invalid password').required('Required'),
    confirmPassword:  Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
  });

  const kq= 
    <div className="container">
      <div className="row">
        <div className='col-md-12 col-xs-12 col-sm-12'>
              <h1>Password:</h1>
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
                    props.actChangeStep(3);
                    props.addValue(values)
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                    <p>
                        <Field name="password" type="password" className="form-control" />
                        {errors.password && touched.password ? <div className='errors'>{errors.password}</div> : null}
                    </p>
                    <p>
                        <Field name="confirmPassword" type="password" className="form-control" />
                        {errors.confirmPassword && touched.confirmPassword ? <div className='errors'>{errors.confirmPassword}</div> : null}
                    </p>
                    <button onClick={() => props.actChangeStep(1) } className='btn btn-warning'> Back</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step3);