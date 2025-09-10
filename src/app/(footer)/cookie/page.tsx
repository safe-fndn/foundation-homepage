import React from "react";
import { cookiePolicy } from "@/content/cookie-policy";
import ContentPage from "@/components/ContentPage";

export default function Cookie() {
  return <ContentPage title={cookiePolicy.title} text={cookiePolicy.text} />;
}
