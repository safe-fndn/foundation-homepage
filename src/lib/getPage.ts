import { ReadonlyURLSearchParams } from "next/navigation";

export const PAGE_QUERY_PARAM = "page";

/**
 * Returns the page number from the searchParams object of Next.js navigation.
 * If the page number is not found or invalid, it returns 1 as default.
 * @param {ReadonlyURLSearchParams} searchParams - The searchParams object from Next.js navigation
 * @returns {number} The page number extracted from the searchParams
 */
export const getPage = (searchParams: ReadonlyURLSearchParams): number => {
  const page = searchParams.get(PAGE_QUERY_PARAM);
  return Number(page) || 1;
};
