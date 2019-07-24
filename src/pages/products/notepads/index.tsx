import React from 'react';
import { graphql } from 'gatsby';

import { MainLayout, Section } from '@components';

export default ({ data }: any): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const whiteboards = edges.filter((item: any) => item.node.frontmatter.category === 'whiteboards');

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
