import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";

const images = [
  "image1",
  "image2",
  "image3",
  "image4",
  "image5",
  "image6",
  "image7",
  "image8",
  "image9",
  "image10",
  "image11",
  "image12",
];

export default function BackedBy() {
  return (
    <div className="px-[16px] max-w-[1002px] mx-auto">
      <SectionTag text="VC's" />
      <div className="pt-1 md:pt-4 pb-4 lg:pb-[64px] text-[36px] italic md:not-italic md:text-[64px]">
        Backed by the best
      </div>
      <div className="grid grid-cols-4 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex h-[64px] md:h-[150px] bg-[#12ff800f] items-center justify-center p-2 md:p-4"
          >
            {image && (
              <Image
                src={`/images/token/${image}.png`}
                alt={`VC Partner ${index + 1}`}
                width={200}
                height={100}
                className="w-auto h-full md:h-[60%] object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
