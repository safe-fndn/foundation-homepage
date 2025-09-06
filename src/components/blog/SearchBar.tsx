import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";

const SearchBar = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Image
          src="/images/common/search-icon.svg"
          alt="Search"
          width={20}
          height={20}
        />
      </div>
      <input
        type="text"
        className="w-full pl-10 pr-12 py-3 bg-white border border-[#1a1a1a1a] rounded-lg placeholder-[#1a1a1a66]"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center text-[#1a1a1a66] hover:text-[#1a1a1a]"
        >
          <Image
            src="/images/common/close.svg"
            alt="clear search"
            width={20}
            height={20}
          />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
