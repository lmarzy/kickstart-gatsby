import React from 'react';
import { graphql } from 'gatsby';

import './product.scss';
import { currency } from 'utilities/currency/currency';

import { MainLayout } from '@components';

import { ProductDetailsProps } from './products.model';

export default ({ data }: ProductDetailsProps) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <MainLayout>
      <article className="l-product-details u-mb-4">
        <div className="l-product-details__gallery">
          <img src="/" alt="" />
        </div>
        <div className="l-product-details__text">
          <h2>{frontmatter.title}</h2>
          <p>{currency(frontmatter.price)}</p>
          <p>{frontmatter.inStock ? 'in-stock' : 'out of stock'}</p>
          <p>{frontmatter.shortDesc}</p>
        </div>
        <div className="l-product-details__description">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="l-product-details__specs">
          <p>Specs</p>
        </div>
      </article>
    </MainLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        price
        inStock
        shortDesc
      }
    }
  }
`;
