import PropTypes from 'prop-types';

import classnames from 'classnames';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
// import applyPhoneMask from 'src/utils/apply-phone-mask';

import CustomLabel from './CustomLabel';

const FormikTextField = ({
  label,
  labelHidden,
  name,
  helpText,
  tooltip,
  formGroupProps,
  format,
  required,
  inputRef,
  touched,
  error,
  onChange,
  value,
  ...rest
}) => {
  const errorMessage = touched && error;
  const isInvalid = errorMessage;

  const handleChange = ({ target }) => {
    let newValue = target.value;

    if (target.dataset.type === 'phone_number') {
      // newValue = applyPhoneMask(target.value);
    }

    if (format) {
      newValue = target.value.match(format)?.join('') || ''; // join func by default has ',' as argument
    }

    onChange(newValue);
  };

  return (
    <Form.Group
      {...formGroupProps}
      controlId={name}>
      {typeof label === 'string' ? (
        <CustomLabel
          required={required}
          label={label}
          hidden={labelHidden}
        />
      ) : (
        label
      )}
      <InputGroup className={{ 'is-invalid': isInvalid }}>
        <Form.Control
          value={value}
          {...rest}
          ref={inputRef}
          onChange={handleChange}
          isInvalid={isInvalid}
          required={required}
        />
        {tooltip ? (
          <InputGroup.Append>
            <button
              type="button"
              className={classnames(['btn btn-input-help py-0 px-1', { 'is-invalid': isInvalid }])}>
              <OverlayTrigger
                trigger="click"
                placement="top"
                overlay={
                  <Popover id="popover-positioned-top">
                    <Popover.Content>{tooltip}</Popover.Content>
                  </Popover>
                }>
                <svg
                  width="24px"
                  height="24px">
                  {/*<use xlinkHref={`${sprite}#info`} />*/}
                </svg>
              </OverlayTrigger>
            </button>
          </InputGroup.Append>
        ) : null}
      </InputGroup>
      {isInvalid ? <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback> : null}
      {helpText && <Form.Text className="text-muted">{helpText}</Form.Text>}
    </Form.Group>
  );
};

FormikTextField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.oneOf([null])]),
  labelHidden: PropTypes.bool,
  name: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  helpText: PropTypes.string,
  required: PropTypes.bool,
  formGroupProps: PropTypes.object,
  format: PropTypes.instanceOf(RegExp),
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.elementType })]),
  onChange: PropTypes.func.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  value: PropTypes.string,
};

FormikTextField.defaultProps = {
  labelHidden: false,
  label: null,
  tooltip: null,
  helpText: null,
  required: false,
  formGroupProps: {},
  format: null,
  inputRef: null,
  touched: false,
  error: null,
  value: '',
};

export default FormikTextField;
