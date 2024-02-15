import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { BankDetails, UserInfo } from './components';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import logo from '@/assets/images/logo-blue.png';
import productImage from '@/assets/images/product.jpeg';
import {
  Breadcrumbs,
  Button,
  Input,
  Policy,
  PriceDiscount,
  Total,
} from '@/components';
import {
  breadcrumbLinks,
  footerLinks,
  shippingInitialValues,
} from '@/constants';
import { LocalStorage, RoutesEnum } from '@/enums';
import { ShippingFormType } from '@/type';
import { checkoutSchema } from '@/validation';

const CheckoutPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (values: ShippingFormType) => {
    console.warn(values);
    localStorage.setItem(LocalStorage.CHECKOUT_FORM, JSON.stringify(values));
    alert('Thank you wait for call');
  };

  const formik = useFormik<ShippingFormType>({
    initialValues: shippingInitialValues,
    validationSchema: toFormikValidationSchema(checkoutSchema),
    onSubmit,
  });

  const { setValues, handleSubmit } = formik;

  useEffect(() => {
    const savedFormData = localStorage.getItem(LocalStorage.CHECKOUT_FORM);
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      setValues(parsedFormData);
    }
  }, [setValues]);

  return (
    <div className="container flex">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Checkout</title>
      </Helmet>
      <div className="border-color-[#e0dfdd] w-full max-w-[490px] border-r-[1px] pb-16 pr-12 pt-16">
        <Link to={RoutesEnum.CHECKOUT}>
          <img src={logo} alt="Logo" width={120} />
        </Link>
        <Breadcrumbs breadcrumbs={breadcrumbLinks} className="mt-5" />
        <form onSubmit={handleSubmit} className="mt-4">
          {step === 1 && <UserInfo formik={formik} nextStep={nextStep} />}
          {step === 2 && <BankDetails formik={formik} prevStep={prevStep} />}
        </form>
        <Policy
          policy={footerLinks}
          className="border-color-[#e0dfdd] mt-20 border-t-[1px] pt-3.5"
        />
      </div>
      <div className="w-full max-w-[440px] pb-12 pl-12 pt-16">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-5">
            <div className="relative">
              <img
                src={productImage}
                alt="Product"
                width={53}
                className="border-color-[#fad9d9] rounded-lg border"
              />
              <span className="absolute right-[-10px] top-[-10px] flex h-[18px] w-[18px] items-center justify-center rounded-lg bg-black text-[10px] text-white">
                1
              </span>
            </div>
            <div>
              <div>Semaglutide</div>
              <div className="text-xs">1 Month Supply</div>
            </div>
          </div>
          <PriceDiscount originalPrice="$395" discountedPrice="$99.00" />
        </div>
        <div className="mt-[75px] flex items-start gap-2">
          <Input id="dicsountCode" type="text" placeholder="Dicsount Code" />
          <Button type="submit" className="h-[50px]">
            Apply
          </Button>
        </div>
        <Total subtotal="$99.00" shipping="Free" total="USD $99.00" />
      </div>
    </div>
  );
};

export default CheckoutPage;
