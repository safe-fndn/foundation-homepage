// 0 = empty, 1 = black shield, 2 = gray shield
export const gridPattern = [
  [1, 2, 2, 2, 0],
  [2, 2, 2, 1, 2],
  [2, 2, 1, 2, 1],
  [2, 1, 2, 2, 2],
  [0, 2, 2, 2, 2],
];

export const blobContent = [
  {
    content: "2x Formally verified",
    position: {
      desktop: { top: "60px", left: "-240px" },
      mobile: { top: "0px", left: "0px" },
    },
    showOnMobile: true,
  },
  {
    content: (
      <>
        Open-Source
        <br /> and Lindy
      </>
    ),
    position: {
      desktop: { top: "60px", left: "-140px" },
      mobile: { top: "80px", left: "0px" },
    },
    showOnMobile: true,
  },
  {
    content: (
      <>
        <span className="font-medium">10+</span> Audits
      </>
    ),
    position: {
      desktop: { top: "0px", left: "0px" },
      mobile: { top: "30px", left: "-160px" },
    },
    showOnMobile: true,
  },
  {
    content: (
      <>
        <span className="font-medium">$1M</span> in bounties over 5+ years
      </>
    ),
    position: {
      desktop: { top: "0px", left: "-80px" },
      mobile: { top: "-20px", left: "-150px" },
    },
    showOnMobile: true,
  },
];
