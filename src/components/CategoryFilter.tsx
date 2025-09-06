import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const CategoryFilter = ({ categories }: { categories: string[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const toggleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "View All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const allCategories = ["View All", ...categories];

  return (
    <div className={cn("w-full gap-4 border-b border-[#1a1a1a1a] flex")}>
      {allCategories.map((category) => {
        const isSelected =
          category === "View All"
            ? !selectedCategory
            : category === selectedCategory;
        const handleClick = () => toggleCategory(category);

        return (
          <button
            key={category}
            className={cn(
              "relative py-3 px-1 text-base cursor-pointer font-medium transition-all duration-200 whitespace-nowrap",
              isSelected
                ? "text-[#12FF80] border-b-2 border-[#12FF80]"
                : "text-[#1a1a1a66]"
            )}
            onClick={handleClick}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
