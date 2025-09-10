import { calculateReadingTimeInMin } from "@/lib/calculateReadingTime";
import type { BlogPostEntry } from "@/lib/contentful/types/types";
import { formatBlogDate } from "@/lib/formatBlogDate";

const Meta = ({ post }: { post: BlogPostEntry }) => {
  const { category, date, content } = post.fields;

  return (
    <div className="flex items-center font-medium gap-2 text-sm text-[#A1A3A7]">
      <div className="text-[#1A1A1A]">*/{category}</div>

      <Dot />
      <div>{formatBlogDate(date)}</div>
      <Dot />

      <div>{calculateReadingTimeInMin(content)} min read</div>
    </div>
  );
};

const Dot = () => (
  <svg width="2" height="2" viewBox="0 0 2 2" fill="none">
    <circle cx="1" cy="1" r="1" fill="#A1A3A7" />
  </svg>
);

export default Meta;
