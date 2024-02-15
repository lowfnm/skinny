import { FC } from 'react';

import { FormikProps } from 'formik';
import { isValid } from 'zod';

import { Button, Checkbox, Input } from '@/components';
import { ShippingFormType } from '@/type';

type UserInfoProps = {
  formik: FormikProps<ShippingFormType>;
  nextStep: () => void;
};

export const UserInfo: FC<UserInfoProps> = ({ formik, nextStep }) => {
  const { values, errors, touched, handleBlur, handleChange, isSubmitting } =
    formik;

  return (
    <>
      <h2>Contact</h2>
      <Input
        id="email"
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessages={touched.email && errors.email}
        className="mt-2.5"
      />
      <Checkbox
        id="newsLetter"
        label="Email me with news and offers"
        checked={values.newsLetter}
        onChange={handleChange}
        className="mt-0.5"
      />
      <h2 className="mt-10">Shipping address</h2>
      <Input
        id="country"
        type="text"
        placeholder="Country"
        value={values.country}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessages={touched.country && errors.country}
        className="mt-2.5"
      />
      <div className="mt-2.5 flex gap-4">
        <Input
          id="firstName"
          type="text"
          placeholder="First name (optional)"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessages={touched.firstName && errors.firstName}
        />
        <Input
          id="lastName"
          type="text"
          placeholder="Last name"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessages={touched.lastName && errors.lastName}
        />
      </div>
      <Input
        id="address"
        type="text"
        placeholder="Address"
        value={values.address}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessages={touched.address && errors.address}
        className="mt-2.5"
      />
      <Input
        id="apartment"
        type="text"
        placeholder="Aparment, suite, etc. (optional)"
        value={values.apartment}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessages={touched.apartment && errors.apartment}
        className="mt-2.5"
      />
      <div className="mt-2.5 flex w-full max-w-[136px] gap-4">
        <Input
          id="city"
          type="text"
          placeholder="City"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessages={touched.city && errors.city}
        />
        <Input
          id="state"
          type="text"
          placeholder="State"
          value={values.state}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessages={touched.state && errors.state}
        />
        <Input
          id="zipCode"
          type="text"
          placeholder="Zip code"
          value={values.zipCode}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessages={touched.zipCode && errors.zipCode}
        />
      </div>
      <Input
        id="phone"
        type="text"
        placeholder="Phone"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessages={touched.phone && errors.phone}
        className="mt-2.5"
      />
      <Button
        onClick={nextStep}
        disabled={isSubmitting || !isValid}
        className="ml-auto mt-4 uppercase"
      >
        Continue to payment
      </Button>
    </>
  );
};
