export interface ProductsModel {
  node: {
    id: string;
    frontmatter: {
      title: string;
      latest: boolean;
      path: string;
      images: string[];
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
