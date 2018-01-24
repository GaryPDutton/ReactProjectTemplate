import React, {PropTypes} from 'react';

const RadioInput = ({name, label, onChange, value, error, options}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">

        {options.map((option, index) => {
          return (<div className="radio" key={index}>
            <label>
              <input type="radio"
                     name={name + '_option_' + index}
                     checked={value === option}
                     value={option}
                     onChange={onChange}/>
              {option}
            </label>
          </div>);
        })
        }
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string)
};

export default RadioInput;