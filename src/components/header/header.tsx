import React, { FunctionComponent, useState } from 'react';

import { Nav } from '../';
import { Menu } from './menu/menu';

import Logo from '@assets/images/logo.svg';
import './header.scss';

interface HeaderProps {
  siteName: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ siteName }) => {
  const [navHhidden, toggleNavVisibility] = useState(true);

  return (
    <header className="c-site-header">
      <div className="c-site-header__top">
        <h1 className="c-site-header__logo">
          <img src={Logo} alt="Beespoked Logo" />
          <span className="u-hidden-visually">{siteName}</span>
        </h1>

        <Menu toggleHidden={toggleNavVisibility} />
      </div>

      <Nav hidden={navHhidden} toggleHidden={toggleNavVisibility} />
    </header>
  );
};
