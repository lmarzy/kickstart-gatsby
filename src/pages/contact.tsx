import React from 'react';

import { MainLayout, ContactForm, Section } from '@components';

export default (): JSX.Element => (
  <MainLayout pageTitle="Contact Beespoked">
    <Section heading="Contact Beespoked">
      <p className="u-mb-4">
        We love to hear form our customers, if you would like to find out an answer to a question you may have or just want to say hi, send
        us a message. We'll get back to you in no time!
      </p>
      <ContactForm />
    </Section>
  </MainLayout>
);
