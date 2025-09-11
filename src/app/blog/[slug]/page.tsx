/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import client from "@/lib/contentful/contentfulClient";
import { TypePostSkeleton } from "@/lib/contentful/types/TypePost";
import BlogPost from "@/components/blog/Post";
import { Suspense } from "react";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const content = await client.getEntries<TypePostSkeleton>({
    content_type: "post",
    "fields.slug": slug,
  });

  const blogPost = content.items[0];

  if (!blogPost) {
    return notFound();
  }

  // Keep one level of relatedPosts to avoid circular references
  blogPost.fields.relatedPosts?.forEach((post: any) => {
    if (post?.fields) delete post.fields.relatedPosts;
  });

  return (
    <Suspense fallback={null}>
      <BlogPost blogPost={blogPost} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  const response = await client.getEntries<TypePostSkeleton>({
    content_type: "post",
    limit: 500,
  });

  return response.items.map((item) => ({
    slug: item.fields.slug,
  }));
}
