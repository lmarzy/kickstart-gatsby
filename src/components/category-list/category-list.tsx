import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router';

// import { ProductsModel } from 'pages/index.model';

import './category-list.scss';

export const CategoryList: FunctionComponent = ({ categories }) => {
  return (
    <ul className="c-category-list">
      {categories.map((category: any) => {
        const img = require(`../../products/${category.node.frontmatter.path}/images/${
          category.node.frontmatter.image
        }.jpg`);
        return (
          <li key={category.node.id} className="c-category-list__list-item">
            <Link to={`/products/${category.node.frontmatter.category}`}>
              <img src={img} alt={category.node.frontmatter.category} />
              <span>{category.node.frontmatter.category}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
