import React from 'react';
import { graphql } from 'gatsby';

import { MainLayout, Section, ProductList } from '@components';

import { ProductsModel, ProductModel } from '@models/product-list.model';

export default ({ data }: ProductsModel): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const whiteboards = edges.filter(
    (item: ProductModel) => item.node.frontmatter.category === 'whiteboards' && item.node.frontmatter.subCategory === 'weekly-planners',
  );

  return (
    <MainLayout pageTitle="Weekly Planner Whiteboards">
      <Section heading="Weekly Planner Whiteboards">
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
            prices
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
