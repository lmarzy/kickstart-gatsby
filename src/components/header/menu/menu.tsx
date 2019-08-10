import React, { FunctionComponent } from 'react';

import { Icon } from '@components';
import './menu.scss';

interface MenuProps {
  toggleHidden: any;
}

export const Menu: FunctionComponent<MenuProps> = ({ toggleHidden }) => (
  <ul className="c-site-header__menu c-site-menu">
    <li className="c-site-menu__item">
      <button type="button" className="c-site-menu__button snipcart-checkout">
        <Icon name="shopping" />
        <span>Basket</span>
        <span className="u-hidden-visually">Total Number of items</span>
        <span className="snipcart-summary">
          <span className="u-hidden-visually">Number of items:</span>
          <span className="snipcart-total-items" />
        </span>
      </button>
    </li>
    <li className="c-site-menu__item">
      <button type="button" className="c-site-menu__button" onClick={() => toggleHidden(false)}>
        <Icon name="menu" />
        <span>Menu</span>
      </button>
    </li>
  </ul>
);
