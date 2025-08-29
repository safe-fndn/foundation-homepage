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
    <div className="relative w-full mt-5">
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
        className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Search by name, description or category"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
        >
          <Image
            src="/images/common/close.svg"
            alt="Search"
            width={20}
            height={20}
          />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
