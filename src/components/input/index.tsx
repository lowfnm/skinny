import { FC, InputHTMLAttributes } from 'react';

import cn from 'classnames';

import styles from './Input.module.css';

export type InputProps = {
  validated?: boolean;
  label?: string;
  handleClear?: () => void;
  errorMessages?: boolean | string | string[];
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({
  label,
  validated,
  className: wrapperClassName,
  errorMessages: errorMessagesProp,
  ...baseComponentProps
}) => {
  const { disabled, type, id } = baseComponentProps;

  const errorMessages = Array.isArray(errorMessagesProp)
    ? errorMessagesProp
    : [errorMessagesProp].filter(Boolean);

  const isError = !!errorMessages?.length;

  return (
    <div
      className={cn(
        styles.customInput,
        {
          [styles.disabled]: disabled,
          [styles.error]: isError,
          [styles.validated]: validated,
        },
        wrapperClassName,
      )}
    >
      <label htmlFor={id}>{label}</label>
      <input {...baseComponentProps} type={type} />
      {errorMessages?.map((errorMessage, index) => (
        <span key={index}>{errorMessage}</span>
      ))}
    </div>
  );
};
