import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { RoutesEnum } from '@/enums/router.ts';
import { Route } from './components/Route/Route.tsx';

const DashboardPage = lazy(() => import('src/pages/shipping'));
const CheckoutPage = lazy(() => import('@/pages/checkout'));

export const router = createBrowserRouter([
  {
    path: RoutesEnum.DASHBOARD,
    Component: () => <Route component={DashboardPage} />,
  },
  {
    path: RoutesEnum.CHECKOUT,
    Component: () => <Route component={CheckoutPage} />,
  },
]);
