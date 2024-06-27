interface CaseStudy {
  title: string;
  description: string;
  href: string;
  image?: string;
  inEvidence?: boolean; // if true, the image will be displayed
}

export const caseStudies: CaseStudy[] = [
  {
    href: "/blog/introducing-pop",
    title: "Introducing Proof of Passport",
    description:
      "Proof of Passport lets applications check their user's identity while preserving their privacy.",
  },
  {
    href: "/blog/introducing-pop",
    title: "Introducing Proof of Passport",
    description:
      "Proof of Passport lets applications check their user's identity while preserving their privacy.",
    inEvidence: true,
    image: "/open-graph.jpg",
  },
  // {
  //   href: "/blog/arbitrum",
  //   title: "Arbitrum Airdrop",
  //   description:
  //     "During their airdrop, the Arbitrum Foundation lost an estimated $253M to airdrop farmers. That's 21.8% of the supply.",
  //   inEvidence: true,
  //   image: "/illustrations/airdrop-use-case.jpg",
  // },
];
