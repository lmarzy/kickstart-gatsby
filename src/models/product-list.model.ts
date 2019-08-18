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
      category: string;
      subCategory: string;
      latest: boolean;
      mainImage: ImageSharp;
      prices: number[];
    };
    fields: {
      slug: string;
    };
    excerpt: string;
  };
}

export interface ProductsModel {
  data: {
    allMarkdownRemark: {
      edges: ProductModel[];
    };
  };
}
