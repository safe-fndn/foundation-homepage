interface Testimonial {
  title: string;
  subtitle: string;
  name: string;
  professionalTitle: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    title: "Trusted by millions",
    subtitle:
      "All 30M+ World users rely on Safe to manage their account and millions of daily transactions. Safe's flexibility allows additional protections for users, optimization of transaction fees and entirely new mechanisms like priority blockspace for humans.",
    name: "Remco Bloemen",
    professionalTitle: "Worldcoin",
    imageUrl: "./images/homepage/community/remco.png",
  },
  {
    title: "Safety made simple",
    subtitle:
      "For anyone who really cares about safety, using Safe is a no-brainer. It's by far the most battle-tested smart account and comes with an incredible ecosystem. For us, it’s the backbone that enables a frictionless and secure UX for our users.",
    name: "João Ferreira",
    professionalTitle: "Co-Founder, Picnic",
    imageUrl: "./images/homepage/community/joao.png",
  },
  {
    title: "Seamless modular orchestration",
    subtitle:
      "Safe smart accounts represent the most battle-tested smart account solution in the ecosystem. They enabled us to seamlessly extend functionality through modules integrated with Brahma’s orchestration logic, creating the smoothest automated experience for users while ensuring they maintain complete control of their funds at all times.",
    name: "Alessandro Tenconi",
    professionalTitle: "Co-founder, Brahma.fi",
    imageUrl: "./images/homepage/community/joao.png",
  },
  {
    title: "DefiPunk aligned security",
    subtitle: `Safe is an important part of the Ethereum ecosystem. The EF is an active Safe{Wallet} user, as it aligns with our “DeFiPunk” ethos and open-source, local-first, permissionless, and non-custodial ideals.`,
    name: "Hsiao-Wei Wang",
    professionalTitle: "Co-Director, Ethereum Foundation",
    imageUrl: "./images/homepage/community/wang.png",
  },
];
