export interface SpecsModel {
  material?: string;
  width?: string;
  height?: string;
  weight?: string;
}

export interface SnipCartModel {
  title?: boolean;
  name?: boolean;
  personalisation?: boolean;
  columns?: boolean;
  addons?: boolean;
}

export interface ProductDetailsModel {
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
        specs: SpecsModel;
        snipcart: SnipCartModel;
      };
      html: string;
    };
  };
}
