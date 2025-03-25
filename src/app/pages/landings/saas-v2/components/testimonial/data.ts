export type TestimonialType = {
  quote: string
  author: {
    name: string
    role: string
    avatar: string | null
  }
}

export type ResoursesType = {
  title: string
  image: string
  description: string
  shares: number
  comments: number
  timestamp: string
  category: string
}

export const testimonials: TestimonialType[] = [
  {
    quote:
      "Apex's security monitoring process is top of the line and they have kept us compliant with constant updates to IT Security requirements from the Department without any interruptions in service. I highly recommend Apex Logic for any future opportunities.",
    author: {
      name: 'Ronald, COR',
      role: 'HHS',
      avatar: 'assets/img/symphony/customers/hhs-logo.svg',
    },
  },
  {
    quote:
      "GSA’s ASTRO - for unmanned vehicles contract was released on Symphony with over 600 proposals received and 0 bid protests.  GSA is calling this “heroic” ",
    author: {
      name: 'Industry Offeror',
      role: 'GPO',
      avatar: null,
    },
  },
  {
    quote:
  "Apex Logic demonstrated great flexibility in working with GSA to add functionality to the so ware/platform. As different scenarios were presented, Apex Logic worked around the Government schedule and provided timely updates. This allowed government evaluators to have access to the platform within the expected timeframes. Apex always met or exceeded their required timeframes.",
    author: {
      name: 'Michael, CS',
      role: 'GSA',
      avatar: 'assets/img/symphony/customers/gsa-logo.svg',
    },
  },
  {
    quote:
"Apex Logic has provided outstanding IT support to NITAAC throughout this contracts performance. They have met all major development deliverables, provide excellent onsite customer support, manage all financials and labor hours in accordance with the contracts terms and conditions, and routinely exceed expectations.",
    author: {
      name: 'Sharmaine, CO',
      role: 'NIH',
      avatar: 'assets/img/symphony/customers/nih-logo.png',
    },
  },
]

export const resources: ResoursesType[] = [
  {
    title: 'Analytics for the HR department for the Klinos company',
    image: 'assets/img/landing/saas-2/resources/01.jpg',
    description:
      'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum fermentum diam natoque scelerisque viverra molestie fames...',
    shares: 6,
    comments: 12,
    timestamp: '12 hours ago',
    category: 'Analytics',
  },
  {
    title: 'Analytics for the Marketing department of Fast Inc.',
    image: 'assets/img/landing/saas-2/resources/02.jpg',
    description:
      'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Laoreet sem adipiscing sollicitudin erat massa...',
    shares: 10,
    comments: 19,
    timestamp: '3 days ago',
    category: 'Analytics',
  },
  {
    title: 'Research data structuring and presentation in diagrams',
    image: 'assets/img/landing/saas-2/resources/03.jpg',
    description:
      'Egestas in neque scelerisque semper sit at eu cursus faucibus velit cras at aliquam sed dictum at at orci curabitur dictumst viverra non pharetra...',
    shares: 21,
    comments: 37,
    timestamp: '5 days ago',
    category: 'Analytics',
  },
]
