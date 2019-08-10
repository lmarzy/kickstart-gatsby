import React, { FunctionComponent } from 'react';
import { Button, Price, Icon } from '@components';

import { SnipCartInterface } from 'templates/products.model';

import './product-overview.scss';

interface ProductOverviewProps {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  path: string;
  inStock: boolean;
  shortDesc: string;
  snipcart: SnipCartInterface;
}

const showStock = (inStock: boolean) => {
  return inStock ? (
    <span>
      <Icon name="tick" />
      In stock
    </span>
  ) : (
    <span>
      <Icon name="close" />
      Out of stock
    </span>
  );
};

export const ProductOverview: FunctionComponent<ProductOverviewProps> = ({
  id,
  title,
  category,
  price,
  image,
  path,
  inStock,
  shortDesc,
  snipcart,
}) => (
  <div className="c-product-overview">
    <h2 className="c-product-overview__title">{title}</h2>
    <Price price={price} size="l" />
    <p className="c-product-overview__in-stock">{showStock(inStock)}</p>
    <p className="c-product-overview__short-desc">{shortDesc}</p>

    <Button
      type="primary"
      width="full"
      id={id}
      title={title}
      category={category}
      price={price}
      path={path}
      shortDesc={shortDesc}
      image={image}
      snipcart={snipcart}>
      Add to basket
    </Button>
  </div>
);
