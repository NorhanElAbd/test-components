import React from "react";
import "./style.css";

const Input = ({
  onChange,
  type = "text",
  errorMessage,
  hintMessage,
  disabled,
  placeholder,
  floatingLabel,
  value,
  ...props
}) => {
  return (
    <>
      <div
        className="inputWrapper"
        isFocused={isFocused}
        hasError={!!errorMessage}
        grayed={grayed}
        disabled={disabled}
        isFloatingLabel={!!floatingLabel}
        hasValue={!!value}
      >
        <>
          {inputPrefix && <span>{inputPrefix}</span>}
          <input
            onChange={onChange}
            onBlur={assignBlurToField}
            onFocus={assignFocusToField}
            disabled={disabled}
            type={type}
            placeholder={!floatingLabel ? placeholder : ""}
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
