import { ImageSharp } from 'pages/index.model';

export interface ProductModel {
  node: {
    id: string;
    frontmatter: {
      title: string;
      category: string;
      subCategory: string;
      mainImage: ImageSharp;
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
