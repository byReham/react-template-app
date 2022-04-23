import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { withFormik } from 'formik';
import Col from 'react-bootstrap/Col';
import BootstrapForm from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import TextField from '../../../components/Form/TextField';
import useNavigateBack from '../../../hooks/useNavigateBack';
import { loginUser } from '../../../store/auth';

// import CheckBox from '../../../components/Form/CheckBox';
// import TermsAndConditionsLabel from '../../../components/Form/TermsAndConditionsLabel';

const Form = ({ ...formikBag }) => {
  const { values } = formikBag;
  const dispatch = useDispatch();
  const navigateBack = useNavigateBack();

  const isLoading = false;
  const handleSubmit = () => {
    dispatch(loginUser({ params: { user: values }, navigateBack }));
  };

  return (
    <BootstrapForm>
      <Row className="mb-3">
        <TextField
          formGroupProps={{ as: Col, md: 12 }}
          name="email"
          label="Email"
          autoFocus
          required
        />
      </Row>

      <Row className="mb-3">
        <TextField
          formGroupProps={{ as: Col, md: 12 }}
          name="password"
          label="Password"
          type="password"
          autoFocus
          required
        />
      </Row>

      {/*<Row>
        <Col md={12}>
          <CheckBox
            name="terms"
            label={<TermsAndConditionsLabel />}
          />
        </Col>
      </Row>*/}

      <div className="form-actions mt-4">
        <div className="mb-3 mr-3">
          <button
            className="btn form-btn-fill form-button"
            type="button"
            disabled={isLoading}
            onClick={handleSubmit}>
            Log In
          </button>
        </div>
      </div>
    </BootstrapForm>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '', terms: false }),
})(Form);
