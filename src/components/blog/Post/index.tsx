"use client";

import { type Entry } from "contentful";
import type { TypeAuthorSkeleton } from "@/lib/contentful/types";
import {
  isAsset,
  isEntryTypeAuthor,
  isEntryTypePost,
} from "@/lib/contentful/typeGaurds";
import BreadcrumbsNav from "@/components/blog/Post/BreadcrumbsNav";
import { type Document as ContentfulDocument } from "@contentful/rich-text-types";
import { PRESS_RELEASE_TAG, containsTag } from "@/lib/contentful/containsTag";
import type { BlogPostEntry } from "@/lib/contentful/types/types";
import { formatAuthorsList } from "@/lib/formatAuthorsList";
import Meta from "../Meta";
import { COMMS_EMAIL } from "@/constants";
import { useBlogPost } from "@/hooks/useBlogPosts";
import Tags from "../Tags";
import Authors from "./Authors";
import Image from "next/image";
import ContentsTable from "./ContentsTable";
import { cn } from "@/lib/utils";
import Socials from "./Socials";
import RichText from "./RichText";
import RelatedPosts from "../RelatedPosts";
import Button from "@/components/ui/Button";

export type BlogPostProps = {
  blogPost: BlogPostEntry;
};

const BlogPost = ({ blogPost }: BlogPostProps) => {
  const { data: post } = useBlogPost(blogPost.sys.id, blogPost);

  const {
    title,
    excerpt,
    content,
    coverImage,
    authors,
    tags,
    category,
    relatedPosts,
  } = post.fields;

  const authorsList = authors.filter(isEntryTypeAuthor);
  const relatedPostsList = relatedPosts?.filter(isEntryTypePost);

  const isPressRelease = containsTag(tags, PRESS_RELEASE_TAG);

  return (
    <div className="pt-[58px] max-w-[1242px] mx-auto px-4">
      <BreadcrumbsNav category={category} title={title} />

      <div className="my-6 break-words md:break-normal text-[36px] md:text-[64px] text-[#1A1A1A] leading-[120%]">
        {title}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <Authors authors={authorsList} />

          <div>
            <p className="text-[15px] text-[#1A1A1A] mb-1">
              {formatAuthorsList(authorsList)}
            </p>

            <Meta post={post} />
          </div>
        </div>

        <Tags tags={tags} />
      </div>

      {isAsset(coverImage) && coverImage.fields.file?.url && (
        <Image
          src={coverImage.fields.file.url}
          alt={coverImage.fields.title ?? ""}
          width={1242}
          height={700}
          className="w-full max-w-none rounded-2xl"
        />
      )}

      <div className="pt-10" style={{ scrollSnapType: "y mandatory" }}>
        <div className="flex flex-col justify-evenly md:flex-row gap-10">
          <Sidebar
            content={content}
            title={title}
            authors={authorsList}
            isPressRelease={isPressRelease}
          />

          <div className="w-full max-w-full md:max-w-[669px]">
            <div className="max-w-none pb-[120px]">
              <div className="text-xl md:text-2xl mb-10 md:mb-14">
                {excerpt}
              </div>

              <RichText {...content} />

              <hr className="my-14 border-gray-200" />

              <SharingLinks title={title} authors={authorsList} />
            </div>
          </div>
        </div>
      </div>

      <RelatedPosts relatedPosts={relatedPostsList} />
    </div>
  );
};

export default BlogPost;

const Sidebar = ({
  content,
  title,
  authors,
  isPressRelease,
}: {
  content: ContentfulDocument;
  title: string;
  authors: Entry<TypeAuthorSkeleton, undefined, string>[];
  isPressRelease?: boolean;
}) => (
  <div className={cn("w-full md:max-w-[240px] max-w-full")}>
    <aside className="">
      <ContentsTable content={content} />

      <div className="hidden md:block mt-8">
        <SharingLinks title={title} authors={authors} />
      </div>

      {isPressRelease && (
        <div className="mt-8 p-6 flex flex-col gap-4 border border-gray-200 rounded-md">
          <p>Do you have any questions?</p>

          <a
            href={`mailto:${COMMS_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">Press inquiry</Button>
          </a>
        </div>
      )}
    </aside>
  </div>
);

const SharingLinks = ({
  title,
  authors,
}: {
  title: string;
  authors: Entry<TypeAuthorSkeleton, undefined, string>[];
}) => (
  <div className="space-y-3">
    <p className="text-sm uppercase font-medium tracking-wide text-[#1A1A1A]">
      Share this
    </p>

    <Socials title={title} authors={authors} />
  </div>
);
