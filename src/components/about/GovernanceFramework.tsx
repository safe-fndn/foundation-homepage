import SectionTag from "../ui/SectionTag";

const documents = [
  {
    name: "Foundation Charter",
    germanName: "Stiftungsurkunde",
    description:
      "Defines the foundation purpose, governing bodies, co-optation rules, and casting vote provisions.",
  },
  {
    name: "Organizational Regulations",
    germanName: "Organisationsreglement",
    description:
      "Establishes responsibilities of the Foundation Council and Executive Management, meeting procedures, and DAO participation rights.",
  },
  {
    name: "SafeDAO Constitution (SEP-4)",
    description:
      "Community-adopted constitution defining the mission, goals, and principles of DAO governance.",
  },
  {
    name: "Conflicts of Interest Policy",
    description:
      "Comprehensive framework for identification, disclosure, and management of conflicts of interest.",
  },
  {
    name: "Funding & Incentive Directive",
    description:
      "Governs KYC/AML compliance, milestone-based monitoring, and anti-self-dealing provisions for ecosystem funding.",
  },
  {
    name: "Investment Regulations",
    description:
      "Defines the investment strategy and asset management framework.",
  },
  {
    name: "Trading Policy",
    description:
      "Establishes insider trading rules and compliance requirements.",
  },
];

export default function GovernanceFramework() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Governance Framework" />
      <p className="text-[#1a1a1a99] text-base md:text-lg mt-3 font-light max-w-[700px]">
        The Foundation operates under a comprehensive set of governance
        instruments ensuring accountability, transparency, and compliance with
        Swiss foundation law.
      </p>

      <div className="mt-[40px] md:mt-[60px] overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-[#1A1A1A]">
              <th className="text-left text-[#1A1A1A] text-base md:text-lg py-3 pr-4 font-medium">
                Document
              </th>
              <th className="text-left text-[#1A1A1A] text-base md:text-lg py-3 font-medium">
                Summary
              </th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr
                key={doc.name}
                className="border-b border-[#1a1a1a1a]"
              >
                <td className="py-4 pr-4 align-top">
                  <div className="text-[#1A1A1A] text-base md:text-lg">
                    {doc.name}
                  </div>
                  {doc.germanName && (
                    <div className="text-[#1a1a1a66] text-sm font-light">
                      {doc.germanName}
                    </div>
                  )}
                </td>
                <td className="py-4 align-top">
                  <div className="text-[#1a1a1a99] text-base font-light leading-[150%]">
                    {doc.description}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
