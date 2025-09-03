import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { cookiePolicy } from "@/content/cookie-policy";

export default function Cookie() {
  const cleanHtml = DOMPurify.sanitize(cookiePolicy.text);
  return (
    <>
      <h1 className="text-[50px] md:text-[90px] font-normal">
        {cookiePolicy.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </>
  );
}
