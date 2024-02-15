import { FC } from 'react';

import { FormikProps } from 'formik';
import { isValid } from 'zod';

import cardImage from '@/assets/images/card-logo.jpg';
import { Button, Input } from '@/components';
import { ShippingFormType } from '@/type';

type BankDetailsProps = {
  formik: FormikProps<ShippingFormType>;
  prevStep: () => void;
};

export const BankDetails: FC<BankDetailsProps> = ({ formik, prevStep }) => {
  const { values, errors, touched, handleBlur, handleChange, isSubmitting } =
    formik;

  return (
    <>
      <div>
        <div className="border-color-[#a9a9a9] border px-6 text-sm">
          <div className="row pb-3.5">
            <div>Contract</div>
            <div>{values.email}</div>
            <button onClick={prevStep} className="underline">
              Change
            </button>
          </div>
          <div className="row border-color-[#a9a9a9] border-t-[1px] pb-3.5">
            <div>Ship to</div>
            <div>{values.address}</div>
            <button onClick={prevStep} className="underline">
              Change
            </button>
          </div>
          <div className="row border-color-[#a9a9a9] border-t-[1px] pb-3.5">
            <div>Shipping method</div>
            <div>Standard</div>
            <button onClick={prevStep} className="underline">
              Change
            </button>
          </div>
        </div>
      </div>
      <h2 className="mt-[50px]">Payment</h2>
      <p className="text-sm">All transactions are secure and encrypted.</p>
      <div className="border-color-[#a9a9a9] mt-5 border">
        <div className="border-color-[#a9a9a] flex items-center justify-between border-b-[1px] px-[15px] py-[13px]">
          <div>Credit card</div>
          <img src={cardImage} alt="Bank card logo" width={161} />
        </div>
        <div className="bg-[#f4f3f0] px-[15px] pb-[15px] pt-[5px]">
          <Input
            id="cardNumber"
            type="text"
            placeholder="Card number"
            value={values.cardNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessages={touched.cardNumber && errors.cardNumber}
          />
          <Input
            id="cardHolderName"
            type="text"
            placeholder="Name on card"
            value={values.cardHolderName}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessages={touched.cardHolderName && errors.cardHolderName}
          />
          <div className="flex items-center gap-4">
            <Input
              id="cardExpiration"
              type="text"
              placeholder="Expiration date (MM/YY)"
              value={values.cardExpiration}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessages={touched.cardExpiration && errors.cardExpiration}
            />
            <Input
              id="cvv"
              type="text"
              placeholder="Security code"
              value={values.cvv}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessages={touched.cvv && errors.cvv}
            />
          </div>
        </div>
      </div>
      <h2 className="mt-[50px]">Billing address</h2>
      <p className="text-sm">
        Select the address that matches your card or payment method.
      </p>
      <div className="flex items-center justify-between pt-[35px]">
        <button onClick={prevStep} className="text-sm">
          &lt; Return to shipping
        </button>
        <Button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="uppercase"
        >
          Checkout now
        </Button>
      </div>
    </>
  );
};
