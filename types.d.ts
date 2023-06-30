export interface Watch {
  _id: string;
  _type: string;
}
export interface BrandType {
  _id: string;
  brands?: string;
  subTitle?: string;
  description?: string;
  slug?: {
    current?: string;
    _type?: string;
  };
  image?: string;
  watches?: {
    _id: string;
    category?: {
      _id: string;
      categories?: string;
    };
    slug?: {
      current?: string;
      _type?: string;
    };
    modelName?: string;
    modelNumber?: string;
    year?: number;
    boxAndPapers?: boolean;
    gender?: string;
    movement?: string;
    case?: string;
    bezel?: string;
    coverImage?: string;
    brand?: {
      _id: string;
      brands?: string;
    };
  }[];
}
