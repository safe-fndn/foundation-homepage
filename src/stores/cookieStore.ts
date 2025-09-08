import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CookieState {
  isBannerOpen: boolean;
  isAnalyticsEnabled: boolean;
  userHasTakenAction: boolean;
  openBanner: () => void;
  closeBanner: () => void;
  setIsAnalyticsEnabled: (enabled: boolean) => void;
  initializeBanner: () => void;
}

export const useCookieStore = create<CookieState>()(
  persist(
    (set, get) => ({
      isBannerOpen: false,
      isAnalyticsEnabled: false,
      userHasTakenAction: false,
      openBanner: () => set({ isBannerOpen: true }),
      closeBanner: () => set({ isBannerOpen: false }),
      setIsAnalyticsEnabled: (enabled: boolean) =>
        set({ isAnalyticsEnabled: enabled, userHasTakenAction: true }),
      initializeBanner: () => {
        const state = get();
        // Only show banner if user hasn't taken any action yet
        if (!state.userHasTakenAction) {
          set({ isBannerOpen: true });
        }
      },
    }),
    {
      name: "analyticsPreference",
      partialize: (state) => ({
        isAnalyticsEnabled: state.isAnalyticsEnabled,
        userHasTakenAction: state.userHasTakenAction,
      }),
    }
  )
);

// Initialize banner state on client side
if (typeof window !== "undefined") {
  const store = useCookieStore.getState();
  store.initializeBanner();
}
