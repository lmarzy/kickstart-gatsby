export interface ImageSharp {
  childImageSharp: {
    fluid: any;
  };
}

export interface ProductsModel {
  node: {
    id: string;
    frontmatter: {
      title: string;
      latest: boolean;
      mainImage: ImageSharp;
      price: number;
    };
    fields: {
      slug: string;
    };
  };
}

export interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: ProductsModel[];
    };
  };
}
