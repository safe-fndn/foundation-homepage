import React from "react";
import { validatorTermsData } from "@/content/validatorterms";
import ContentPage from "@/components/ContentPage";

export default function ValidatorTerms() {
  return (
    <ContentPage
      title={validatorTermsData.title}
      text={validatorTermsData.text}
    />
  );
}
