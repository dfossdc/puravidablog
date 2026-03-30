// All posts for blog index
export const postsQuery = `
*[_type == "post" && language == $lang] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  publishedAt,
  language,
  mainImage,
  keywords,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
}`;

// Single post by slug
export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug && language == $lang][0] {
  _id,
  title,
  slug,
  description,
  publishedAt,
  language,
  mainImage,
  keywords,
  author->{ name, image },
  body
}`;

// All slugs for generateStaticParams
export const allPostSlugsQuery = `
*[_type == "post"] {
  "slug": slug.current,
  language
}`;
