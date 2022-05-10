import PropTypes from 'prop-types';

// import { useMemo } from 'react';

import { useField } from 'formik';

import TextField from './TextField';

const FormikTextField = ({ name, ...rest }) => {
  const [field, meta, { setValue }] = useField({ name });
  const { touched, error } = meta;
  const isInvalid = touched && error;

  return (
    <TextField
      {...field}
      isInvalid={isInvalid}
      touched={touched}
      error={error}
      name={name}
      onChange={setValue}
      {...rest}
    />
  );
};

FormikTextField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormikTextField;
