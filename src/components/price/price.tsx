import React, { FunctionComponent } from 'react';
import { currency } from 'utilities/currency/currency';

import './price.scss';

interface PriceProps {
  price: number;
  size?: 's' | 'l';
}

export const Price: FunctionComponent<PriceProps> = ({ price, size }) => {
  let priceStyles = `c-price`;

  if (size) {
    priceStyles += ` c-price--${size}`;
  }

  return <p className={priceStyles}>{currency(price)}</p>;
};
