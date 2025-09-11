import type { Entry } from "contentful";
import type { TypeAuthorSkeleton } from "@/lib/contentful/types";
import { isAsset } from "@/lib/contentful/typeGaurds";
import Image from "next/image";

export type AuthorsProps = Entry<TypeAuthorSkeleton, undefined, string>[];

const Authors = ({ authors }: { authors: AuthorsProps }) => {
  const visibleAuthors = authors.slice(0, 3);
  const remainingCount = authors.length > 3 ? authors.length - 3 : 0;

  return (
    <div className="flex -space-x-2">
      {visibleAuthors.map((author, index) => {
        const { name, picture } = author.fields;

        return isAsset(picture) && picture.fields.file?.url ? (
          <div
            key={name}
            className="relative w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden"
            style={{ zIndex: visibleAuthors.length - index }}
          >
            <Image
              src={picture.fields.file.url}
              alt={picture.fields.title || name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        ) : (
          <div
            key={name}
            className="relative w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-white font-medium text-sm"
            style={{ zIndex: visibleAuthors.length - index }}
          >
            {name.charAt(0).toUpperCase()}
          </div>
        );
      })}

      {remainingCount > 0 && (
        <div
          className="relative w-10 h-10 rounded-full border-2 border-white bg-gray-500 flex items-center justify-center text-white font-medium text-xs"
          style={{ zIndex: 0 }}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default Authors;
