import PropTypes from 'prop-types';

import { useField } from 'formik';
import Form from 'react-bootstrap/Form';

const Checkbox = ({ name, required, label, helpText, ...rest }) => {
  const [, meta, { setValue }] = useField({ name });

  const errorMessage = meta.touched && meta.error;
  const isInvalid = errorMessage;

  const handleChange = ({ target }) => {
    let newValue = Boolean(target.checked);

    setValue(newValue);
  };

  return (
    <Form.Group
      controlId={name}
      required={required}>
      <div className={isInvalid ? 'is-invalid' : ''}>
        <Form.Check
          name={name}
          label={label}
          checked={meta.value}
          className="mt-4 mb-3"
          type="checkbox"
          onChange={handleChange}
          {...rest}
        />
      </div>
      {isInvalid ? <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback> : null}
      {helpText && <Form.Text className="text-muted">{helpText}</Form.Text>}
    </Form.Group>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  required: PropTypes.bool,
  helpText: PropTypes.string,
};

Checkbox.defaultProps = {
  required: false,
  helpText: null,
};

export default Checkbox;
