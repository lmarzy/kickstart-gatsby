import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Header, Footer } from '@sections/index';

import '@assets/styles/app.scss';

export const SITE_DATA_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export interface SiteDataModel {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

interface MainLayoutProps {
  pageTitle: string;
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({ pageTitle, children }): JSX.Element => {
  const data = useStaticQuery<SiteDataModel>(SITE_DATA_QUERY);

  const { title } = data.site.siteMetadata;

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{`${title} - ${pageTitle}`}</title>
      </Helmet>
      <Header siteName={title} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
