import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { termsData } from "@/content/terms";

export default function Terms() {
  const cleanHtml = DOMPurify.sanitize(termsData.text);
  return (
    <>
      <h1 className="text-[50px] md:text-[90px] font-normal">
        {termsData.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </>
  );
}
