import { brandFields } from "../constants/queries";
export const fetchWatchesByBrandSlugQuery = (slug: string | string[]) => {
  const query = `*[_type == "brands" && slug.current == "${slug}"] | order(_createdAt desc){
      ${brandFields}
    }`;
  return query;
};