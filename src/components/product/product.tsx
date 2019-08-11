import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import { Link } from '@reach/router';

import './product.scss';
import { Price } from '@components';

interface ProductProps {
  url: string;
  title: string;
  image: any;
  price: number;
}

export const Product: FunctionComponent<ProductProps> = ({ url, title, image, price }) => (
  <article>
    <Link to={url} className="c-product">
      <Img fluid={image} alt={title} className="c-product__img" />
      <h3 className="c-product__heading">{title}</h3>
      <Price price={price} />
    </Link>
  </article>
);
