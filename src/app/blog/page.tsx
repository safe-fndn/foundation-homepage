/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import { Metadata } from "next";
import { TypePostSkeleton } from "../../lib/contentful/types/TypePost";
import { TypeBlogHomeSkeleton } from "../../lib/contentful/types/TypeBlockHome";
import { isEntryTypePost } from "@/lib/contentful/typeGaurds";
import client from "@/lib/contentful/contentfulClient";
import BlogHome from "@/components/blog/BlogHome";
import { notFound } from "next/navigation";

function serializeEntry(entry: any) {
  return JSON.parse(JSON.stringify(entry));
}

export async function generateMetadata(): Promise<Metadata> {
  const blogHomeEntries = await client.getEntries<TypeBlogHomeSkeleton>({
    content_type: "blogHome",
    include: 3,
  });

  const blogHome = blogHomeEntries.items[0];

  if (
    !blogHome ||
    !blogHome.fields.metaTags ||
    !("fields" in blogHome.fields.metaTags)
  ) {
    return {
      title: "Blog - Safe",
      description: "Latest news and updates from Safe",
    };
  }

  const metaTags = blogHome.fields.metaTags.fields;
  const imageUrl =
    metaTags.image && "fields" in metaTags.image
      ? `https:${metaTags.image.fields.file?.url}`
      : `${process.env.NEXT_PUBLIC_PROD_URL}/images/og.jpg`;

  return {
    title: metaTags.title,
    description: metaTags.description,
    openGraph: {
      title: metaTags.title,
      description: metaTags.description,
      images: [
        {
          url: imageUrl,
          alt: metaTags.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTags.title,
      description: metaTags.description,
      images: [imageUrl],
    },
  };
}

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

  blogHome.fields.mostPopular.forEach((item: any) => {
    if (item?.fields) delete item.fields.relatedPosts;
  });
  allPosts.items.forEach((item: any) => {
    if (item?.fields) delete item.fields.relatedPosts;
  });

  // Serialize the data to plain objects before passing to client component
  const serializedBlogHome = serializeEntry(blogHome);
  const serializedAllPosts = serializeEntry(allPosts);

  return (
    <Suspense fallback={null}>
      <BlogHome blogHome={serializedBlogHome} allPosts={serializedAllPosts} />
    </Suspense>
  );
}
