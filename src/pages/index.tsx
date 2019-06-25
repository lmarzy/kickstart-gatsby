import React from 'react';
import { graphql } from 'gatsby';

import { ProductsModel, IndexPageProps } from './models/indexPage.model';

import { Banners, MainLayout, Section, ProductList } from '@components';

export default ({ data }: IndexPageProps): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const latestProducts = edges.filter((item: ProductsModel) => item.node.frontmatter.latest);

  return (
    <MainLayout>
      <Banners />
      <Section heading="Latest Products">
        <ProductList products={latestProducts} />
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
            latest
            path
            image
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
