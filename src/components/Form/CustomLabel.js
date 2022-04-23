import PropTypes from 'prop-types';

import classnames from 'classnames';
import Form from 'react-bootstrap/Form';

const CustomLabel = ({ label, required, className, hidden, group, ...rest }) => (
  <Form.Label
    required={required}
    title={label}
    className={classnames([className, { invisible: hidden }, { 'form-label--group': group }])}
    {...rest}>
    <span className="form-label__text">{label}</span>
    {required ? <abbr>&nbsp;*</abbr> : ''}
  </Form.Label>
);

CustomLabel.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  hidden: PropTypes.bool,
  group: PropTypes.bool,
  className: PropTypes.string,
};

CustomLabel.defaultProps = {
  required: false,
  hidden: false,
  group: false,
  className: '',
};

export default CustomLabel;
