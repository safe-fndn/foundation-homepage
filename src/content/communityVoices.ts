interface Testimonial {
  title: string;
  subtitle: string;
  name: string;
  professionalTitle?: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    title: "Safe is DeFiPunk",
    subtitle: `The EF is active Safe{Wallet} user for its "DeFiPunk" ethos and open-source`,
    name: "Hsiao-Wei Wang",
    professionalTitle: "Co-Director, Ethereum Foundation",
    imageUrl: "./images/homepage/community/member1.png",
  },
  {
    title: "",
    subtitle:
      "All 30M+ World users rely on Safe to manage their account and millions of daily transactions. Safe's flexibility allows additional protections for users, optimization of transaction fees and entirely new mechanisms like priority blockspace for humans.",
    name: "Remco Bloemen",
    imageUrl: "./images/homepage/community/member1.png",
  },
  {
    title: "",
    subtitle:
      "For anyone who really cares about safety, using Safe is a no-brainer. It's by far the most battle-tested smart account and comes with an incredible ecosystem. For us, it's the backbone that enables a frictionless and secure UX for our users.",
    name: "João Ferreira",
    professionalTitle: "CEO / co-founder of Picnic",
    imageUrl: "./images/homepage/community/joao.jpg",
  },
  {
    title: "",
    subtitle:
      "Safe smart accounts represent the most battle-tested smart account solution in the ecosystem. They enabled us to seamlessly extend functionality through modules integrated with Brahma's orchestration logic, creating the smoothest automated experience for users while ensuring they maintain complete control of their funds at all times.",
    name: "Alessandro Tenconi",
    professionalTitle: "Co-founder, Brahma.fi",
    imageUrl: "./images/homepage/community/member1.png",
  },
];
