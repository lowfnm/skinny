import { FC, Suspense } from 'react';

import styles from './Route.module.css';

interface RouteProps {
  component: FC;
  requireAuth?: boolean;
}

export const Route: FC<RouteProps> = ({ component: Component }) => {
  return (
    <Suspense fallback={<div className={styles.loader}>loader</div>}>
      <Component />
    </Suspense>
  );
};
