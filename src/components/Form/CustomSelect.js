import PropTypes from 'prop-types';

import { useField } from 'formik';
import Form from 'react-bootstrap/Form';

import CustomLabel from './CustomLabel';

const renderOptions = options => {
  if (options[0] instanceof Object) {
    return options.map((option, index) => (
      <option
        key={`${option.value}_${index}`}
        value={option.value}>
        {option.title || option.value}
      </option>
    ));
  }

  return options.map((value, index) => (
    <option
      key={`${value}_${index}`}
      value={value}>
      {value}
    </option>
  ));
};

const CustomSelect = ({
  options,
  placeholder,
  label,
  labelHidden,
  helpText,
  name,
  required,
  formGroupProps,
  ...rest
}) => {
  const [{ onBlur }, meta, { setValue }] = useField({ name });
  const errorMessage = meta.touched && meta.error;
  const isInvalid = errorMessage;

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Form.Group
      {...formGroupProps}
      controlId={name}>
      <div className="d-flex flex-column position-relative">
        <Form.Control
          as="select"
          value={meta.value}
          className={`order-2 ${isInvalid ? 'is-invalid' : ''}`}
          required={required}
          onBlur={onBlur}
          onChange={handleChange}
          isInvalid={meta.touched && errorMessage}
          {...rest}
          custom>
          <option
            disabled
            value=""></option>
          {renderOptions(options)}
        </Form.Control>

        <div className="select-placeholder order-3">{placeholder}</div>

        <CustomLabel
          required={required}
          label={label}
          className="order-1"
          hidden={labelHidden}
        />

        {isInvalid ? (
          <Form.Control.Feedback
            type="invalid"
            className="order-4">
            {errorMessage}
          </Form.Control.Feedback>
        ) : null}
        {helpText && <Form.Text className="text-muted order-5">{helpText}</Form.Text>}
      </div>
    </Form.Group>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  helpText: PropTypes.string,
  required: PropTypes.bool,
  labelHidden: PropTypes.bool,
  formGroupProps: PropTypes.object,
};

CustomSelect.defaultProps = {
  placeholder: 'Select',
  label: '',
  helpText: null,
  required: false,
  labelHidden: false,
  formGroupProps: {},
};

export default CustomSelect;
