import { privacyData } from "@/content/privacy";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

export default function Privacy() {
  const cleanHtml = DOMPurify.sanitize(privacyData.text);
  return (
    <>
      <h1 className="text-[50px] md:text-[90px] font-normal">
        {privacyData.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </>
  );
}
