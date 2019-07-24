export interface ProductCategoriesModel {
  node: {
    id: string;
    frontmatter: {
      category: string;
    };
  };
}

export interface ProductCategoryPageProps {
  data: {
    allMarkdownRemark: {
      edges: ProductCategoriesModel[];
    };
  };
}
