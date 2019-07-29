import React from 'react';
import { graphql, Link } from 'gatsby';

import { MainLayout, Section } from '@components';

import { unDashAndCap } from 'utilities/un-dash-and-cap/unDashandCap';
import { ProductsProps, ProductModel } from '../product.model';

export default ({ data }: ProductsProps): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const whiteboards = edges.filter((item: ProductModel) => item.node.frontmatter.category === 'whiteboards');

  return (
    <MainLayout>
      <Section heading="Whiteboards">
        <ul>
          {whiteboards.map((whiteboard: ProductModel) => (
            <li key={whiteboard.node.frontmatter.subCategory}>
              <Link to={`/products/whiteboards/${whiteboard.node.frontmatter.subCategory}`}>
                {unDashAndCap(whiteboard.node.frontmatter.subCategory)}
              </Link>
            </li>
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
