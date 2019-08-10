import React, { FunctionComponent } from 'react';
import { SpecsInterface } from 'templates/products.model';

import './product-specs.scss';

interface ProductSpecsProps {
  specs: SpecsInterface;
}

export const ProductSpecs: FunctionComponent<ProductSpecsProps> = ({ specs }) => (
  <dl className="c-product-specs">
    {specs.material && (
      <>
        <dt>Material:</dt>
        <dd>{specs.material}</dd>
      </>
    )}
    {specs.width && (
      <>
        <dt>Width:</dt>
        <dd>{specs.width}</dd>
      </>
    )}
    {specs.height && (
      <>
        <dt>Height:</dt>
        <dd>{specs.height}</dd>
      </>
    )}
    {specs.weight && (
      <>
        <dt>Weight:</dt>
        <dd>{specs.weight}</dd>
      </>
    )}
  </dl>
);
