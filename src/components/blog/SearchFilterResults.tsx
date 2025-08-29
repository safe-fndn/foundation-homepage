import { useEffect, useMemo, useState } from "react";
import Card from "@/components/blog/Card";
import type { PostEntryCollection } from "@/lib/contentful/types/types";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { getPage } from "@/lib/getPage";
import { useAllPosts } from "@/hooks/useAllPosts";
import { isPressReleasePost } from "@/lib/contentful/isPressRelease";
import { isDraft } from "@/lib/contentful/isDraft";
import { isSelectedCategory } from "@/lib/contentful/isSelectedCategory";
import usePostsSearch from "@/hooks/usePostsSearch";
import { scrollToElement } from "@/lib/scrollSmooth";
import SearchBar from "./SearchBar";
import Image from "next/image";
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

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

  const handleToggleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (params.get("category") === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-[60px] md:mt-[140px]">
        <div className="md:col-span-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            All posts
          </h2>
        </div>
        <div className="md:col-span-8">
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />

          <div className="mt-4">
            <span className="text-gray-500">Example: </span>
            {categories.map((category, idx, { length }) => (
              <span key={category}>
                <button onClick={() => handleToggleCategory(category)}>
                  {category}
                </button>
                {idx !== length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[40px]">
        <CategoryFilter categories={categories} />
      </div>

      {visibleResults.length > 0 ? (
        <>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-x-[30px] gap-y-[30px] mt-[60px]"
            id="results"
          >
            {visibleResults.map((post) => (
              <div key={post.fields.slug}>
                <Card {...post} />
              </div>
            ))}
          </div>

          {shouldShowMoreButton && <ShowMoreButton page={page} />}
        </>
      ) : (
        <NoResults query={searchQuery} />
      )}
    </>
  );
};

export default SearchFilterResults;

const NoResults = ({ query }: { query: string }) => (
  <div className="mt-[60px] text-center">
    <Image
      src="/images/common/search-icon.svg"
      alt="Search"
      width={20}
      height={20}
    />
    <h4 className="text-2xl font-bold my-4 text-[#1A1A1A]">
      No results found for {query || "selected filter"}
    </h4>
    <p className="text-gray-500">Try searching something else</p>
  </div>
);
