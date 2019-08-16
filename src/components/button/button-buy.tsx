import React, { FunctionComponent } from 'react';

import { SnipCartModel } from '@models/product.model';

import './buton.scss';

interface ButtonProps {
  id: number;
  style: string;
  width?: 'full';
  price: number;
  image: string;
  title: string;
  category: string;
  shortDesc: string;
  path: string;
  snipcart: SnipCartModel;
}

export const ButtonBuy: FunctionComponent<ButtonProps> = ({
  id,
  style,
  width,
  price,
  image,
  title,
  category,
  shortDesc,
  path,
  children,
  snipcart,
}) => {
  let buttonStyles = `c-button c-button--${style} snipcart-add-item buyBtn`;
  const img = require(`../../products/${path}/images/${image}.jpg`);

  if (width) {
    buttonStyles += ` c-button--${width}`;
  }

  const buttonAttributes = {
    'data-item-id': id,
    'data-item-price': price,
    'data-item-image': img,
    'data-item-name': title,
    'data-item-description': shortDesc,
    'data-item-url': `http://beespoked.co.uk/products/${path}`,
  } as { [key: string]: string | number };

  if (snipcart.title) {
    buttonAttributes['data-item-custom1-name'] = 'Title';
    buttonAttributes['data-item-custom1-required'] = 'true';
  }

  if (snipcart.columns) {
    buttonAttributes['data-item-custom2-name'] = 'Column Names';
    buttonAttributes['data-item-custom2-required'] = 'true';
  }

  if (snipcart.name) {
    buttonAttributes['data-item-custom3-name'] = 'Name';
    buttonAttributes['data-item-custom3-required'] = 'true';
  }

  if (snipcart.personalisation) {
    buttonAttributes['data-item-custom4-name'] = 'Personalisation';
    buttonAttributes['data-item-custom4-required'] = 'true';
  }

  if (snipcart.addons) {
    buttonAttributes['data-item-custom5-name'] = 'Add-ons';
    buttonAttributes['data-item-custom5-options'] = `${
      category === 'whiteboards' ? 'Whiteboard Only' : 'Notepad Only'
    }|Magnets + £2.00[+2.00]|Command Strips + £2.00[+2.00]`;
  }

  return (
    <button type="button" className={buttonStyles} {...buttonAttributes}>
      {children}
    </button>
  );
};
