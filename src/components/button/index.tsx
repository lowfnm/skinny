import { ButtonHTMLAttributes, FC } from 'react';

import cn from 'classnames';

type ButtonProps = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={cn(`button-primary ${className}`)} {...props}>
      {children}
    </button>
  );
};
