import React from 'react';
import { graphql } from 'gatsby';

import { ProductsModel, ProductModel } from 'models/product-list.model';

import { MainLayout } from '@layouts/index';

export default ({ data }: ProductsModel): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const latestProducts = edges.filter((item: ProductModel) => item.node.frontmatter.latest);

  return (
    <MainLayout pageTitle="Home">
      <h2>Index Page</h2>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            latest
            category
            mainImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            price
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
