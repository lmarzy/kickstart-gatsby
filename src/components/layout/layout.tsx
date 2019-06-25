import React, { FunctionComponent } from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';

import { Header, Footer } from '../';

import '@assets/styles/app.scss';

const MAIN_LAYOUT_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const MainLayout: FunctionComponent = ({ children }): JSX.Element => {
  const data = useStaticQuery(MAIN_LAYOUT_QUERY);

  return (
    <>
      <Header siteName={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
