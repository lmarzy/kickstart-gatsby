import React from 'react';
import { graphql } from 'gatsby';

import './product.scss';

import { ProductDetailsModel } from 'models/product.model';
import { ImageGallery } from '@sections/index';

export default ({ data }: ProductDetailsModel): JSX.Element => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <div>
      <h1>Product Page</h1>
      <ImageGallery images={frontmatter.images} />
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
        images {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        inStock
        shortDesc
      }
    }
  }
`;
