import { Helmet } from 'react-helmet';

import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import logo from '@/assets/images/logo-blue.png';
import { Breadcrumbs, Input } from '@/components';
import { breadcrumbs, initialValues } from '@/pages/shipping/data.ts';
import { ShippingFormType } from '@/type';
import { shippingFormSchema } from '@/validation';

const DashboardPage = () => {
  const onSubmit = (values: ShippingFormType) => {
    console.warn(values);
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
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shipping</title>
      </Helmet>
      <div className="pt-16">
        <img src={logo} alt="Logo" width={120} />
        <Breadcrumbs breadcrumbs={breadcrumbs} className="mt-5" />
        <div className="mt-4">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="form-control checkout"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
