import React from 'react';
import { graphql } from 'gatsby';

import { MainLayout, Section, ProductList } from '@components';

import { ProductsModel, ProductModel } from '@models/product-list.model';

export default ({ data }: ProductsModel): JSX.Element => {
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
