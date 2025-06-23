import React from 'react';
import './Select.css';

const ChevronIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8L10 12L14 8" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Select = ({
  value = '',
  onChange,
  placeholder = '',
  error = '',
  disabled = false,
  className = '',
  name,
  children,
  ...rest
}) => {
  return (
    <div className={`ui-select-wrapper${error ? ' ui-select-wrapper-error' : ''} ${className}`.trim()}>
      <div className="ui-select-container">
        <select
          className={`ui-select${error ? ' ui-select-error' : ''}${disabled ? ' ui-select-disabled' : ''}`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          name={name}
          {...rest}
        >
          {placeholder && <option value="" disabled hidden>{placeholder}</option>}
          {children}
        </select>
        <span className="ui-select-chevron"><ChevronIcon /></span>
      </div>
      {error && <span className="ui-select-error-message">{error}</span>}
    </div>
  );
};

export default Select; 