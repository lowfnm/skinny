export type ShippingFormType = {
  email: string;
  newsLetter?: boolean;
  country: string;
  firstName?: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  cardNumber?: string;
  cardHolderName?: string;
  cardExpiration?: string;
  cvv?: string;
};
