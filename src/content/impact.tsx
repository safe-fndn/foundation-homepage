import { DuneStats } from "@/lib/fetchStats";

export const createStats = (data: DuneStats) =>
  [
    {
      title: data.transferVolume.cumulative_transfer_volume,
      subtitle: "Total Volume Processed",
      descComponent: () => (
        <foreignObject x="20" y="380" width="300" height="100">
          <div className="text-[18px] text-[#000]">
            Total volume processed is the total value that has originated IN or
            OUT a Safe smart account.
          </div>
        </foreignObject>
      ),
      d: "M348.573 0H10.1472C4.62432 0 0 4.47715 0 10V490.5C0 496.023 4.47716 500.5 10 500.5H553C558.523 500.5 563 496.023 563 490.5V306.5C563 300.977 558.523 296.5 553 296.5H368.5C362.977 296.5 358.5 292.023 358.5 286.5V10C358.5 4.47715 354.096 0 348.573 0Z",
      fillOpacity: 0.22,
      labelPosition: { x: 20, y: 80 },
      href: "https://dune.com/safe/all",
    },
    {
      title: data.totalValueLocked.total_balance_usd,
      subtitle: "Total Value Locked",
      descComponent: () => (
        <foreignObject x="392" y="192" width="300" height="60">
          <div className="text-[18px] text-[#000]">
            Total dollar value of all assets on Safe smart accounts across all
            networks
          </div>
        </foreignObject>
      ),
      d: "M943 283.5H382C376.477 283.5 372 279.023 372 273.5V10.5C372 4.97715 376.477 0.5 382 0.5H943C948.523 0.5 953 4.97714 953 10.5V273.5C953 279.023 948.523 283.5 943 283.5Z",
      fillOpacity: 0.22,
      labelPosition: { x: 392, y: 80 },
      href: "https://dune.com/safe/all",
    },
    {
      title: "300+",
      subtitle: "Networks Supported",
      descComponent: () => (
        <image
          x="596"
          y="576"
          width="240"
          height="40"
          href="/images/homepage/impact/supported-networks.png"
        />
      ),
      d: "M943 296H588C582.477 296 578 300.477 578 306V624C578 629.523 582.477 634 588 634H943C948.523 634 953 629.523 953 624V306C953 300.477 948.523 296 943 296Z",
      fillOpacity: 0.22,
      labelPosition: { x: 596, y: 374 },
      href: "https://github.com/safe-global/safe-deployments/tree/main/src/assets",
    },
    {
      title: "18+",
      subtitle: "Audits",
      descComponent: () => (
        <foreignObject x="20" y="760" width="340" height="124">
          <div className="text-[18px] text-[#000]">
            <i>Safe</i> Smart Accounts has received several audits for core
            contracts and other key components and modules
          </div>
        </foreignObject>
      ),
      d: "M551 515.5H10C4.47715 515.5 0 519.977 0 525.5V863.5C0 869.023 4.47715 873.5 10 873.5H380C385.523 873.5 390 869.023 390 863.5V713C390 707.477 394.477 703 400 703H551C556.523 703 561 698.523 561 693V525.5C561 519.977 556.523 515.5 551 515.5Z",
      fillOpacity: 0.22,
      labelPosition: { x: 20, y: 594 },
      href: "https://docs.safe.global/advanced/smart-account-bug-bounty",
    },
    {
      title: data.safesCreated.num_safes,
      subtitle: "Accounts",
      descComponent: () => (
        <foreignObject x="612" y="662" width="300" height="60">
          <div className="text-[18px] text-[#000]">
            Total number of Safe smart accounts deployed across all networks
          </div>
        </foreignObject>
      ),
      d: "M588 647H943C948.523 647 953 651.477 953 657V863C953 868.523 948.523 873 943 873H411C405.477 873 401 868.523 401 863V722.5C401 716.977 405.477 712.5 411 712.5H568C573.523 712.5 578 708.023 578 702.5V657C578 651.477 582.477 647 588 647Z",
      fillOpacity: 0.22,
      labelPosition: { x: 420, y: 792 },
      href: "https://dune.com/safe/all",
    },
  ] as const;
