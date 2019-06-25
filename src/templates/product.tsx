import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { MainLayout } from '@components';

interface ProductProps {
  data: any;
}

export default ({ data }: ProductProps) => {
  const post = data.markdownRemark;
  return (
    <MainLayout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </MainLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
