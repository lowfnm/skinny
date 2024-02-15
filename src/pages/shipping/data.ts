import { RoutesEnum } from '@/enums';
import { ShippingFormType } from '@/type';

export const breadcrumbs = [
  { label: 'Shipping', link: RoutesEnum.SHIPPING },
  { label: 'Payment', link: RoutesEnum.CHECKOUT },
];

export const policy = [
  {
    label: 'Refund Policy',
    link: '#',
  },
  {
    label: 'Shopping Policy',
    link: '#',
  },
  {
    label: 'Privacy Policy',
    link: '#',
  },
  {
    label: 'Terms of service',
    link: '#',
  },
];

export const initialValues: ShippingFormType = {
  email: '',
  country: 'United States',
  firstName: '',
  lastName: '',
  address: '',
  apartment: '',
  city: '',
  state: 'Alabama',
  zipCode: '',
  phone: '',
};
