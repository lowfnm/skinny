import { FC, Suspense } from 'react';
import { ScrollRestoration } from 'react-router-dom';

import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

interface RouteProps {
  component: FC;
}

export const Route: FC<RouteProps> = ({ component: Component }) => {
  return (
    <Suspense fallback={<div>loader</div>}>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Component />
        <ScrollRestoration />
      </QueryParamProvider>
    </Suspense>
  );
};
