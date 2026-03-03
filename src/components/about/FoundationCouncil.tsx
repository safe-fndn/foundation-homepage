import SectionTag from "../ui/SectionTag";

const councilMembers = [
  {
    name: "Lukas Schor",
    role: "President of the Foundation Council",
    description:
      "Co-founder of Safe and President of the Safe Ecosystem Foundation since its inception. Lukas led the development of the Safe ecosystem from its Gnosis spin-off to an independent foundation, and under his leadership Safe has grown to secure over $60B in digital assets and become the market leader in smart account infrastructure.",
    expertise: "Ecosystem Growth, Operations",
  },
  {
    name: "Stefan George",
    role: "Vice President of the Foundation Council",
    description:
      "Co-founder of Gnosis (2015) and author of the original multi-signature wallet code (2017) that evolved into Safe. Stefan brings deep expertise in digital asset security, self-custody, and Ethereum infrastructure, and is a recognized figure in the Ethereum community, DAOs, and decentralized infrastructure projects.",
    expertise: "Business Strategy, Technical",
  },
  {
    name: "Richard Meissner",
    role: "Member of the Foundation Council",
    description:
      "Co-founder of Safe and author of the Safe smart contracts in use today. Richard is the most experienced maintainer of the core codebase and leads the Safe Research initiative. He has deep expertise spanning contracts, protocol design, and infrastructure, with strong connections to the Ethereum security and audit community.",
    expertise: "Technical, Protocol",
  },
];

export default function FoundationCouncil() {
  return (
    <div className="px-[16px] max-w-[1242px] mx-auto">
      <SectionTag text="Foundation Council" />
      <p className="text-[#1a1a1a99] text-base md:text-lg mt-3 font-light max-w-[700px]">
        The Foundation Council (Stiftungsrat) is the supreme governing body of
        the Safe Ecosystem Foundation, responsible for strategic oversight and
        ensuring adherence to the foundation purpose.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[40px] md:mt-[60px]">
        {councilMembers.map((member) => (
          <div key={member.name}>
            <div className="text-[#1A1A1A] text-xl md:text-2xl leading-[120%]">
              {member.name}
            </div>
            <div className="text-[#1A1A1A] text-base mt-1 font-medium">
              {member.role}
            </div>
            <p className="text-[#1a1a1a99] text-base leading-[150%] mt-3 font-light">
              {member.description}
            </p>
            <div className="text-[#1a1a1a66] text-sm mt-2 font-light">
              Expertise: {member.expertise}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
