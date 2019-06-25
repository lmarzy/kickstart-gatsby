import React, { FunctionComponent } from 'react';

import { ProductsModel } from 'pages/models/indexPage.model';

import { Product } from '@components';
import './product-list.scss';

interface ProductListProps {
  products: ProductsModel[];
}

export const ProductList: FunctionComponent<ProductListProps> = ({ products }) => (
  <ul className="c-product-list">
    {products.map((item: ProductsModel) => (
      <li key={item.node.id} className="c-product-list__list-item">
        <Product
          url={item.node.fields.slug}
          title={item.node.frontmatter.title}
          path={item.node.frontmatter.path}
          image={item.node.frontmatter.image}
          price={item.node.frontmatter.price}
        />
      </li>
    ))}
  </ul>
);
