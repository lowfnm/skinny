import { RoutesEnum } from '@/enums/router.ts';
import { ShippingFormType } from '@/type';

export const breadcrumbs = [
  { label: 'Shipping', link: RoutesEnum.DASHBOARD },
  { label: 'Payment', link: RoutesEnum.CHECKOUT },
];

export const initialValues: ShippingFormType = {
  email: '',
  country: '',
  firstName: '',
  lastName: '',
  address: '',
  apartment: '',
  city: '',
  state: '',
  zipCode: '',
  phone: '',
};
