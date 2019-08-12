export interface ImageSharp {
  childImageSharp: {
    fluid: any;
  };
}

export interface ProductModel {
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

export interface ProductsModel {
  data: {
    allMarkdownRemark: {
      edges: ProductModel[];
    };
  };
}
