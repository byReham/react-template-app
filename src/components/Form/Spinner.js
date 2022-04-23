import PropTypes from 'prop-types';

import React from 'react';

import BootstrapSpinner from 'react-bootstrap/Spinner';

export default function CustomSpinner({ show }) {
  if (!show) return null;

  return (
    <div className="spinner">
      <BootstrapSpinner
        animation="border"
        role="status">
        <span className="sr-only">Loading...</span>
      </BootstrapSpinner>
    </div>
  );
}

CustomSpinner.propTypes = {
  show: PropTypes.bool,
};

CustomSpinner.defaultProps = {
  show: false,
};
