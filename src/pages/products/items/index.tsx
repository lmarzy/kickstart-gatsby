import React from 'react';
import { graphql } from 'gatsby';

import { MainLayout, Section, ProductList } from '@components';

import { ProductsModel, ProductModel } from '@models/product-list.model';

export default ({ data }: ProductsModel): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const items = edges.filter((item: ProductModel) => item.node.frontmatter.category === 'items');

  return (
    <MainLayout pageTitle="Items">
      <Section heading="Items">
        <ProductList products={items} />
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
