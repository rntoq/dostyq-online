import React from 'react';
import './Input.css';

const Input = ({
  value = '',
  onChange,
  placeholder = '',
  error = '',
  disabled = false,
  className = '',
  type = 'text',
  name,
  ...rest
}) => {
  return (
    <div className={`ui-input-wrapper ${className}`.trim()}>
      <input
        className={`ui-input${error ? ' ui-input-error' : ''}${disabled ? ' ui-input-disabled' : ''}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {error && <span className="ui-input-error-message">{error}</span>}
    </div>
  );
};

export default Input; 