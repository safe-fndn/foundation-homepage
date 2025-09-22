/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import { Metadata } from "next";
import client from "@/lib/contentful/contentfulClient";
import { TypePostSkeleton } from "@/lib/contentful/types/TypePost";
import BlogPost from "@/components/blog/Post";
import { Suspense } from "react";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const content = await client.getEntries<TypePostSkeleton>({
    content_type: "post",
    "fields.slug": slug,
  });

  const blogPost = content.items[0];

  if (
    !blogPost ||
    !blogPost.fields.metaTags ||
    !("fields" in blogPost.fields.metaTags)
  ) {
    return {
      title: "Blog Post - Safe",
      description: "Read the latest from Safe",
    };
  }

  const metaTags = blogPost.fields.metaTags.fields;
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
