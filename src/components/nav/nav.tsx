import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { siteNavItems } from './nav-items';
import './nav.scss';
import { Icon } from '@components';

interface NavProps {
  hidden: boolean;
  toggleHidden: any;
}

export const Nav: FunctionComponent<NavProps> = ({ hidden, toggleHidden }) => {
  const classes = `c-site-nav ${!hidden && 'c-site-nav--isActive'}`;
  return (
    <nav className={classes}>
      <button type="button" className="c-site-nav__close" onClick={() => toggleHidden(true)}>
        <Icon name="close" />
        <span className="u-hidden-visually">Close</span>
      </button>
      <ul className="c-site-nav__list">
        {siteNavItems.map(item => (
          <li className="c-site-nav__item" key={item.LinkName}>
            <Link to={item.LinkPath} className="c-site-nav__link">
              {item.LinkName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
