import React, { FunctionComponent } from 'react';
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
        const img = require(`../../products/${category.node.frontmatter.path}/images/${
          category.node.frontmatter.images[0]
        }.jpg`);

        return (
          <li key={category.node.id} className="c-category-list__list-item">
            <Link
              to={`/products/${category.node.frontmatter.category}/${category.node.frontmatter.subCategory}`}
              className="c-category-list__link">
              <img src={img} alt={category.node.frontmatter.subCategory} />
              <span className="c-category-list__category">{unDashAndCap(category.node.frontmatter.subCategory)}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
