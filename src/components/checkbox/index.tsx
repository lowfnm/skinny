import { FC, InputHTMLAttributes } from 'react';

import cn from 'classnames';

type CheckboxProps = {
  label: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  value,
  className,
  ...props
}) => {
  return (
    <div className={cn(`flex items-center gap-2 ${className}`)}>
      <input
        type="checkbox"
        id={id}
        value={value}
        {...props}
        className="h-5 w-5 cursor-pointer rounded-lg accent-black"
      />
      <label htmlFor={id} className="cursor-pointer text-sm">
        {label}
      </label>
    </div>
  );
};
