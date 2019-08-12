import React from 'react';
import { graphql } from 'gatsby';

import { MainLayout, Section, CategoryList } from '@components';

import { ProductsProps, ProductModel } from '../../../models/product.model';

export default ({ data }: ProductsProps): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const whiteboards = edges.filter((item: ProductModel) => item.node.frontmatter.category === 'whiteboards');

  return (
    <MainLayout pageTitle="Whiteboards">
      <Section heading="Whiteboards">
        <CategoryList categories={whiteboards} />
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
