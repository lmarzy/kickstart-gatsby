import React from 'react';
import { graphql, Link } from 'gatsby';

import { MainLayout, Section } from '@components';

import { unDashAndCap } from 'utilities/un-dash-and-cap/unDashandCap';
import { ProductsProps, ProductModel } from '../product.model';

export default ({ data }: ProductsProps): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const notepads = edges.filter((item: ProductModel) => item.node.frontmatter.category === 'notepads');

  return (
    <MainLayout pageTitle="Notepads">
      <Section heading="Notepads">
        <ul>
          {notepads.map((notepad: ProductModel) => (
            <li key={notepad.node.frontmatter.subCategory}>
              <Link to={`/products/notepads/${notepad.node.frontmatter.subCategory}`}>
                {unDashAndCap(notepad.node.frontmatter.subCategory)}
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
