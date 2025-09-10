import { useMemo } from "react";
import Link from "next/link";
import kebabCase from "lodash/kebabCase";
import {
  BLOCKS,
  type Document as ContentfulDocument,
  type Text,
} from "@contentful/rich-text-types";
import { isText } from "@/lib/contentful/typeGaurds";
import { scrollToElement } from "@/lib/scrollSmooth";

const ContentsTable = ({ content }: { content: ContentfulDocument }) => {
  const handleContentTableClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    scrollToElement(`#${target}`, 100);
  };

  const headings = useMemo(
    () =>
      content.content
        .filter(
          (item) =>
            item.nodeType === BLOCKS.HEADING_3 && isText(item.content[0])
        )
        .map((item) => ({
          id: (item.content[0] as Text).value,
          text: (item.content[0] as Text).value,
        })),
    [content]
  );

  if (!headings.length) return null;

  return (
    <div className="border-y border-[#1A1A1A1A] py-8">
      <p className="text-sm font-medium uppercase tracking-wide text-[#1A1A1A] mb-4">
        Table of contents
      </p>

      <ol className="space-y-2">
        {headings.map((heading, index) => {
          const headingKey = kebabCase(heading.id);

          return (
            <li key={headingKey} className="flex items-center text-base gap-2">
              <span className="text-[#1a1a1a66] min-w-[1.5rem]">
                {index + 1}.
              </span>
              <Link
                onClick={(e) => handleContentTableClick(e, headingKey)}
                href={`#${headingKey}`}
                className="text-base text-[#1a1a1a66]"
              >
                {heading.text}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ContentsTable;
