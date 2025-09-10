import React from "react";
import { imprintData } from "@/content/imprint";
import ContentPage from "@/components/ContentPage";

export default function Imprint() {
  return <ContentPage title={imprintData.title} text={imprintData.text} />;
}
