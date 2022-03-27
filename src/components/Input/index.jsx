import React from "react";
import "./style.css";

const Input = ({
  onChange,
  type = "text",
  hintMessage,
  errorMessage,
  disabled,
  placeholder,
  testId,
  value,
  inputPrefix,
  suffix,
  ...props
}) => {
  return (
    <>
      <div className="inputWrapper" disabled={disabled}>
        <>
          {inputPrefix && <span>{inputPrefix}</span>}
          <input
            onChange={onChange}
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            value={value}
            data-testid={testId}
            {...props}
          />
          {suffix && <div>{suffix && suffix}</div>}
        </>
      </div>
      {hintMessage && !errorMessage && <p variant="caption">{hintMessage}</p>}
      {errorMessage && (
        <p tag="p" variant="body2" m={0}>
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default Input;
