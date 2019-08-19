import React from 'react';

import './footer-links.scss';

const links = [
  {
    url: '/about',
    text: 'About Us',
  },
  {
    url: '/policies/terms',
    text: 'Terms & Conditions',
  },
  {
    url: '/policies/privacy',
    text: 'Privacy Policy',
  },
  {
    url: '/policies/delivery',
    text: 'Delivery',
  },
  {
    url: '/contact',
    text: 'Contact Us',
  },
];

export const FooterLinks = () => (
  <ul className="c-site-footer__links c-footer-links">
    {links.map(link => (
      <li key={link.url} className="c-footer-links__item">
        <a href={link.url} className="c-footer-links__link">
          {link.text}
        </a>
      </li>
    ))}
  </ul>
);
