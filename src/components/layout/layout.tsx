import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// @ts-ignore
import { Helmet } from 'react-helmet';

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

interface MainLayoutProps {
  pageTitle: string;
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({ pageTitle, children }): JSX.Element => {
  const data = useStaticQuery(MAIN_LAYOUT_QUERY);

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{`Beespoked - ${pageTitle}`}</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          id="snipcart"
          data-api-key="ZjkxN2U1NjItNTFlMi00YmJhLTk2NWUtMjIwZTJmZGZiYjkxNjM3MDA4ODkzMzUwNTYxMTMz"
        />
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
      </Helmet>
      <Header siteName={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
