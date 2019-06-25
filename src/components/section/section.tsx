import React, { FunctionComponent } from 'react';

import './section.scss';

interface SectionProps {
  heading: string;
}

export const Section: FunctionComponent<SectionProps> = ({ heading, children }) => (
  <section className="c-section">
    <h2 className="c-section__heading">{heading}</h2>
    {children}
  </section>
);
