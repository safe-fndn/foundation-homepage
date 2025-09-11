import React from "react";
import { disclaimerData } from "@/content/disclaimer";
import ContentPage from "@/components/ContentPage";

export default function Disclaimer() {
  return (
    <ContentPage title={disclaimerData.title} text={disclaimerData.text} />
  );
}
