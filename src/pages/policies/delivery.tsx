import React from 'react';

import { MainLayout, Section } from '@components';

export default () => (
  <MainLayout pageTitle="Delivery">
    <Section heading="Delivery & Dispatch">
      <p className="u-mb-3">We currently send all of our items 2nd class with Royal Mail.</p>

      <p className="u-mb-3">
        Whilst there is no guarantees, Royal mail aim to deliver your item in two to three working days, including Saturdays.
      </p>

      <p className="u-mb-3">
        Should your item not arrive, we ask that you allow 10 working days from the date of despatch. At this point we can either offer a
        full refund or a replacement item.
      </p>

      <p className="u-mb-3">
        If your item arrives damaged, please take as many photographs as possible of the outer packaging, damaged item and anything else you
        deem applicable. Please e mail us with these photographs within 5 days of receiving your item. Without photographic evidence of the
        outer packaging or damaged item we are unable to open a damaged item claim.
      </p>

      <p className="u-mb-3">
        Despatch times are kept to a minimum. We aim to despatch within 5 working days or sooner. Sometimes we may be waiting for stock. If
        we have any problems despatching an item within this time frame we will contact you asap. You will be entitled to cancel the order
        is the despatch time is unacceptable.
      </p>
    </Section>
  </MainLayout>
);
