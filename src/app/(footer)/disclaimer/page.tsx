import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { disclaimerData } from "@/content/disclaimer";

export default function Disclaimer() {
  const cleanHtml = DOMPurify.sanitize(disclaimerData.text);
  return (
    <>
      <h1 className="text-[50px] md:text-[90px] font-normal">
        {disclaimerData.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </>
  );
}
