import React, { FunctionComponent } from 'react';
import { Price, Icon, ButtonBuy } from '@components';

import { SnipCartModel } from '@models/product.model';

import './product-overview.scss';

interface ProductOverviewProps {
  id: number;
  title: string;
  category: string;
  prices: number[];
  image: string;
  path: string;
  inStock: boolean;
  shortDesc: string[];
  snipcart: SnipCartModel;
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
  prices,
  image,
  path,
  inStock,
  shortDesc,
  snipcart,
}) => (
  <div className="c-product-overview">
    <h2 className="c-product-overview__title">{title}</h2>
    <Price prices={prices} size="l" />
    <p className="c-product-overview__in-stock">{showStock(inStock)}</p>
    {shortDesc.map((item: string, i: number) => {
      let styles = 'c-product-overview__short-desc';
      const last = shortDesc.length - 1;

      if (i === last) {
        styles += ` last`;
      }

      return (
        <p key={`desc-${i}`} className={styles}>
          {item}
        </p>
      );
    })}

    <ButtonBuy
      style="primary"
      width="full"
      id={id}
      title={title}
      prices={prices}
      path={path}
      image={image}
      snipcart={snipcart}>
      Add to basket
    </ButtonBuy>

    <p className="c-product-overview__personalisation">* Personalisaiton details added during checkout.</p>
  </div>
);
