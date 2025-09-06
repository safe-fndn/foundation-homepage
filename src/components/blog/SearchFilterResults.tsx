import { useEffect, useMemo, useState } from "react";
import Card from "@/components/blog/Card";
import type { PostEntryCollection } from "@/lib/contentful/types/types";
import { useSearchParams } from "next/navigation";
import { getPage } from "@/lib/getPage";
import { useAllPosts } from "@/hooks/useAllPosts";
import { isPressReleasePost } from "@/lib/contentful/isPressRelease";
import { isDraft } from "@/lib/contentful/isDraft";
import { isSelectedCategory } from "@/lib/contentful/isSelectedCategory";
import usePostsSearch from "@/hooks/usePostsSearch";
import { scrollToElement } from "@/lib/scrollSmooth";
import SearchBar from "./SearchBar";
import CategoryFilter from "../CategoryFilter";
import ShowMoreButton from "../ShowMoreButton";

const PAGE_LENGTH = 6;

const SearchFilterResults = ({
  allPosts,
  categories,
}: {
  allPosts: PostEntryCollection;
  categories: string[];
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category");
  const page = getPage(searchParams);

  const { localAllPosts } = useAllPosts(allPosts);

  const filteredPosts = useMemo(() => {
    const visiblePosts = localAllPosts.items.filter(
      (post) => !isPressReleasePost(post) && !isDraft(post)
    );

    return selectedCategory
      ? visiblePosts.filter((post) =>
          isSelectedCategory(post, selectedCategory)
        )
      : visiblePosts;
  }, [localAllPosts, selectedCategory]);

  const searchResults = usePostsSearch(filteredPosts, searchQuery);
  const visibleResults = searchResults.slice(0, PAGE_LENGTH * page);
  const shouldShowMoreButton = visibleResults.length < searchResults.length;

  // Scroll to results when navigating to the page with a category query param
  useEffect(() => {
    if (searchParams.get("category")) scrollToElement("#results", 250);
  }, [searchParams]);

  return (
    <>
      <div className="text-[#1A1A1A] text-[64px]">All posts</div>

      <div className="flex flex-col md:flex-row gap-[32px] mt-10">
        <div className="h-fit w-full overflow-x-auto">
          <CategoryFilter categories={categories} />
        </div>

        <div className="max-w-[320px] w-full">
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />
        </div>
      </div>

      {visibleResults.length > 0 ? (
        <div className="mb-[108px]">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-x-[30px] gap-y-[30px] mt-[40px]"
            id="results"
          >
            {visibleResults.map((post) => (
              <div key={post.fields.slug}>
                <Card {...post} />
              </div>
            ))}
          </div>

          {shouldShowMoreButton && <ShowMoreButton page={page} />}
        </div>
      ) : (
        <NoResults query={searchQuery} />
      )}
    </>
  );
};

export default SearchFilterResults;

const NoResults = ({ query }: { query: string }) => (
  <div className="mt-[60px] pb-[108px] text-center">
    <h4 className="text-2xl font-bold my-4 text-[#1A1A1A]">
      No results found for {query || "selected filter"}
    </h4>
    <p className="text-gray-500">Try searching something else</p>
  </div>
);
