import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hywatches.com.au",
      lastModified: new Date(),
    },
    {
      url: "https://hywatches.com.au/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://hywatches.com.au/terms",
      lastModified: new Date(),
    },
  ];
}
