import React, { FunctionComponent } from 'react';
import { currency } from 'utilities/currency/currency';

import './price.scss';

interface PriceProps {
  prices: number[];
  size?: 's' | 'l';
}

export const Price: FunctionComponent<PriceProps> = ({ prices, size }) => {
  let priceStyles = `c-price`;

  if (size) {
    priceStyles += ` c-price--${size}`;
  }

  return (
    <p className={priceStyles}>
      <span>
        {currency(prices[0])} {prices.length > 1 && ` - ${currency(prices[1])}`}
      </span>
      <span className="c-price__delivery">(Free UK Delivery)</span>
    </p>
  );
};
