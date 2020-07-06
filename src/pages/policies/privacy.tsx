import React from 'react';

import { MainLayout } from '@layouts/index';
import { graphql, useStaticQuery } from 'gatsby';

export const SITE_DATA_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
        webAddress
        address
        email
        phone
      }
    }
  }
`;

export interface SiteDataModel {
  site: {
    siteMetadata: {
      title: string;
      webAddress: string;
      address: string;
      email: string;
      phone: string;
    };
  };
}

export default (): JSX.Element => {
  const data = useStaticQuery<SiteDataModel>(SITE_DATA_QUERY);

  const { title, webAddress, address, email, phone } = data.site.siteMetadata;

  return (
    <MainLayout pageTitle="Privacy Policy">
      <h2 className="u-mb-3">GDPR Compliant Privacy Statement</h2>
      <h3 className="u-mb-2">1. Who we are</h3>
      <p className="u-mb-3">When we refer to “we”, “us” and “our” in this notice it means {title}.</p>
      <p className="u-mb-3">
        When we say, “individuals” in this notice, we mean anyone whose personal information we may collect, including:
      </p>
      <ul className="u-bullets u-mb-3">
        <li>any customer placing an order.</li>
        <li>any customer who requires their product to be delivered to them</li>
        <li>any customer who provides their contact information and agrees to further contact from us</li>
      </ul>
      <h3 className="u-mb-2">2. How we use personal information</h3>
      <p className="u-mb-3">We use personal information in the following ways:</p>
      <ul className="u-bullets u-mb2">
        <li>to provide designs and/or arrange delivery of products.</li>
      </ul>
      <p className="u-mb-3">
        There is no obligation to provide us with personal information, but we cannot provide our products and services without it. Anyone
      </p>
      <p className="u-mb-3">
        whose personal information we hold has the right to object to us using it. They can do this at any time by telling us and we will
      </p>
      <p className="u-mb-3">
        consider the request and either stop using their personal information or explain why we are not able to. Further details can be
        found below.
      </p>
      <h3 className="u-mb-2">3. The personal information we collect</h3>
      <p className="u-mb2">
        We collect the following types of personal information so we can complete the activities in section 2, “How we use personal
        information”:
      </p>
      <ul className="u-bullets u-mb-3">
        <li>basic personal details such as name and address.</li>
        <li>any personal information the customer requires to be included in their design.</li>
        <li>
          photographs where the customer has requested these being added to a product or provided consent for them to be used in marketing
          activities.
        </li>
        <li>business activities such as goods and services offered.</li>
      </ul>
      <h3 className="u-mb-2">4. Where we collect personal information</h3>
      <p className="u-mb-3">
        Direct from individuals, their representatives or information they have made public, for example, on social media.
      </p>
      <p className="u-mb-3">From other persons or organisations, for example:</p>
      <ul className="u-bullets u-mb-3">
        <li>Etsy where a customer has placed an order</li>
        <li>{webAddress} where a customer has placed an order.</li>
        <li>Facebook where an order or quotation has taken place</li>
        <li>Instagram where an order or quotation has taken place</li>
      </ul>
      <h3 className="u-mb-2">6. Sharing personal information</h3>
      <p className="u-mb-3">We may share personal information with:</p>
      <ul className="u-bullets u-mb-3">
        <li>Royal Mail or other delivery company where product is to be delivered</li>
      </ul>
      <h3 className="u-mb-2">7. How long we keep personal information</h3>
      <p className="u-mb-3">
        We keep information only for as long as we need it to administer the sale or as required by law or contract. HMRC requires we keep
        details of past orders for 6 years, at this point all order information will be deleted if held electronically or shredded if held
        manually.
      </p>
      <h3 className="u-mb-2">8. Know your rights</h3>
      <p className="u-mb-3">Any individual whose personal information we hold has the right to:</p>
      <ul className="u-bullets u-mb-3">
        <li>object to us processing it. We will either agree to stop processing or explain why we are unable to (the right to object)</li>
        <li>ask for a copy of their personal information we hold, subject to certain exemptions (a data subject access request)</li>
        <li>ask us to update or correct their personal information to ensure its accuracy (the right of rectification)</li>
        <li>
          ask us to delete their personal information from our records if it is no longer needed for the original purpose (the right to be
          forgotten)
        </li>
        <li>ask us to restrict the processing of their personal information in certain circumstances (the right of restriction)</li>
        <li>ask for a copy of their personal information, so it can be used for their own purposes (the right to data portability)</li>
        <li>
          complain if they feel their personal information has been mishandled. We encourage individuals to come to us in the first instance
          but they are entitled to complain directly to the Information Commissioner’s Office (ICO) www.ico.org.uk
        </li>
        <li>
          ask us, at any time, to stop processing their personal information, if the processing is based only on individual consent (the
          right to withdraw consent).
        </li>
      </ul>
      <p className="u-mb-3">If you wish to exercise any of these rights please contact us at:</p>
      <p className="u-mb-3">
        {title}, {address}
      </p>
      <dl className="u-mb-3">
        <dt>Email:</dt>
        <dd>
          {email} Phone: {phone} (answer phone - the quickest way to contact us by email for a more immediate response).
        </dd>
      </dl>

      <h3 className="u-mb-2">9. Changes to our Fair Processing Notice</h3>
      <p className="u-mb-3">
        Occasionally it may be necessary to make changes to this fair processing notice. When that happens we will provide an updated
        version at the earliest opportunity.
      </p>

      <h3 className="u-mb-2">10. Cookie policy</h3>
      <p>
        When we provide services, we want to make them as easy and useful for you as possible. Where services are delivered on the internet,
        this will sometimes involves placing small amounts of information on your device (computer or mobile phone). These include small
        text files known as cookies. They cannot be used to identify you personally, cannot carry viruses, or install malware. We use
        cookies to help us improve users experience on this website and also for the site to determine what device you are viewing the site
        on in order for the correct most appropriate version to be shown.
      </p>
    </MainLayout>
  );
};
