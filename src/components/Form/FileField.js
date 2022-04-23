import PropTypes from 'prop-types';

import { useRef } from 'react';

import classnames from 'classnames';
import { useField, useFormikContext } from 'formik';
import Form from 'react-bootstrap/Form';

import api from '../../utils/api';

import MultipleFilesField from './MultipleFilesField';

const FileField = ({ multiple, ...props }) => {
  if (multiple) return <MultipleFilesField {...props} />;

  const { label, name, helpText, formGroupProps, required, type, relationName, ...rest } = props;
  const inputEl = useRef(null);
  const [, meta, { setValue }] = useField({ name });
  const { values, setFieldValue } = useFormikContext();
  const file = meta.value || {};
  const filename = file.filename || file.name;

  const errorMessage = meta.error;

  const processSelectedFiles = ({ target }) => {
    const blob = target.files[0];

    if (blob) {
      GlobalStore.update(s => {
        s.isLoading = true;
      });
      api
        .uploadAttachment({ file: blob, name: relationName || name, type })
        .then(({ data }) => {
          setFieldValue('purge_attachments', [...(values.purge_attachments || []), meta.value?.id]);
          setValue({ ...data.attributes });
        })
        .catch(() => {
          // const { data } = response;

          // GlobalStore.update(s => {
          //   s.apiErrors = { ...s.apiErrors, ...{ [name]: data?.errors?.file || [response.statusText] } };
          // });
          inputEl.current.value = null;
        })
        .finally(() => {
          GlobalStore.update(s => {
            s.isLoading = false;
          });
        });
    }
  };

  const removeSelectedFiles = () => {
    const { id } = meta.value;

    inputEl.current.value = null;

    if (id) {
      setValue({ id, _destroy: true });
      setFieldValue('purge_attachments', [...(values.purge_attachments || []), id]);
    } else setValue('');
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
        className={classnames(
          'd-flex d-sm-inline-flex file-field__wrapper',
          filename && !file._destroy ? 'file-field__wrapper--has-file' : '',
          { 'is-invalid': errorMessage },
        )}>
        <input
          ref={inputEl}
          type="file"
          required={required}
          id={name}
          className="file-field__input is-invalid"
          onChange={processSelectedFiles}
          title={filename}
          {...rest}
        />

        {filename && !file._destroy ? (
          <>
            <span
              onClick={removeSelectedFiles}
              className="file-field__icon">
              <svg
                width="24px"
                height="24px">
                {/*<use xlinkHref={`${sprite}#delete`} />*/}
              </svg>
            </span>
            <span className="file-field__name">{filename}</span>
          </>
        ) : (
          <span className="btn btn-outline-secondary">Attach file</span>
        )}
      </div>

      {errorMessage ? <div className="invalid-feedback">{errorMessage}</div> : null}
      {helpText && <Form.Text className="text-muted">{helpText}</Form.Text>}
    </Form.Group>
  );
};

FileField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  formGroupProps: PropTypes.object,
  type: PropTypes.string,
  helpText: PropTypes.string,
  relationName: PropTypes.string,
  multiple: PropTypes.any,
};

FileField.defaultProps = {
  label: '',
  required: false,
  formGroupProps: {},
  type: 'Attachments::Document',
  relationName: null,
  helpText: null,
  multiple: false,
};

export default FileField;
