import useSWR from "swr";
import type { BlogPostEntry } from "@/lib/contentful/types/types";
import { type TypePostSkeleton } from "@/lib/contentful/types";
import client from "@/lib/contentful/contentfulClient";

const postFetcher = (id: string) => client.getEntry<TypePostSkeleton>(id);

export const useBlogPost = (id: string, fallbackData: BlogPostEntry) =>
  useSWR(id, postFetcher, { fallbackData });
