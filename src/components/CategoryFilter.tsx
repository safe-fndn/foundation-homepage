import { useRouter, useSearchParams, usePathname } from "next/navigation";

const CategoryFilter = ({
  categories,
  isColumn = false,
}: {
  categories: string[];
  isColumn?: boolean;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const toggleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (params.get("category") === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isSelected = category === selectedCategory;
        const handleClick = () => toggleCategory(category);

        return (
          <div key={category} className={isColumn ? "w-full" : "w-auto"}>
            <button
              className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200
                ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                }
              `}
              onClick={handleClick}
            >
              {category}
              {isSelected && (
                <svg
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
