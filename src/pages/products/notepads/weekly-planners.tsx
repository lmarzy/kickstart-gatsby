import React from 'react';
import { graphql } from 'gatsby';

import { MainLayout, Section, ProductList } from '@components';

import { ProductsProps, ProductModel } from '../product.model';

export default ({ data }: ProductsProps): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const whiteboards = edges.filter(
    (item: ProductModel) =>
      item.node.frontmatter.category === 'notepads' && item.node.frontmatter.subCategory === 'weekly-planners',
  );

  return (
    <MainLayout pageTitle="Weekly Planner Notepads">
      <Section heading="Weekly Planner Notepads">
        <ProductList products={whiteboards} />
      </Section>
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
            subCategory
            latest
            path
            images
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
