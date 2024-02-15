import { FC } from 'react';

type TotalProps = {
  subtotal: string;
  shipping: string;
  total: string;
};

export const Total: FC<TotalProps> = ({ subtotal, shipping, total }) => {
  return (
    <div className="text-sm">
      <div className="row border-color-[#e0dfdd] border-t-[1px]">
        <div>Subtotal</div>
        <div>{subtotal}</div>
      </div>
      <div className="row">
        <div>Shipping</div>
        <div>{shipping}</div>
      </div>
      <div className="row border-color-[#e0dfdd] mt-2.5 border-t-[1px] font-bold">
        <div>TOTAL</div>
        <div>{total}</div>
      </div>
    </div>
  );
};
