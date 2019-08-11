import React from 'react';
import { graphql } from 'gatsby';

import { ProductsModel, IndexPageProps } from './index.model';

import { Banner, MainLayout, Section, ProductList } from '@components';

export default ({ data }: IndexPageProps): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const latestProducts = edges.filter((item: ProductsModel) => item.node.frontmatter.latest);

  return (
    <MainLayout pageTitle="Home">
      <Banner />
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
