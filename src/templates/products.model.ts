export interface SpecsInterface {
  width?: string;
  height?: string;
  weight?: string;
}

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
        specs: SpecsInterface;
      };
      html: string;
    };
  };
}
