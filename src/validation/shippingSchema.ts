import { z } from 'zod';

export const shippingFormSchema = z.object({
  email: z.string().email(),
  country: z.string(),
  firstName: z.string().optional(),
  lastName: z.string(),
  address: z.string(),
  apartment: z.string().optional(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  phone: z.string().regex(/^\+[1-9]\d{1,14}$/),
});
