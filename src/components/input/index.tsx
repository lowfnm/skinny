import { FC, InputHTMLAttributes } from 'react';

import cn from 'classnames';

export type InputProps = {
  validated?: boolean;
  label?: string;
  handleClear?: () => void;
  errorMessages?: boolean | string | string[];
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({
  label,
  validated,
  className,
  errorMessages: errorMessagesProp,
  ...baseComponentProps
}) => {
  const { type, id } = baseComponentProps;

  const errorMessages = Array.isArray(errorMessagesProp)
    ? errorMessagesProp
    : [errorMessagesProp].filter(Boolean);

  return (
    <div className={cn(`flex h-[70px] w-full flex-col text-sm ${className}`)}>
      <label htmlFor={id}>{label}</label>
      <input
        {...baseComponentProps}
        type={type}
        className={
          'rounded border border-[#a9a9a9] px-5 py-3.5 focus:outline-black focus-visible:border-[#4e00ff]'
        }
      />
      {errorMessages?.map((errorMessage, index) => (
        <span key={index} className="text-error mt-0.5">
          {errorMessage}
        </span>
      ))}
    </div>
  );
};
