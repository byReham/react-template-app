import PropTypes from 'prop-types';

import { forwardRef } from 'react';

import { useField } from 'formik';
import DatePicker from 'react-datepicker';

import { DATE_FORMAT } from '../../constants';

import TextField from './TextField';

const DatePickerInput = forwardRef((props, ref) => {
  return (
    <TextField
      {...props}
      inputRef={ref}
      type="text"
    />
  );
});

DatePickerInput.displayName = 'DatePickerInput';

const CustomDatePicker = ({ placeholder, ...rest }) => {
  const [, meta, { setValue }] = useField(rest);
  const handleSelect = date => {
    /* eslint-disable-next-line no-magic-numbers */
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    const newValue = new Date(date.getTime() - userTimezoneOffset);

    setValue(newValue);
  };

  return (
    <DatePicker
      onSelect={handleSelect}
      value={Date.parse(meta.value)}
      selected={Date.parse(meta.value)}
      placeholderText={placeholder}
      wrapperClassName="d-block"
      showYearDropdown
      dropdownMode="select"
      dateFormat={DATE_FORMAT}
      customInput={<DatePickerInput label={rest.label} />}
      {...rest}
    />
  );
};

CustomDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  required: PropTypes.bool,
};

CustomDatePicker.defaultProps = {
  required: false,
};

export default CustomDatePicker;
