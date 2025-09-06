"use client";

import type { TypeBlogHomeSkeleton } from "@/lib/contentful/types";
import { isEntryTypePost } from "@/lib/contentful/typeGaurds";
import type {
  BlogHomeEntry,
  PostEntryCollection,
} from "@/lib/contentful/types/types";
import { useClientEntry } from "@/hooks/useClientEntry";
import FeaturedPost from "./FeaturesPost";
import Card from "./Card";
import SearchFilterResults from "./SearchFilterResults";

const categories = [
  "Announcements",
  "Ecosystem",
  "Community",
  "Insights",
  "Safe Research",
];

const TRENDING_POSTS_COUNT = 3;

export type BlogHomeProps = {
  blogHome: BlogHomeEntry;
  allPosts: PostEntryCollection;
};

const BlogHome = ({ blogHome, allPosts }: BlogHomeProps) => {
  const { data: localBlogHome } = useClientEntry<
    TypeBlogHomeSkeleton,
    BlogHomeEntry
  >(blogHome.sys.id, blogHome);

  // NOTE: handle meta tags like in safe.global
  const { featured, mostPopular } = localBlogHome.fields;

  return (
    <div>
      <div className="px-4 pt-[72px] flex flex-col md:flex-row justify-between item-start md:items-end max-w-[1242px] mx-auto">
        <div className="text-[#1A1A1A] text-[64px]">Blog</div>
        <div className="text-black/[0.6] text-xl font-light max-w-[469px]">
          Read the latest from Safe including new releases, use cases and
          community updates
        </div>
      </div>
      <div className="mt-8 bg-[#1a1a1a66] w-full h-px max-w-[1242px] mx-auto mb-[80px]"></div>
      {isEntryTypePost(featured) && (
        <div className="max-w-[1242px] mx-auto px-4">
          <FeaturedPost post={featured} />
        </div>
      )}
      <div className="max-w-[1242px] mx-auto pt-[108px] px-4">
        <div className="text-[#1A1A1A] text-[64px]">Trending</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[30px] gap-y-[30px] mt-[40px]">
          {mostPopular
            .filter(isEntryTypePost)
            .slice(0, TRENDING_POSTS_COUNT)
            .map((post) => (
              <div key={post.fields.slug}>
                <Card {...post} />
              </div>
            ))}
        </div>
      </div>
      <div className="max-w-[1242px] mx-auto pt-[108px] px-4">
        <SearchFilterResults allPosts={allPosts} categories={categories} />
      </div>
    </div>
  );
};

export default BlogHome;
