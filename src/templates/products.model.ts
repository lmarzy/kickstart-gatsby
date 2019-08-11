export interface SpecsInterface {
  material?: string;
  width?: string;
  height?: string;
  weight?: string;
}

export interface SnipCartInterface {
  title?: boolean;
  name?: boolean;
  personalisation?: boolean;
  columns?: boolean;
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
