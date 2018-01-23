import React, {PropTypes} from 'react';

const TextAreaInput = ({name, label, onChange, placeholder, rows, value, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <textarea
          name={name}
          className="form-control"
          placeholder={placeholder}
          rows={rows || 5}
          value={value}
          onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextAreaInput;