export const brandFields = `
  _id,
  brands,
  subTitle,
  description,
  slug,
  image,
  watches[]->{
    _id,
    category->{
        _id,
        categories
    },
    slug,
    modelName,
    modelNumber,
    year,
    boxAndPapers,
    gender,
    movement,
    case,
    bezel,
    coverImage,
    brand->{
        _id,
        brands
    },
  }
`;