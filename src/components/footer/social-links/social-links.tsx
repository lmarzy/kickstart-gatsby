import React from 'react';

import { Icon } from '@components/icon/icon';
import './social-links.scss';

const sociallinks = [
  {
    url: '/facebook',
    name: 'Facebook',
    icon: 'facebook',
  },
  {
    url: '/instagram',
    name: 'Instagram',
    icon: 'instagram',
  },
  {
    url: '/pinterest',
    name: 'Pinterest',
    icon: 'pinterest',
  },
];

export const SocialLinks = () => (
  <ul className="c-site-footer__social-links c-social-links">
    {sociallinks.map(link => (
      <li key={link.name} className="c-social-links__item">
        <a href={link.url} className="c-social-links__link">
          <span className="u-hidden-visually">{link.name}</span>
          <Icon name={link.icon} />
        </a>
      </li>
    ))}
  </ul>
);
