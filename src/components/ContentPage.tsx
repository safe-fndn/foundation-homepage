import React from "react";
import DOMPurify from "isomorphic-dompurify";

interface ContentPageProps {
  title: string;
  text: string;
}

export default function ContentPage({ title, text }: ContentPageProps) {
  const cleanHtml = DOMPurify.sanitize(text);

  return (
    <>
      <h1 className="text-[50px] md:text-[90px] font-normal">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </>
  );
}
