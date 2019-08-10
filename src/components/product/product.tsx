import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router';

import './product.scss';
import { Price } from '@components';

interface ProductProps {
  url: string;
  title: string;
  path: string;
  image: string;
  price: number;
}

export const Product: FunctionComponent<ProductProps> = ({ url, title, path, image, price }) => {
  const img = require(`../../products/${path}/images/${image}.jpg`);

  return (
    <article>
      <Link to={url} className="c-product">
        <img src={img} alt={title} className="c-product__img" />
        <h3 className="c-product__heading">{title}</h3>
        <Price price={price} />
      </Link>
    </article>
  );
};
