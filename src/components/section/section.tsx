import React, { FunctionComponent } from 'react';

import './section.scss';

interface SectionProps {
  heading: string;
  highlight?: boolean;
  mb?: boolean;
}

export const Section: FunctionComponent<SectionProps> = ({ heading, highlight, mb, children }) => {
  let sectionStyles = 'c-section';

  if (highlight) {
    sectionStyles += ' c-section--highlight';
  }

  return (
    <section className={sectionStyles}>
      <h2 className="c-section__heading">{heading}</h2>
      {children}
    </section>
  );
};
