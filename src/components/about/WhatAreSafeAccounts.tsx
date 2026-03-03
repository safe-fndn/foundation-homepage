import SectionTag from "../ui/SectionTag";

export default function WhatAreSafeAccounts() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="What Are Safe Smart Accounts?" />

      <div className="mt-[40px] md:mt-[60px] max-w-[800px] flex flex-col gap-5">
        <p className="text-[#1A1A1A] text-lg md:text-xl leading-[150%] font-light">
          Safe Smart Accounts are programmable digital accounts that enable
          individuals, businesses, and organizations to manage digital assets
          securely. They represent the most widely deployed infrastructure of
          their kind on Ethereum.
        </p>
        <p className="text-[#1A1A1A] text-lg md:text-xl leading-[150%] font-light">
          A core feature is multi-signature security: multiple parties must
          approve a transaction before it is executed — similar to a bank account
          requiring co-signatures. This ensures that no single person can
          unilaterally move assets.
        </p>
        <p className="text-[#1A1A1A] text-lg md:text-xl leading-[150%] font-light">
          The technology is fully open source — the source code is publicly
          available and has been independently audited multiple times. Safe Smart
          Accounts are not operated by the Foundation. They are a protocol
          deployed on the Ethereum blockchain and other networks.
        </p>
      </div>
    </div>
  );
}
