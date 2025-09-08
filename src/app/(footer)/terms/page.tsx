import React from "react";
import { termsData } from "@/content/terms";
import ContentPage from "@/components/ContentPage";

export default function Terms() {
  return <ContentPage title={termsData.title} text={termsData.text} />;
}
