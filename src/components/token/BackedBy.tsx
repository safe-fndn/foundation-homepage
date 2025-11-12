import React from "react";
import SectionTag from "../ui/SectionTag";
import Image from "next/image";

const images = [
  "image1",
  "image2",
  "image3",
  "image7",
  "image6",
  "image11",
  "image12",
  "image13",
  "image10",
  "image8",
  "image4",
  "image14",
  "image5",
  "image15",
  "image17",
  "image9",
  "image16",
  "image18",
  "image19",
  "image20",
  "image21",
  "image22",
  "image23",
  "image24",
  "image27",
  "image25",
  "image26",
  "image28",
  "image29",
  "image30",
  "image31",
  "image32",
  "image33",
  "image34",
  "image35",
  "image36",
  "image37",
];

export default function BackedBy() {
  return (
    <div className="px-[16px] max-w-[1002px] mx-auto">
      <SectionTag text="VC's" />
      <div className="pt-1 md:pt-4 pb-4 lg:pb-[64px] text-[36px] italic md:not-italic md:text-[64px]">
        Backed by the best
      </div>

      <div className="grid grid-cols-2 gap-5 mb-5">
        {images.slice(0, 2).map((image, index) => (
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

      <div className="grid grid-cols-5 gap-5">
        {images.slice(2).map((image, index) => (
          <div
            key={index + 2}
            className="flex h-[64px] md:h-[150px] bg-[#12ff800f] items-center justify-center p-2 md:p-4"
          >
            {image && (
              <Image
                src={`/images/token/${image}.png`}
                alt={`VC Partner ${index + 3}`}
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
