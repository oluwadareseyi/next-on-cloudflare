"use client";

import { Dispatch, SetStateAction, useState } from "react";

type TextareaProps = {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChange2?: any;
  onBlur?: () => void;
  value?: string;
  isRequired?: boolean;
  errorMessage?: string;
  inValidCondition?: boolean;
  placeholder?: string;
  tip?: string;
  style?: React.CSSProperties;
  name?: string;
  condition?: boolean;
  readOnly?: boolean;
  state?: string;
  setState?: Dispatch<SetStateAction<string>>;
  onKeyup?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onFocus?: () => void;
};

const TextArea = ({
  label,
  onChange,
  onBlur,
  value,
  isRequired,
  errorMessage,
  inValidCondition,
  placeholder,
  tip,
  style,
  name,
  condition,
  readOnly,
  onKeyup,
  onFocus,
}: TextareaProps) => {
  // States
  const [invalid, setInvalid] = useState(false);
  return (
    <div className={`mb-4`} style={style}>
      {label && (
        <>
          <label
            htmlFor=""
            className="font-geist text-black text-lg font-medium text-left"
          >
            {label}
          </label>
          {"  "}
          {isRequired && <span>*</span>}
        </>
      )}
      <span className="relative block h-full">
        <textarea
          name={name}
          placeholder={placeholder}
          id={label}
          onChange={onChange}
          readOnly={readOnly}
          onBlur={(e) => {
            if (isRequired && e.target.value === "") {
              setInvalid(true);
            } else {
              setInvalid(false);
            }

            if (condition !== undefined && condition === false) {
              setInvalid(true);
            }
            if (onBlur) onBlur();
          }}
          onFocus={(e) => {
            if (onFocus) {
              onFocus();
            }
          }}
          value={value}
          className={`block w-full font-geist font-medium text-[20px] transition-all duration-200 ease-in-out text-black-100 resize-none min-h-[200px] max-h-full bg-transparent outline-none border-none placeholder:text-gray-300 placeholder:font-geist placeholder:text-sm text-left `}
          onKeyUp={onKeyup}
        />
      </span>
      {(invalid || inValidCondition) && (
        <span className="text-red-100 font-geist text-[12px]">
          {errorMessage || "*invalid"}{" "}
        </span>
      )}
      {tip && (
        <span className="text-gray-300-100 font-geist text-[12px]">{tip}</span>
      )}
    </div>
  );
};

export default TextArea;
