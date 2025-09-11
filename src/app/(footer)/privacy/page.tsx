import ContentPage from "@/components/ContentPage";
import { privacyData } from "@/content/privacy";
import React from "react";

export default function Privacy() {
  return <ContentPage title={privacyData.title} text={privacyData.text} />;
}
