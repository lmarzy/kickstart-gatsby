import React, { FunctionComponent } from 'react';

import { ProductsModel } from 'pages/index.model';

import { Product } from '@components';
import './product-list.scss';

interface ProductListProps {
  products: ProductsModel[];
}

export const ProductList: FunctionComponent<ProductListProps> = ({ products }) => (
  <ul className="c-product-list">
    {products.map((product: ProductsModel) => (
      <li key={product.node.id} className="c-product-list__list-item">
        <Product
          url={product.node.fields.slug}
          title={product.node.frontmatter.title}
          image={product.node.frontmatter.mainImage.childImageSharp.fluid}
          price={product.node.frontmatter.price}
        />
      </li>
    ))}
  </ul>
);
