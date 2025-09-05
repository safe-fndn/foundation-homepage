"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { useCookieBannerContext } from "@/context/CookieBannerContext";
import Button from "@/components/ui/Button";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";

export const enum CookieType {
  NECESSARY = "necessary",
  ANALYTICS = "analytics",
}

export const CookieBanner = (): ReactElement | null => {
  const {
    isAnalyticsEnabled,
    setIsAnalyticsEnabled,
    closeBanner,
    isBannerOpen,
  } = useCookieBannerContext();
  const [analytics, setAnalytics] = useState<boolean>(false);

  const handleAccept = () => {
    setIsAnalyticsEnabled(analytics);
    closeBanner();
  };

  const handleAcceptAll = () => {
    setIsAnalyticsEnabled(true);
    closeBanner();
  };

  useEffect(() => {
    setAnalytics(isAnalyticsEnabled);
  }, [isAnalyticsEnabled]);

  if (!isBannerOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-[1200px] mx-auto">
      <div className="bg-white border border-[#D5D7DA] rounded-lg shadow-lg p-4">
        <div className="flex flex-row items-start gap-4">
          <Image
            src="/images/common/cookie-icon.svg"
            alt="Cookie icon"
            width={32}
            height={32}
          />

          <div>
            <div className="pb-1 text-[#1A1A1A] font-medium text-sm">
              Cookie Settings
            </div>
            <p className="text-[#1a1a1a99] leading-[120%] text-sm md:text-base">
              We use cookies to provide you with the best experience and to help
              improve our website and application. Please read our{" "}
              <Link href="/cookie" className="underline">
                Cookie Policy
              </Link>{" "}
              for more information. By clicking &quot;Accept all&quot;, you
              agree to the storing of cookies on your device to enhance site
              navigation, analyze site usage and provide customer support.
            </p>
            <div className="flex flex-row items-center gap-4 md:gap-8 py-6">
              <Checkbox
                name={CookieType.NECESSARY}
                checked={true}
                disabled={true}
                label="Necessary"
                onChange={() => {}}
              />

              <Checkbox
                name={CookieType.ANALYTICS}
                checked={analytics}
                label="Analytics"
                onChange={setAnalytics}
              />
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleAccept}
                className="text-sm md:text-base"
              >
                Accept required
              </Button>
              <Button
                variant="secondary"
                onClick={handleAcceptAll}
                className="text-sm md:text-base"
              >
                Accept all
              </Button>
            </div>
          </div>

          <Image
            src="/images/common/close.svg"
            alt="close"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={closeBanner}
          />
        </div>
      </div>
    </div>
  );
};
