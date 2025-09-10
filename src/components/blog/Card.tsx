import Image from "next/image";
import Link from "next/link";
import { isAsset } from "@/lib/contentful/typeGaurds";
import type { BlogPostEntry } from "@/lib/contentful/types/types";
import Tags from "./Tags";
import Meta from "./Meta";

const Card = (props: BlogPostEntry) => {
  const { slug, title, coverImage, tags } = props.fields;

  return (
    <div className="relative flex flex-col h-full overflow-hidden rounded-lg border border-[#1a1a1a1a]">
      <Link
        key={slug}
        href={`blog/${slug}`}
        className="absolute inset-0 z-10"
      />

      {isAsset(coverImage) && coverImage.fields.file?.url ? (
        <Image
          src={coverImage.fields.file.url}
          alt={coverImage.fields.title ?? ""}
          width={coverImage.fields.file.details.image?.width}
          height={coverImage.fields.file.details.image?.height}
          className="w-full h-[200px] object-cover object-left"
        />
      ) : undefined}

      <div className="flex flex-col grow-1 gap-4 p-6">
        <Meta post={props} />

        <div className="text-2xl text-[#1A1A1A] leading-[32px] tracking-[0.26px]">
          {title}
        </div>

        <div className="mt-auto">
          <Tags tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default Card;
