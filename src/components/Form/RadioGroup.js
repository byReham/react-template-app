import PropTypes from 'prop-types';

import { useField } from 'formik';
import Form from 'react-bootstrap/Form';

const RadioField = ({ name, required, ...rest }) => {
  const [, meta, { setValue }] = useField({ name });

  const errorMessage = meta.touched && meta.error;
  const isInvalid = errorMessage;

  const handleChange = ({ target }) => {
    let newValue = target.value;

    setValue(newValue);
  };

  return (
    <Form.Group
      controlId={name}
      required={required}
      {...rest}>
      <div className={isInvalid ? 'is-invalid' : ''}>
        <Form.Check
          name={name}
          id={`${name}_yes`}
          label="Yes"
          className="mb-3"
          type="radio"
          onChange={handleChange}
          checked={meta.value === true || meta.value === 'true'}
          value={true}
          custom
        />
        <Form.Check
          name={name}
          id={`${name}_no`}
          label="No"
          className="mb-3"
          type="radio"
          onChange={handleChange}
          checked={meta.value === false || meta.value === 'false'}
          value={false}
          custom
        />
      </div>
      {isInvalid ? <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback> : null}
    </Form.Group>
  );
};

RadioField.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

RadioField.defaultProps = {
  required: false,
};

export default RadioField;
