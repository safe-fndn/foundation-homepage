import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { imprintData } from "@/content/imprint";

export default function Imprint() {
  const cleanHtml = DOMPurify.sanitize(imprintData.text);
  return (
    <>
      <h1 className="text-[50px] md:text-[90px] font-normal">
        {imprintData.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </>
  );
}
