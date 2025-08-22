import React from "react";
import SectionTag from "../ui/SectionTag";
import Button from "../ui/Button";

export default function CommunityVoices() {
  return (
    <div className="px-[16px] max-w-[953px] w-full text-left mx-auto">
      <div className="flex flex-row justify-between items-center">
        <SectionTag text="Community voices" />
        <div className="flex flex-row gap-[10px] items-center">
          <Button
            icon="./images/common/arrow-right-bold.svg"
            iconAlt="Arrow Right"
            iconHeight={24}
            iconWidth={24}
            variant="link"
            className="p-0 rotate-180"
          ></Button>
          <Button
            icon="./images/common/arrow-right-bold.svg"
            iconAlt="Arrow Right"
            iconHeight={24}
            iconWidth={24}
            variant="link"
            className="p-0"
          ></Button>
        </div>
      </div>
      <div className="pt-4 md:pt-10"></div>
    </div>
  );
}
