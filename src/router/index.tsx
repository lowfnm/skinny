import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Route } from './components';

import { RoutesEnum } from '@/enums';

const CheckoutPage = lazy(() => import('@/pages/checkout'));

export const router = createBrowserRouter([
  {
    path: RoutesEnum.CHECKOUT,
    Component: () => <Route component={CheckoutPage} />,
    errorElement: <div>Error 404 page</div>,
  },
]);
