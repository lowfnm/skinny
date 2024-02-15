import { z } from 'zod';

export const checkoutSchema = z.object({
  email: z.string().email(),
  country: z.string(),
  firstName: z.string().min(2).max(50).optional(),
  lastName: z.string().min(2).max(50),
  address: z.string(),
  apartment: z.string().max(10).optional(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string().min(5).max(10),
  phone: z.string().regex(/^\+[1-9]\d{1,14}$/),
  cardNumber: z.string().optional(),
  cardHolderName: z.string().optional(),
  cardExpiration: z.string().optional(),
  cvv: z.string().min(3).max(4).optional(),
});
