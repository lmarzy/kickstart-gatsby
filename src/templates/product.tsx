import React from 'react';
import { graphql } from 'gatsby';

import './product.scss';

import { MainLayout, ImageGallery, ProductOverview, ProductDetails, ProductSpecs } from '@components';

import { ProductDetailsProps } from './products.model';

export default ({ data }: ProductDetailsProps) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <MainLayout pageTitle={frontmatter.title}>
      <article className="l-product-details u-mb-4">
        <div className="l-product-details__gallery">
          <ImageGallery images={frontmatter.images} path={frontmatter.path} />
        </div>
        <div className="l-product-details__text">
          <ProductOverview
            id={frontmatter.id}
            title={frontmatter.title}
            category={frontmatter.category}
            price={frontmatter.price}
            image={frontmatter.images[0]}
            path={frontmatter.path}
            inStock={frontmatter.inStock}
            shortDesc={frontmatter.shortDesc}
            snipcart={frontmatter.snipcart}
          />
        </div>
        <div className="l-product-details__description">
          <ProductDetails html={html} />
        </div>
        <div className="l-product-details__specs">
          <ProductSpecs specs={frontmatter.specs} />
        </div>
      </article>
    </MainLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        id
        category
        title
        path
        price
        images
        inStock
        shortDesc
        specs {
          material
          width
          height
          weight
        }
        snipcart {
          title
          name
          columns
          addons
        }
      }
    }
  }
`;
