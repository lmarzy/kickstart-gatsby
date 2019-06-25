import React from 'react';

import { FooterLinks } from './footer-links/footer-links';
import { SocialLinks } from './social-links/social-links';

import './footer.scss';

const date = new Date();
const year = date.getFullYear();

export const Footer = () => (
  <footer className="c-site-footer">
    <FooterLinks />
    <SocialLinks />
    <small className="c-site-footer__copyright">&copy; {year}, Beesspoked</small>
  </footer>
);
