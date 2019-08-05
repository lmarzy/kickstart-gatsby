import React, { FunctionComponent } from 'react';

import './product-details.scss';

interface ProductDetailsProps {
  html: string;
}

export const ProductDetails: FunctionComponent<ProductDetailsProps> = ({ html }) => (
  <section className="c-product-details" dangerouslySetInnerHTML={{ __html: html }} />
);
