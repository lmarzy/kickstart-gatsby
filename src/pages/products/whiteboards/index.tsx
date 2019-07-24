import React from 'react';
import { graphql } from 'gatsby';

import { MainLayout, Section } from '@components';

export default ({ data }: any): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const whiteboards = edges.filter((item: any) => item.node.frontmatter.category === 'Whiteboards');

  return (
    <MainLayout>
      <Section heading="Whiteboards">
        <ul>
          {whiteboards.map((whiteboard: any) => (
            <li key={whiteboard.node.frontmatter.subCategory}>{whiteboard.node.frontmatter.subCategory}</li>
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
            subCategory
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
