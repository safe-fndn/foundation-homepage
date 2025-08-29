import { PAGE_QUERY_PARAM } from "@/lib/getPage";
import NextLink from "next/link";

const ShowMoreButton = ({ page }: { page: number }) => (
  <div className="flex justify-center mt-[60px]">
    <NextLink
      href={{ query: { [PAGE_QUERY_PARAM]: page + 1 } }}
      shallow
      // Pagination marker for search engines
      rel="next"
    >
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
        Show more
      </button>
    </NextLink>
  </div>
);

export default ShowMoreButton;
