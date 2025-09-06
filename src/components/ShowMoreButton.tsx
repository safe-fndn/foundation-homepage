import { PAGE_QUERY_PARAM } from "@/lib/getPage";
import NextLink from "next/link";
import Button from "./ui/Button";

const ShowMoreButton = ({ page }: { page: number }) => (
  <div className="flex justify-center mt-[32px]">
    <NextLink
      href={{ query: { [PAGE_QUERY_PARAM]: page + 1 } }}
      shallow
      // Pagination marker for search engines
      rel="next"
    >
      <Button
        variant="secondary"
        icon="./images/common/arrow-right-light.svg"
        iconAlt="arrow right"
        iconHeight={18}
        iconWidth={18}
      >
        Show more
      </Button>
    </NextLink>
  </div>
);

export default ShowMoreButton;
