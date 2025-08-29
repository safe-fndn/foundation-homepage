import { containsTag, PRESS_RELEASE_TAG } from "@/lib/contentful/containsTag";
import type { BlogPostEntry } from "@/lib/contentful/types/types";
import { isDraft } from "./isDraft";

export const isPressReleasePost = (post: BlogPostEntry) =>
  containsTag(post.fields.tags, PRESS_RELEASE_TAG);

export const isPublishedPressRelease = (post: BlogPostEntry) =>
  isPressReleasePost(post) && !isDraft(post);
