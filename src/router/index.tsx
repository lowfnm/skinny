import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Route } from './components';

import { RoutesEnum } from '@/enums';

const CheckoutPage = lazy(() => import('@/pages/checkout'));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: () => <Navigate to={RoutesEnum.CHECKOUT} replace />,
  },
  {
    path: RoutesEnum.CHECKOUT,
    Component: () => <Route component={CheckoutPage} />,
    errorElement: <div>Error 404 page</div>,
  },
]);
