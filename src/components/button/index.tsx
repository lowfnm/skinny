import { ButtonHTMLAttributes, FC } from 'react';

import cn from 'classnames';

type ButtonProps = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        `cursor-pointer rounded bg-[#4e00ff] px-8 py-4 font-medium text-white hover:bg-[#1a0053] ${className}`,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
