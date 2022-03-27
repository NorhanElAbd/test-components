import React from "react";
import "./style.css";

const Button = ({
  onClick,
  text,
  prefix,
  suffix,
  disabled,
  testId,
  hintMessage,
  ...props
}) => {
  return (
    <>
      <button
        className="btn"
        type="button"
        onClick={onClick}
        disabled={disabled}
        data-testid={testId}
        {...props}
      >
        <>
          {prefix && <span>{prefix}</span>}
          <span>{text}</span>
          {suffix && <span>{suffix}</span>}
        </>
        )
      </button>
      <p data-testid={`${testId}-hint`}>{hintMessage}</p>
    </>
  );
};

export default Button;
