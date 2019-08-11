import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import { Link } from '@reach/router';

import { ProductModel } from '../../pages/products/product.model';

import './category-list.scss';
import { unDashAndCap } from 'utilities/un-dash-and-cap/unDashandCap';

interface CategoryListProps {
  categories: ProductModel[];
}

export const CategoryList: FunctionComponent<CategoryListProps> = ({ categories }) => {
  return (
    <ul className="c-category-list">
      {categories.map((category: ProductModel) => {
        return (
          <li key={category.node.id} className="c-category-list__list-item">
            <Link
              to={`/products/${category.node.frontmatter.category}/${category.node.frontmatter.subCategory}`}
              className="c-category-list__link">
              <Img
                fluid={category.node.frontmatter.mainImage.childImageSharp.fluid}
                alt={category.node.frontmatter.subCategory}
              />
              <span className="c-category-list__category">{unDashAndCap(category.node.frontmatter.subCategory)}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
