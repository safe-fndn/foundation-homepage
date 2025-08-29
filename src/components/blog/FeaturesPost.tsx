import Image from "next/image";
import type { BlogPostEntry } from "@/lib/contentful/types/types";
import { isAsset } from "@/lib/contentful/typeGaurds";
import Link from "next/link";
import Tags from "./Tags";
import { containsTag, PRESS_RELEASE_TAG } from "@/lib/contentful/containsTag";
import Meta from "./Meta";

const FeaturedPost = ({ post }: { post: BlogPostEntry }) => {
  const { slug, coverImage, title, excerpt, tags } = post.fields;

  const isPressRelease = containsTag(tags, PRESS_RELEASE_TAG);

  return (
    <div>
      {/* NOTE: check styling for this with design */}
      {isPressRelease && <div>Latest Press Release</div>}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px]">
        <div className="lg:col-span-7">
          {isAsset(coverImage) && coverImage.fields.file?.url ? (
            <Link href={`/blog/${slug}`}>
              <Image
                src={coverImage.fields.file.url}
                alt={coverImage.fields.title ?? ""}
                width={coverImage.fields.file.details.image?.width}
                height={coverImage.fields.file.details.image?.height}
                className="w-full h-auto rounded-lg"
              />
            </Link>
          ) : undefined}
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <Meta post={post} />

          <div className="text-[40px] mt-4 mb-2 leading-[46px]">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </div>

          <p className="text-[#1A1A1A] text-base font-light">{excerpt}</p>

          <div className="mt-auto">
            <Tags tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
