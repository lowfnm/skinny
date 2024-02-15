import { FC } from 'react';

type PriceWithDiscountProps = {
  originalPrice: string;
  discountedPrice: string;
};

export const PriceDiscount: FC<PriceWithDiscountProps> = ({
  originalPrice,
  discountedPrice,
}) => {
  return (
    <div>
      <span className="text-error mr-2.5 line-through">{originalPrice}</span>
      {discountedPrice}
    </div>
  );
};
