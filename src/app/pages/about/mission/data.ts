import { SafeHtml } from "@angular/platform-browser"

export type CoreValueType = {
  description: string
  icons?: string
  sanitizedIcon?: SafeHtml
  title: string
}

export const coreValueData: CoreValueType[] = [
  {
    title: 'Mission-Drive Service',
    // icons: serviceIcon,
    description:
      'We are committed to supporting the missions of U.S. federal agencies and the seven branches of the armed forces. Our focus is on delivering high-quality solutions that align with the critical objectives of our clients, ensuring that every task we take on contributes to the mission.',
  },
  {
    title: 'Customer-Centric Approach',
    // icons: serviceIcon2,
    description:
      'We serve those who serve: every civil servant and military personnel engaged in procurement and contract management is our customer. Our teams are dedicated to simplifying their processes and addressing their challenges, always striving to make their jobs easier and more efficient.',
  },
  {
    title: 'Authenticity in Action',
    // icons: serviceIcon3,
    description:
      'We believe in straightforward, honest service. When government and military personnel engage with our teams, they know they will encounter professionals who are dedicated to solving procurement bottlenecks quickly and effectively. We value transparency and welcome feedback to improve our work.',
  },
  {
    title: 'Collaborative Partnerships',
    // icons: serviceIcon4,
    description:
      'We believe in the power of collaboration. By focusing on shared goals, mutual trust, and open communication, we create strong partnerships that lead to successful outcomes. We work together with our government and military partners to ensure every phase of the procurement process is seamless and effective.',
  },
]