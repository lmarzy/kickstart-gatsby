import React from 'react';
import { graphql } from 'gatsby';

import { MainLayout } from '@layouts/index';

import { ProductsModel, ProductModel } from 'models/product-list.model';

export default ({ data }: ProductsModel): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const category = edges.filter((item: ProductModel) => item.node.frontmatter.category === 'test-category');

  return (
    <MainLayout pageTitle="Whiteboards">
      <h2>{category[0].node.frontmatter.title}</h2>
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
