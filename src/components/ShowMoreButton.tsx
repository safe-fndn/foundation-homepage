import { PAGE_QUERY_PARAM } from "@/lib/getPage";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "./ui/Button";

const ShowMoreButton = ({ page }: { page: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleShowMore = () => {
    const params = new URLSearchParams(searchParams);
    params.set(PAGE_QUERY_PARAM, (page + 1).toString());

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex justify-center mt-[32px]">
      <Button
        variant="secondary"
        icon="./images/common/arrow-right-light.svg"
        iconAlt="arrow right"
        iconHeight={18}
        iconWidth={18}
        onClick={handleShowMore}
      >
        Show more
      </Button>
    </div>
  );
};

export default ShowMoreButton;
