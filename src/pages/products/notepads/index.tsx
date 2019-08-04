import React from 'react';
import { graphql } from 'gatsby';

import { MainLayout, Section } from '@components';

import { ProductModel, ProductsProps } from '../product.model';

export default ({ data }: ProductsProps): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const notepads = edges.filter((item: ProductModel) => item.node.frontmatter.category === 'notepads');

  return (
    <MainLayout>
      <Section heading="Notepads">
        <ul>
          {notepads.map((whiteboard: any) => (
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
