import React from 'react';

import './banners.scss';

import bannerImageA from '@assets/images/banners/a.jpg';
import bannerImageB from '@assets/images/banners/b.jpg';
import bannerImageC from '@assets/images/banners/c.jpg';

export const Banners = () => (
  <aside className="c-banners">
    <div className="c-banners__a">
      <img src={bannerImageA} alt="sup" className="c-banners__img" />
    </div>
    <div className="c-banners__bcwrap">
      <div className="c-banners__b">
        <img src={bannerImageB} alt="sup" className="c-banners__img" />
      </div>
      <div className="c-banners__c">
        <img src={bannerImageC} alt="sup" className="c-banners__img" />
      </div>
    </div>
  </aside>
);
