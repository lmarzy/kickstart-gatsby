import React from 'react';
import { graphql } from 'gatsby';

import './product.scss';
import { currency } from 'utilities/currency/currency';

import { MainLayout, ImageGallery, ProductOverview } from '@components';

import { ProductDetailsProps } from './products.model';

export default ({ data }: ProductDetailsProps) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <MainLayout>
      <article className="l-product-details u-mb-4">
        <div className="l-product-details__gallery">
          <ImageGallery images={frontmatter.images} path={frontmatter.path} />
        </div>
        <div className="l-product-details__text">
          <ProductOverview
            title={frontmatter.title}
            price={frontmatter.price}
            inStock={frontmatter.inStock}
            shortDesc={frontmatter.shortDesc}
          />
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
        path
        price
        images
        inStock
        shortDesc
      }
    }
  }
`;
