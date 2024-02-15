import { FC } from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

type Breadcrumb = {
  label: string;
  link?: string;
};

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
  className?: string;
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  breadcrumbs,
  className,
}) => {
  return (
    <nav className={cn(`w-full rounded-md ${className}`)}>
      <ol className="list-reset flex">
        {breadcrumbs.map((crumb, index) => (
          <li key={index}>
            {crumb.link ? (
              <Link to={crumb.link} className="text-sm">
                {crumb.label}
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
