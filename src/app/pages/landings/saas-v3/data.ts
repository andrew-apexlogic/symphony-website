import { SafeHtml } from '@angular/platform-browser'
import {
  analytics,
  comment,
  mode,
  notification,
  security,
  subTasks,
} from '@components/icons'

export type ToolsType = {
  name: string
  image: string
  description: string
}

export type Saas3FeatureType = {
  title: string
  description: string
  svg: any
  sanitizedIcon?: SafeHtml
}

export type SaasV3TestimonialType = {
  image_src?: string
  name: string
  quote: string
  quote2?: string;
}[][]

export type Saa3LayersType = {
  depth: number
  lightSrc: string
  darkSrc: string
}
export const tools: ToolsType[] = [
  {
    name: 'Google',
    image: 'assets/img/landing/saas-3/tools/google.svg',
    description:
      'Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis volutpat.',
  },
  {
    name: 'Zoom',
    image: 'assets/img/landing/saas-3/tools/zoom.svg',
    description:
      'In eget a mauris quis. Tortor dui tempus quis integer est sit natoque placerat dolor.',
  },
  {
    name: 'Slack',
    image: 'assets/img/landing/saas-3/tools/slack.svg',
    description:
      'Donec blandit nulla elementum eu. Est dui nibh eget amet curabitur nunc.',
  },
  {
    name: 'Gmail',
    image: 'assets/img/landing/saas-3/tools/gmail.svg',
    description:
      'Rutrum interdum tortor, sed at nulla. A cursus bibendum elit purus cras praesent.',
  },
  {
    name: 'Trello',
    image: 'assets/img/landing/saas-3/tools/trello.svg',
    description:
      'Congue pellentesque amet, viverra curabitur quam diam scelerisque fermentum urna.',
  },
  {
    name: 'Mailchimp',
    image: 'assets/img/landing/saas-3/tools/mailchimp.svg',
    description:
      'Turpis fermentum, volutpat ultrices sed ultrices proin risus bibendum elit purus.',
  },
  {
    name: 'Dropbox',
    image: 'assets/img/landing/saas-3/tools/dropbox.svg',
    description:
      'Ut in turpis consequat odio diam lectus elementum. Est faucibus blandit platea.',
  },
  {
    name: 'Evernote',
    image: 'assets/img/landing/saas-3/tools/evernote.svg',
    description:
      'Arcu, lorem facilisis nunc tellus, molestie urna nam mi, ullamcorper tempus quis.',
  },
]

export const saas3feature: Saas3FeatureType[] = [
  {
    title: 'Program Management',
    description:
      'Symphony streamlines contract administration by centralizing key information, activities, and communication. Symphony workflows deliver a consistent, fair, and positive experience for the industry while providing program management for government agencies.  Symphony efficiently manages all contract vehicles within a single system, allowing vendors to enter pertinent data once for use throughout the review and approval process across all contracts.',
    svg: comment,
  },
  {
    title: 'Contract Intelligence',
    description:
      'Symphony provides insight into post-award programmatic functions, enhancing transparency, shifting accountability to the industry, improving the customer ordering experience, reducing the governments risk regarding fair opportunity, and minimizing personnel resource allocation and workload.',
    svg: analytics,
  },
  {
    title: 'Integrations',
    description:
      'Symphonys API-first design allows all user actions to trigger RESTful API calls, enabling seamless integration with external systems. This streamlines the contracting process by automatically generating, posting, and releasing orders in Symphony based on data and documents from third-party systems, without requiring direct user interaction with the Symphony interface. Additionally, existing external dashboards and reports can be enhanced by integrating data from Symphony.',
    svg: mode,
  },
  {
    title: 'AI',
    description:
      'Apex Logic is soon releasing a beta version of the Maestro module, our AI-powered contract management system. We have taken a deliberate approach to development, allowing time to identify best practices in the rapidly changing landscape of AI technologies. The Maestro module is designed to streamline contract management by reducing manual tasks, minimizing errors, improving compliance, and offering valuable insights into contractual relationships and obligations.',
    svg: notification,
  }
]

export const saasv3Testimonial: SaasV3TestimonialType = [
  [
    {
      // image_src: 'assets/img/avatar/44.jpg',
      name: 'Buyers',
      quote:
        'A centralized hub for buyers to streamline market research, simplify the ordering process, and enhance order management.',
    },
    {
      // image_src: 'assets/img/avatar/45.jpg',
      name: 'Industry',
      quote:
        'A central entry point for Industry to submit high quality proposals, store historical contracting documents, respond to new task order requests, view their performance metrics against a specific contract, manage contract requirements, submit requests for modifications, and provide additional market research information.',
    },
    {
      // image_src: 'assets/img/avatar/46.jpg',
      name: 'Program Office Managers',
      quote:
        'Symphony Audition streamlines the process for each program to issue their master contract RFP, conduct source selection, and award contracts.',
      quote2: 'Symphony Performer manages contract vehicles, fair opportunity solicitation, and provides management dashboards after contract award.'
      },
  ]
]

export const saas3Layer: Saa3LayersType[] = [
  {
    depth: 0.1,
    lightSrc: 'assets/img/landing/saas-3/hero/01-light.png',
    darkSrc: 'assets/img/landing/saas-3/hero/01-dark.png',
  },
  // {
  //   depth: 0.25,
  //   lightSrc: 'assets/img/landing/saas-3/hero/02-light.png',
  //   darkSrc: 'assets/img/landing/saas-3/hero/02-dark.png',
  // },
  {
    depth: 0.35,
    lightSrc: 'assets/img/landing/saas-3/hero/03-light.png',
    darkSrc: 'assets/img/landing/saas-3/hero/03-dark.png',
  },
  {
    depth: 0.45,
    lightSrc: 'assets/img/landing/saas-3/hero/04-light.png',
    darkSrc: 'assets/img/landing/saas-3/hero/04-dark.png',
  },
]
