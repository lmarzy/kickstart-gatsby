export interface SpecsInterface {
  material?: string;
  width?: string;
  height?: string;
  weight?: string;
}

export interface SnipCartInterface {
  title?: boolean;
  name?: false;
  columns?: false;
  addons?: boolean;
}

export interface ProductDetailsProps {
  data: {
    markdownRemark: {
      frontmatter: {
        id: number;
        title: string;
        category: string;
        path: string;
        image: string;
        images: string[];
        price: number;
        inStock: boolean;
        shortDesc: string;
        specs: SpecsInterface;
        snipcart: SnipCartInterface;
      };
      html: string;
    };
  };
}
