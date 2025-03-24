import { SafeHtml } from '@angular/platform-browser'
import {
  serviceIcon,
  serviceIcon2,
  serviceIcon3,
  serviceIcon4,
  serviceIcon5,
  serviceIcon6,
} from '../../../components/icons'

export type ServiceGridType = {
  description: string
  icons: string
  sanitizedIcon?: SafeHtml
  title: string
}
export type BenefitType = {
  description: string
  title: string
  number?: SafeHtml
}

export type ServiceTestimonialType = {
  name: string
  avatar: string
  position: string
  description: string
  isSecond?: boolean
}[][]

export const serviceGrid: ServiceGridType[] = [
  {
    title: 'Consultation and Reporting',
    icons: serviceIcon,
    description:
      'We guide our customers through the strategy and planning phases, applying best practices for acquisition criteria and workflows. Additionally, we can manage specific tasks within the program, such as Market Research and Scope Review. ',
  },
  {
    title: 'Custom Software Development',
    icons: serviceIcon2,
    description:
      'We specialize in developing a wide range of custom applications and automation to support all aspects of the procurement lifecycle. ',
  },
  {
    title: 'Advanced Help Desk',
    icons: serviceIcon3,
    description:
      'We’re known for our high-touch customer service, which is included with the standard license fee. For additional support, we offer extended hours, faster response times, and priority escalations when needed.',
  },
  {
    title: 'Additional Training',
    icons: serviceIcon4,
    description:
      'In addition to our knowledge base and video resources, we offer customized training sessions, including webinars for the industry, targeted training for Program Officers and Evaluators, and in-depth sessions on managing program execution.',
  },
  {
    title: 'Integration and API Support',
    icons: serviceIcon5,
    description:
      'We can assist with integrating Symphony into other systems and enhance existing external dashboards and reports by incorporating data from Symphony.',
  },
  {
    title: 'Symphony White Label',
    icons: serviceIcon6,
    description:
      'The entire Symphony experience can be fully customized and branded to meet the unique needs of specific agencies and their clients.',
  },
]

export const benefits: BenefitType[] = [
  {
    number: '01',
    title: 'Individual approach',
    description:
      'Hac erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor non.',
  },
  {
    number: '02',
    title: 'Integrated analytics',
    description:
      'Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor do leo proin odio est sed sit felis facilisi integer.',
  },
  {
    number: '03',
    title: 'Step by step work',
    description:
      'More erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor.',
  },
  {
    number: '04',
    title: 'Full spectrum of services',
    description:
      'Adipiscing posuere dui, amet, augue nisl dictum justo, enim sed neque congue non quam ultrices interdum vitae vestibulum. Hac erat leo proin odio est sed sit felis facilisi integer sed.',
  },
]
export const servicesTestimonial: ServiceTestimonialType = [
  [
    {
      name: 'Jane Cooper',
      avatar: 'assets/img/avatar/22.jpg',
      position: 'Medical Assistant',
      description:
        'Sit risus metus, vel neque eu lectus duis. Vulputate facilisi at feugiat mi aenean nunc enim faucibus arcu. Diam id accumsan sit.',
      isSecond: true,
    },
    {
      name: 'Cameron Williamson',
      avatar: 'assets/img/avatar/25.jpg',
      position: 'Marketing Coordinator',
      description:
        'Nam convallis maecenas leo sapien interdum id. Facilisi dictum lacinia in phasellus. Nullam id sed tempor, volutpat blandit urna sagittis, commodo vestibulum. Adipiscing dictumst nunc enim massa lacus lobortis.',
    },
  ],
  [
    {
      name: 'Wade Warren',
      avatar: 'assets/img/avatar/23.jpg',
      position: 'President of Sales',
      description:
        'Vitae tempor morbi tellus pulvinar. Ut iaculis sit tristique in turpis volutpat quam nec. Pretium eu nulla egestas ultrices. Donec in pulvinar ut fermentum a, nunc, aliquam. Integer dui dui ornare sed lacinia.',
      isSecond: true,
    },
    {
      name: 'Leslie Alexander',
      avatar: 'assets/img/avatar/26.jpg',
      position: 'CEO, Divi',
      description:
        'Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut auctor porttitor amet, tortor. Justo.',
    },
  ],
  [
    {
      name: 'Esther Howard',
      avatar: 'assets/img/avatar/24.jpg',
      position: 'CEO, Slack',
      description:
        'Ante turpis leo dictum adipiscing nisl magnis elementum eu. Integer consequat sed ipsum massa egestas integer proin id.',
      isSecond: true,
    },
    {
      name: 'Brooklyn Simmons',
      avatar: 'assets/img/avatar/27.jpg',
      position: 'Marketing Coordinator',
      description:
        'In quisque dolor, aliquam faucibus. Gravida diam ornare egestas proin quis odio suspendisse pellentesque. Condimentum risus, rutrum curabitur faucibus mi a turpis morbi. Nulla euismod dolor quis amet sed.',
    },
  ],
  [
    {
      name: 'Fannie Summers',
      avatar: 'assets/img/avatar/28.jpg',
      position: 'VP of Sales',
      description:
        'In et dui amet amet elementum urna, dictum. Eget leo ornare bibendum a fermentum. Rutrum pellentesque ipsum cras purus ac a ullamcorper. Elit ac amet quam tellus euismod ac aliquam pharetra lectus.',
      isSecond: true,
    },
    {
      name: 'Robert Fox',
      avatar: 'assets/img/avatar/29.jpg',
      position: 'Marketing Coordinator',
      description:
        'At felis non consequat neque in ultrices tortor purus dui. At sed fermentum, egestas amet et donec euismod risus. Nulla mauris.',
    },
  ],
]
