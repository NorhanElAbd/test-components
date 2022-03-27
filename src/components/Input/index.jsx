import React from "react";
import "./style.css";

const Input = ({
  onChange,
  type = "text",
  errorMessage,
  hintMessage,
  errorMessage,
  disabled,
  placeholder,
  value,
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
            {...props}
          />
          {suffix && <div>{suffix && suffix}</div>}
        </>
      </div>
      {hintMessage && !errorMessage && (
        <Text variant="caption" color={theme.color.border}>
          {hintMessage}
        </Text>
      )}
      {errorMessage && (
        <Text tag="p" variant="body2" color={theme.color.danger} m={0}>
          {errorMessage}
        </Text>
      )}
    </>
  );
};

export default Input;
