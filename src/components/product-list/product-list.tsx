import React, { FunctionComponent } from 'react';

import { ProductModel } from '@models/product-list.model';

import { Product } from '@components';
import './product-list.scss';

interface ProductListProps {
  products: ProductModel[];
}

export const ProductList: FunctionComponent<ProductListProps> = ({ products }) => (
  <ul className="c-product-list">
    {products.map((product: ProductModel) => (
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
