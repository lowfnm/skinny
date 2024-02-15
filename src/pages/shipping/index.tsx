import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

import { breadcrumbs, initialValues, policy } from './data';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import logo from '@/assets/images/logo-blue.png';
import productImage from '@/assets/images/product.jpeg';
import { Breadcrumbs, Button, Input, Policy } from '@/components';
import { RoutesEnum } from '@/enums';
import { ShippingFormType } from '@/type';
import { shippingFormSchema } from '@/validation';

const DashboardPage = () => {
  const navigate = useNavigate();

  const onSubmit = (values: ShippingFormType) => {
    // api call here
    console.warn(values);
    navigate(RoutesEnum.CHECKOUT);
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
    isValid,
    touched,
  } = useFormik<ShippingFormType>({
    initialValues,
    validationSchema: toFormikValidationSchema(shippingFormSchema),
    onSubmit,
  });

  return (
    <div className="container flex">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shipping</title>
      </Helmet>
      <div className="border-color-[#e0dfdd] border-r-[1px] pb-16 pr-12 pt-16">
        <Link to={RoutesEnum.SHIPPING}>
          <img src={logo} alt="Logo" width={120} />
        </Link>
        <Breadcrumbs breadcrumbs={breadcrumbs} className="mt-5" />
        <form onSubmit={handleSubmit} className="mt-4">
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
          <div className="mt-2.5 flex gap-4">
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
            type="submit"
            className="mt-9 uppercase"
            disabled={isSubmitting || !isValid}
          >
            Continue to payment
          </Button>
        </form>
        <Policy
          policy={policy}
          className="border-color-[#e0dfdd] mt-20 border-t-[1px] pt-3.5"
        />
      </div>
      <div className="pb-12 pl-12 pt-16">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-5">
            <div>
              <img
                src={productImage}
                alt="Product"
                width={53}
                className="border-color-[#fad9d9] rounded-lg border"
              />
            </div>
            <div>
              <div>Semaglutide</div>
              <div className="text-xs">1 Month Supply</div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex items-start gap-2">
          <Input id="dicsountCode" type="text" placeholder="Dicsount Code" />
          <Button type="submit" className="h-[50px]">
            Apply
          </Button>
        </div>
        <div>
          <div className="flex items-center justify-between uppercase">
            <div>Subtotal</div>
            <div>$99.00</div>
          </div>
          <div className="flex items-center justify-between uppercase">
            <div>Shipping</div>
            <div>Free</div>
          </div>
          <div className="flex items-center justify-between font-bold uppercase">
            <div>TOTAL</div>
            <div>USD $99.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
