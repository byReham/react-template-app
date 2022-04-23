import PropTypes from 'prop-types';

import { useRef, useState } from 'react';

import classnames from 'classnames';
import { useField, useFormikContext } from 'formik';
import Form from 'react-bootstrap/Form';

import api from '../../utils/api';

import Gallery from './../Gallery';

const MultipleFilesField = ({
  label,
  name,
  helpText,
  formGroupProps,
  required,
  type,
  relationName,
  withGallery,
  ...rest
}) => {
  const inputEl = useRef(null);
  const [failed, setFailed] = useState([]);
  const [, meta, { setValue }] = useField({ name });
  const { values, setFieldValue } = useFormikContext();
  const files = [meta.value].flat().filter(i => i);
  const fileList = files.filter(({ id, _destroy: destroyed }) => id && !destroyed);

  const errorMessage = meta.error;

  const processSelectedFiles = ({ target }) => {
    setFailed([]);
    let newValue = files;
    let failedFiles = [];
    const promises = [...target.files].map(blob => {
      GlobalStore.update(s => {
        s.isLoading = true;
      });

      return api
        .uploadAttachment({ file: blob, name: relationName || name, type })
        .then(({ data }) => newValue.push(data.attributes))
        .catch(({ response }) => {
          const { data } = response;
          const message = data?.errors?.file || [response.statusText];

          failedFiles.push({ message, filename: blob.name });
        });
    });

    Promise.all(promises).then(() => {
      inputEl.current.value = null;
      setValue(newValue);
      setFailed(failedFiles);
      GlobalStore.update(s => {
        s.isLoading = false;
      });
    });
  };

  const removeSelectedFiles = identificator => {
    inputEl.current.value = null;
    // eslint-disable-next-line
    const newFileList = files.map(({ id, ...rest }) =>
      id === identificator ? { id, _destroy: true } : { id, ...rest },
    );

    setValue(newFileList);
    setFieldValue('purge_attachments', [...(values.purge_attachments || []), identificator]);
  };

  const renderFiles = () => {
    if (withGallery) {
      return <Gallery name={name} />;
    }

    return (
      <div>
        {fileList.map(({ id, filename }) => (
          <div
            className="file-field__wrapper-node"
            key={`${id}-${filename}`}>
            <span
              onClick={() => removeSelectedFiles(id)}
              className="file-field__icon">
              <svg
                width="24px"
                height="24px">
                {/*<use xlinkHref={`${sprite}#delete`} />*/}
              </svg>
            </span>
            <span className="file-field__name">{filename}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Form.Group
      {...formGroupProps}
      className="mb-3 file-field"
      controlId={name}>
      {typeof label === 'string' ? (
        <label
          htmlFor={name}
          className={classnames(
            'form-label',
            'file-field__label',
            label ? '' : 'file-field__label--hidden d-none d-sm-block',
          )}>
          {label ? label : 'Attach file'}&nbsp;{required ? <abbr>*</abbr> : ''}
        </label>
      ) : (
        label
      )}

      <div
        className={classnames('d-flex d-sm-inline-flex file-field__wrapper file-field__wrapper--multi', {
          'is-invalid': errorMessage,
        })}>
        <input
          ref={inputEl}
          type="file"
          required={required}
          id={name}
          className="file-field__input is-invalid"
          onChange={processSelectedFiles}
          multiple
          {...rest}
        />

        <span className="btn btn-outline-secondary">Attach file</span>
      </div>

      <div className="d-flex file-field__wrapper file-field__wrapper--multi">
        {failed.length
          ? failed.map((item, index) => (
              <div
                key={index}
                className="invalid-feedback file-field__invalid-feedback">
                {item.filename} - {item.message.filter(i => i).join('. ')}
              </div>
            ))
          : null}
        {files.length ? renderFiles() : null}
      </div>

      {errorMessage ? <div className="invalid-feedback">{errorMessage}</div> : null}

      {helpText && <Form.Text className="text-muted">{helpText}</Form.Text>}
    </Form.Group>
  );
};

MultipleFilesField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  formGroupProps: PropTypes.object,
  type: PropTypes.string,
  helpText: PropTypes.string,
  relationName: PropTypes.string,
  withGallery: PropTypes.bool,
};

MultipleFilesField.defaultProps = {
  label: '',
  required: false,
  formGroupProps: {},
  type: 'Attachments::Document',
  relationName: null,
  helpText: null,
  withGallery: false,
};

export default MultipleFilesField;
