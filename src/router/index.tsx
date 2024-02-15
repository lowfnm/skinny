import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Route } from './components';

import { RoutesEnum } from '@/enums';

const ShippingPage = lazy(() => import('@/pages/shipping'));
const CheckoutPage = lazy(() => import('@/pages/checkout'));

export const router = createBrowserRouter([
  {
    path: RoutesEnum.SHIPPING,
    Component: () => <Route component={ShippingPage} />,
  },
  {
    path: RoutesEnum.CHECKOUT,
    Component: () => <Route component={CheckoutPage} />,
  },
]);
