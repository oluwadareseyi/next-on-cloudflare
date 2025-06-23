import Magic from "@/assets/svgIcons/Magic";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import inputCommand from "../../assets/inputCommand.svg";

type InputProps = {
  type?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  setState?: React.Dispatch<React.SetStateAction<string>>;
  onKeyup?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  min?: number | string | any;
  max?: number | string;
  loading?: boolean;
  className?: string;
};

function Input({
  className,
  type,
  variant,
  ...props
}: React.ComponentProps<"input"> & { variant?: "plain" | "default" }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        variant === "plain"
          ? "bg-transparent w-full text-sm border-none outline-none shadow-none pl-0 focus-visible:ring-0 focus-visible:border-none"
          : "file:text-foreground border-gray-300 border placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 min-w-0 rounded-md  bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full text-[var(--color-input-placeholder)] text-sm  outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

const SidenavInput = ({
  type,
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
  min,
  max,
  loading,
  className,
}: InputProps) => {
  // States
  const [invalid, setInvalid] = useState(false);

  return (
    <div style={style}>
      {label && (
        <>
          <label htmlFor="">{label}</label>
          {"  "}
          {isRequired && <span>*</span>}
        </>
      )}
      <span className="font-geist text-black-100 text-[18px] font-normal relative">
        <Magic className="absolute top-0 bottom-0 my-auto left-4" />

        <input
          type={type || "text"}
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
          onFocus={() => {
            if (onFocus) {
              onFocus();
            }
          }}
          value={value}
          className={`block w-full py-2 pl-9 pr-12 font-geist text-sm font-semibold rounded-[90px] transition-all duration-200  shadow-dark text-black-100 bg-white outline-none border-none placeholder:text-black-100 ${
            invalid && "border-red-100"
          }`}
          onKeyUp={onKeyup}
          min={min}
          max={max}
        />

        <Image
          src={inputCommand}
          alt="Command + G"
          className="absolute right-3 top-0 bottom-0 my-auto fovus:border-1 focus:border-gray-100 "
        />
      </span>
      {(invalid || inValidCondition) && (
        <span className="text-red-100 font-geist text-[12px]">
          {errorMessage || `Please enter a valid ${label?.toLowerCase()}`}{" "}
        </span>
      )}
      {tip && (
        <span className="text-gray-300-100 font-geist text-[12px]">{tip}</span>
      )}
    </div>
  );
};

export { Input, SidenavInput };
