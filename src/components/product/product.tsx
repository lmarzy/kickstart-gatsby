import React, { FunctionComponent } from 'react';

import { currency } from 'utilities/currency/currency';

import './product.scss';

interface ProductProps {
  url: string;
  title: string;
  path: string;
  image: string;
  price: number;
}

export const Product: FunctionComponent<ProductProps> = ({ url, title, path, image, price }) => {
  const img = require(`../../products/${path}/${image}.jpg`);

  return (
    <article>
      <a href={url} className="c-product">
        <img src={img} alt={title} className="c-product__img" />
        <h3 className="c-product__heading">{title}</h3>
        <p className="c-product__price">{currency(price)}</p>
      </a>
    </article>
  );
};
