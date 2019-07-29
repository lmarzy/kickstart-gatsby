export interface ProductModel {
  node: {
    id: string;
    frontmatter: {
      title: string;
      category: string;
      subCategory: string;
      latest: boolean;
      path: string;
      image: string;
      price: number;
    };
    fields: {
      slug: string;
    };
    excerpt: string;
  };
}

export interface ProductsProps {
  data: {
    allMarkdownRemark: {
      edges: ProductModel[];
    };
  };
}
