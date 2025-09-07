import { type Entry } from "contentful";
import type { TypePostSkeleton } from "@/lib/contentful/types";
import Card from "./Card";

const RELATED_POSTS_COUNT = 3;

const RelatedPosts = ({
  relatedPosts,
}: {
  relatedPosts: Entry<TypePostSkeleton, undefined, string>[] | undefined;
}) => {
  if (!relatedPosts || !relatedPosts.length) return null;

  return (
    <div className="pb-[120px]">
      <h3 className="text-[64px] text-[#1A1A1A] mb-10">Read more</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {relatedPosts.slice(0, RELATED_POSTS_COUNT).map((post) => (
          <div key={post.fields.slug} className="w-full">
            <Card {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
