import React, { FunctionComponent } from 'react';
import { currency } from 'utilities/currency/currency';

import './product-overview.scss';
import { Button } from '@components/button/button';

interface ProductOverviewProps {
  title: string;
  price: number;
  inStock: boolean;
  shortDesc: string;
}

export const ProductOverview: FunctionComponent<ProductOverviewProps> = ({ title, price, inStock, shortDesc }) => (
  <div className="c-product-overview">
    <h2 className="c-product-overview__title">{title}</h2>
    <p className="c-product-overview__price">{currency(price)}</p>
    <p className="c-product-overview__in-stock">{inStock ? 'in-stock' : 'out of stock'}</p>
    <p className="c-product-overview__short-desc">{shortDesc}</p>

    <Button type="primary" width="full">
      Add to basket
    </Button>
  </div>
);
