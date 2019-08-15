import React from 'react';
import { graphql } from 'gatsby';

import { ProductsModel, ProductModel } from '@models/product-list.model';

import { Banner, MainLayout, Section, ProductList } from '@components';

export default ({ data }: ProductsModel): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const latestProducts = edges.filter((item: ProductModel) => item.node.frontmatter.latest);

  return (
    <MainLayout pageTitle="Home">
      <Banner />
      <Section heading="Latest Products" mb>
        <ProductList products={latestProducts} />
      </Section>
      <Section heading="Products, made just for you!" highlight>
        <p className="u-mb-2">
          Beespoked is a family run small business from the heart of the UK. Run from a small home office creating
          personalised whiteboards, notepads, signs and gifts.
        </p>
        <p>
          Our customes are at the heart of everything we do, creating products to suit every need and want from adding
          simple personalisation to creating completely unique designs.
        </p>
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
            category
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
