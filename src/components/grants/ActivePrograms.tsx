import React from "react";
import SectionTag from "../ui/SectionTag";
import Button from "../ui/Button";
import { GRANTS_EMAIL, BUG_BOUNTY_DOCS_LINK } from "@/constants";

function SpontaneousGrants() {
  return (
    <div className="flex-1 border border-[#1a1a1a1a] rounded-[16px] p-8">
      <div className="text-[#1A1A1A] text-2xl font-medium pb-4">
        Spontaneous Grants
      </div>
      <div className="text-[#1a1a1a99] text-base leading-[150%] pb-6">
        The Foundation accepts unsolicited grant proposals on a rolling
        basis. If you are building something that advances the Safe ecosystem
        and need financial support, we want to hear from you.
      </div>

      <div className="text-[#1A1A1A] text-lg font-medium pb-3">
        What we look for
      </div>
      <ul className="text-[#1a1a1a99] text-base leading-[180%] list-disc pl-5 pb-6">
        <li>
          A clear contribution to the Safe smart account ecosystem.
        </li>
        <li>A well-defined scope, deliverables, and timeline.</li>
        <li>A team or individual with relevant experience.</li>
        <li>
          Open-source outputs are preferred but not strictly required.
        </li>
      </ul>

      <div className="text-[#1A1A1A] text-lg font-medium pb-3">
        Process
      </div>
      <ol className="text-[#1a1a1a99] text-base leading-[180%] list-decimal pl-5 pb-8">
        <li>
          Submit your proposal via{" "}
          <a
            href={`mailto:${GRANTS_EMAIL}`}
            className="text-[#1A1A1A] underline"
          >
            {GRANTS_EMAIL}
          </a>
          .
        </li>
        <li>
          Include: project description, scope &amp; milestones, budget
          breakdown, team background, and expected impact.
        </li>
        <li>
          The Foundation reviews proposals internally. Expect an initial
          reply within 4 weeks.
        </li>
        <li>Approved grants are paid in milestones tied to deliverables.</li>
      </ol>

      <a href={`mailto:${GRANTS_EMAIL}`} target="_blank" rel="noreferrer">
        <Button
          variant="secondary"
          icon="/images/common/arrow-right-light.svg"
        >
          Apply now
        </Button>
      </a>
    </div>
  );
}

function BugBounty() {
  return (
    <div className="flex-1 border border-[#1a1a1a1a] rounded-[16px] p-8">
      <div className="text-[#1A1A1A] text-2xl font-medium pb-4">
        Bug Bounty
      </div>
      <div className="text-[#1a1a1a99] text-base leading-[150%] pb-6">
        The Safe smart account bug bounty program rewards security
        researchers who identify vulnerabilities in Safe&apos;s core smart
        contracts. Rewards of up to $1,000,000 are available depending on
        severity.
      </div>

      <div className="text-[#1A1A1A] text-lg font-medium pb-3">
        Severity &amp; Rewards
      </div>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full text-base">
          <thead>
            <tr className="border-b border-[#1a1a1a1a]">
              <th className="text-left text-[#1A1A1A] font-medium py-2 pr-4">
                Severity
              </th>
              <th className="text-left text-[#1A1A1A] font-medium py-2 pr-4">
                Example
              </th>
              <th className="text-left text-[#1A1A1A] font-medium py-2">
                Reward
              </th>
            </tr>
          </thead>
          <tbody className="text-[#1a1a1a99]">
            <tr className="border-b border-[#1a1a1a0d]">
              <td className="py-2 pr-4">High</td>
              <td className="py-2 pr-4">
                Direct fund theft, permanent lockups
              </td>
              <td className="py-2">Up to $1,000,000</td>
            </tr>
            <tr className="border-b border-[#1a1a1a0d]">
              <td className="py-2 pr-4">Medium</td>
              <td className="py-2 pr-4">
                Unexpected behavior causing fund loss
              </td>
              <td className="py-2">Up to $50,000</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Low</td>
              <td className="py-2 pr-4">
                Fee avoidance, UX degradation
              </td>
              <td className="py-2">Up to $10,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-[#1A1A1A] text-lg font-medium pb-3">Rules</div>
      <ul className="text-[#1a1a1a99] text-base leading-[180%] list-disc pl-5 pb-8">
        <li>
          Vulnerabilities must not have been previously reported or already
          known.
        </li>
        <li>
          Public disclosure before resolution disqualifies the report.
        </li>
      </ul>

      <a
        href={BUG_BOUNTY_DOCS_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="secondary"
          icon="/images/common/arrow-right-light.svg"
        >
          View full program details
        </Button>
      </a>
    </div>
  );
}

export default function ActivePrograms() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Active Programs" />
      <div className="flex flex-col lg:flex-row gap-8 mt-[60px]">
        <SpontaneousGrants />
        <BugBounty />
      </div>
    </div>
  );
}
