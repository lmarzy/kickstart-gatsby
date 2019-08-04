export interface ProductDetailsProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        path: string;
        image: string;
        images: string[];
        price: number;
        inStock: boolean;
        shortDesc: string;
      };
      html: string;
    };
  };
}
