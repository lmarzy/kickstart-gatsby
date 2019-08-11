import React from 'react';

import './banner.scss';

import bannerImage from '@assets/images/banner.jpg';

export const Banner = () => (
  <aside className="c-banners">
    <img src={bannerImage} alt="sup" className="c-banners__img" />
  </aside>
);
