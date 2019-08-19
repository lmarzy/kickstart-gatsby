import React from 'react';
import { graphql } from 'gatsby';

import './product.scss';

import { ProductDetailsModel } from '@models/product.model';

export default ({ data }: ProductDetailsModel) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        id
        title
        category
        path
        price
        images
        inStock
        shortDesc
      }
    }
  }
`;
