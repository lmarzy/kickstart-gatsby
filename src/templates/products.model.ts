export interface ProductDetailsProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        price: number;
        inStock: boolean;
        shortDesc: string;
      };
      html: string;
    };
  };
}
