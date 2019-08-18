import React, { FunctionComponent } from 'react';

import { SnipCartModel } from '@models/product.model';

import './buton.scss';

interface ButtonProps {
  id: number;
  style: string;
  width?: 'full';
  prices: number[];
  image: string;
  title: string;
  path: string;
  snipcart: SnipCartModel;
}

export const ButtonBuy: FunctionComponent<ButtonProps> = ({
  id,
  style,
  width,
  prices,
  image,
  title,
  path,
  children,
  snipcart,
}) => {
  let buttonStyles = `c-button c-button--${style} snipcart-add-item buyBtn`;
  const img = require(`../../products/${path}/images/${image}.jpg`);

  if (width) {
    buttonStyles += ` c-button--${width}`;
  }

  console.log(snipcart);

  const buttonAttributes = {
    'data-item-id': id,
    'data-item-price': prices[0],
    'data-item-image': img,
    'data-item-name': title,
    'data-item-url': `http://beespoked.co.uk/products/${path}`,
  } as { [key: string]: string | number };

  if (snipcart.sizes) {
    const priceDifference = prices[1] - prices[0];

    buttonAttributes['data-item-custom1-name'] = 'Size';
    buttonAttributes['data-item-custom1-options'] = `${snipcart.sizes} + £${priceDifference}[+${priceDifference}]`;
  }

  if (snipcart.title) {
    buttonAttributes['data-item-custom2-name'] = 'Title';
    buttonAttributes['data-item-custom2-required'] = 'true';
  }

  if (snipcart.columns) {
    buttonAttributes['data-item-custom3-name'] = 'Column Names';
    buttonAttributes['data-item-custom3-required'] = 'true';
  }

  if (snipcart.name) {
    buttonAttributes['data-item-custom4-name'] = 'Name';
    buttonAttributes['data-item-custom4-required'] = 'true';
  }

  if (snipcart.personalisation) {
    buttonAttributes['data-item-custom5-name'] = 'Personalisation';
    buttonAttributes['data-item-custom5-required'] = 'true';
  }

  if (snipcart.addons) {
    buttonAttributes['data-item-custom6-name'] = 'Add-ons';
    buttonAttributes['data-item-custom6-options'] = snipcart.addons;
  }

  return (
    <button type="button" className={buttonStyles} {...buttonAttributes}>
      {children}
    </button>
  );
};
