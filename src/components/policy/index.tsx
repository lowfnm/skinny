import { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

type PolicyLink = {
  label: string;
  link: string;
};

type PolicyProps = {
  policy: PolicyLink[];
  className?: string;
} & HTMLAttributes<HTMLUListElement>;

export const Policy: FC<PolicyProps> = ({ policy, className, ...props }) => {
  return (
    <ul
      className={cn(`flex items-center gap-5 text-xs ${className}`)}
      {...props}
    >
      {policy.map((item) => (
        <li key={item.label} className="hover:decoration-1">
          <Link to={item.link}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
