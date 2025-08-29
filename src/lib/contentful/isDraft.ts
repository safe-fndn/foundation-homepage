import type { BlogPostEntry } from "@/lib/contentful/types/types";

export const isDraft = (post: BlogPostEntry) => post.fields.isDraft;
