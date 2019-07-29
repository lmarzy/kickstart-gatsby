import React from 'react';
import { graphql } from 'gatsby';

import { MainLayout, Section } from '@components';

import { ProductModel, ProductsProps } from '../product.model';

export default ({ data }: ProductsProps): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const whiteboards = edges.filter((item: ProductModel) => item.node.frontmatter.category === 'whiteboards');

  return (
    <MainLayout>
      <Section heading="Notepads">
        <ul>
          {whiteboards.map((whiteboard: any) => (
            <li key={whiteboard.node.frontmatter.title}>{whiteboard.node.frontmatter.title}</li>
          ))}
        </ul>
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
