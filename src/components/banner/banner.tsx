import React from 'react';

import './banner.scss';

import bannerImage from '@assets/images/banner.jpg';

export const Banner = () => (
  <aside className="c-banner">
    {/* <img src={bannerImage} alt="sup" className="c-banners__img" /> */}
    <div>
      <h2 className="c-banner__title">Personalised</h2>
      <p className="c-banner__info">Whiteboards, Notepads, Signs and Gifts</p>
    </div>
  </aside>
);
