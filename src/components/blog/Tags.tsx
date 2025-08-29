import type { UnresolvedLink, Entry } from "contentful";
import { type TypeTagSkeleton } from "@/lib/contentful/types";
import { isEntryTypeTag } from "@/lib/contentful/typeGaurds";

export type TagsType =
  | (UnresolvedLink<"Entry"> | Entry<TypeTagSkeleton, undefined, string>)[]
  | undefined;

const Tags = ({ tags }: { tags: TagsType }) => {
  if (!tags || !tags.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.filter(isEntryTypeTag).map((tag) => {
        const { name } = tag.fields;

        return (
          <div
            key={name}
            className="px-3 py-1 text-sm border border-[#1A1A1A] text-[#1A1A1A] rounded-full"
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
