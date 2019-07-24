import React from 'react';
import { graphql, Link } from 'gatsby';

import { MainLayout, Section } from '@components';

import { ProductCategoryPageProps, ProductCategoriesModel } from './index.model';

const getUnique = (arr: ProductCategoriesModel[]) => {
  const unique = arr
    .map((e: ProductCategoriesModel) => e.node.frontmatter.category)

    // store the keys of the unique objects
    .map((e: string, i: number, final: string[]) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter((e: any) => arr[e])
    .map((e: any) => arr[e]);

  return unique;
};

export default ({ data }: ProductCategoryPageProps): JSX.Element => {
  const { edges } = data.allMarkdownRemark;
  const categories = getUnique(edges);

  console.log(edges);

  return (
    <MainLayout>
      <Section heading="Products">
        <ul>
          {categories.map((category: ProductCategoriesModel) => (
            <li key={category.node.frontmatter.category}>
              <Link
                to={`/products/${category.node.frontmatter.category.toLocaleLowerCase()}`}
                className="c-site-nav__link">
                {category.node.frontmatter.category}
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
          frontmatter {
            category
          }
        }
      }
    }
  }
`;
