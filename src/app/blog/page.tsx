/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TypePostSkeleton } from "../../lib/contentful/types/TypePost";
import { TypeBlogHomeSkeleton } from "../../lib/contentful/types/TypeBlockHome";
import { isEntryTypePost } from "@/lib/contentful/typeGaurds";
import client from "@/lib/contentful/contentfulClient";
import BlogHome from "@/components/blog/BlogHome";
import { notFound } from "next/navigation";

export default async function Blog() {
  const allPosts = await client.getEntries<TypePostSkeleton>({
    content_type: "post",
    // order by date, most recent first
    order: ["-fields.date"],
    limit: 500,
  });

  const blogHomeEntries = await client.getEntries<TypeBlogHomeSkeleton>({
    content_type: "blogHome",
    include: 3,
  });

  const blogHome = blogHomeEntries.items[0];

  if (!blogHome || !allPosts) {
    return notFound();
  }

  // relatedPosts are not displayed on the blog home page
  if (isEntryTypePost(blogHome.fields.featured)) {
    delete blogHome.fields.featured.fields.relatedPosts;
  }
  blogHome.fields.mostPopular.forEach(
    (item: any) => delete item.fields.relatedPosts
  );
  allPosts.items.forEach((item: any) => delete item.fields.relatedPosts);

  return <BlogHome blogHome={blogHome} allPosts={allPosts} />;
}
