import { SafeHtml } from '@angular/platform-browser'
import {
  contactFlexible,
  contactFullSpectrum,
  contactImpossible,
  contactTimeZone,
} from '@components/icons'

export type PortfolioList2Type = {
  image?: string
  bgColor: string
  brandDark?: string
  brand?: string
  brandLight?: string
  title: string
  description: string
  awards?: string[]
  awardDark?: string[]
}

export type AwardsType = {
  VueJs?: string
  Deloitte?: string
  Clutch?: string
}

export type ContactListType = {
  title: string
  description: string
  icon: any
  sanitizedIcon?: SafeHtml
}[][]

export const portfolioList2: PortfolioList2Type[] = [
  {
    image: 'assets/img/portfolio/list/06.png',
    bgColor: 'bg-info',
    brandDark: 'assets/img/portfolio/brands/champion-blue-dark.svg',
    brandLight: 'assets/img/portfolio/brands/champion-blue-light.svg',
    title: 'Data Extraction',
    description:
      '<p class="fs-sm pb-3 pb-lg-4 mb-3">All data collected in Symphony is accessible via the program interface or through requested reporting.  The final contract files containing all the documents uploaded by industry as part of their offer, award documents, and evaluation documents can be provided to a specified System of Record.</p>',
    awards: [
      'assets/img/portfolio/brands/vuejs-dark.svg',
      'assets/img/portfolio/brands/deloitte-dark.svg',
    ],
    awardDark: [
      'assets/img/portfolio/brands/vuejs-light.svg',
      'assets/img/portfolio/brands/deloitte-light.svg',
    ],
  },
  {
    image: 'assets/img/portfolio/list/07.png',
    bgColor: 'bg-primary',
    brand: 'assets/img/portfolio/brands/foster-green.svg',
    title: 'Hosting Support',
    description:
      // '<p class="fs-sm pb-3 pb-lg-4 mb-3">Feugiat elit tempor, malesuada rutrum amet quis duis facilisi viverra. Quam ut in gravida dignissim eget mauris pretium facilisi dui varius amet et quam massa auctor.</p>
      '<p class="fs-sm pb-3 pb-lg-4 mb-3">Apex Logic has installed Symphony Procurement Suite on <a href="http://cloud.gov">cloud.gov</a> using Relational Data Services, REDIS, ElasticSearch, AWS S3, and Apache Tomcat. Upgrades and patches to Symphony and other underlying software shall be performed by Apex Logic, Inc. or <a href="http://cloud.gov">cloud.gov</a> as applicable.</p>' + '<p>Symphony is a cloud computing system and as such it complies with 252.239-7010 (per 252.204-7012 (b) (1) (i)). Symphony is proposed to run on GSA 18F’s <a href="http://cloud.gov">cloud.gov</a> platform which itself is a PasS running on AWS. Since cloud.gov is owned and run by the U.S. Federal Government and is FedRAMP moderate, many of its controls and provisions are inherited by Symphony. This includes ensuring that the execution environment and data are encrypted at rest and in transit, and that the data remains within the United States (AWS GovCloud). Furthermore, the data is always under the control of the US Government and Apex Logic can in no way impede access to the underlying data for any purpose including authorized use by third parties, subpoenas, or forensic analysis. Finally, Apex Logic agrees to all other provisions and clauses as stated in 252.239-7010.</p>',
  },
  {
    image: 'assets/img/portfolio/list/08.png',
    bgColor: 'bg-danger',
    brand: 'assets/img/portfolio/brands/boost.svg',
    title: 'Back-Up and Recovery',
    description: '<p class="fs-sm pb-3 pb-lg-4 mb-3"> All backup and recovery features are provided by cloud.gov and documented in the Symphony ATO as approved by GSA. Apex Logic will provide any support required to ensure availability. Structured data resides in a standard relational database on cloud.gov and is backed up daily. Documents are stored in Amazon S3, which has 99.99999999% durability and 99.99% availability per object per year. Structured and Document data are encrypted in transit and at rest.',
  },
  {
    image: 'assets/img/portfolio/list/09.png',
    bgColor: 'bg-custom',
    brandDark: 'assets/img/portfolio/brands/champion-purple-dark.svg',
    brandLight: 'assets/img/portfolio/brands/champion-purple-light.svg',
    title: 'Performance and Scalability',
    description:
      '<p class="fs-sm pb-3 pb-lg-4 mb-3">As a cloud-based application, Symphony supports performance and scale using in-memory caching (using REDIS), horizontal scaling (adding instances), and vertical scaling (increasing virtual machine size). Symphony virtual machines do not contain any state data so if a machine fails it is simply removed automatically and a new instance is added. Virtual machines operate behind a load balancer.</p>',
    awards: [
      'assets/img/portfolio/brands/deloitte-dark.svg',
      'assets/img/portfolio/brands/clutch-dark.svg',
    ],
    awardDark: [
      'assets/img/portfolio/brands/deloitte-light.svg',
      'assets/img/portfolio/brands/clutch-light.svg',
    ],
  }
]

export const securitySpecsList: PortfolioList2Type[] = [
  {
    image: 'assets/img/portfolio/list/06.png',
    bgColor: 'bg-info',
    brandDark: 'assets/img/portfolio/brands/champion-blue-dark.svg',
    brandLight: 'assets/img/portfolio/brands/champion-blue-light.svg',
    title: 'Cybersecurity',
    description:
      '<p class="fs-sm pb-3 pb-lg-4 mb-3">Symphony handles Controlled Unclassified Information (CUI) and as such, it has been evaluated and granted an ATO by GSA using the FedRAMP Moderate baseline. A self-assessment using instruction 8582 was conducted and a government acceptance with conditions was recommended on 9/27/2022 for a period of 1 year. The next step of this process is to formalize a DoD Impact Level 4 (IL4) authorization.</p>' + '<p class="fs-sm pb-3 pb-lg-4 mb-3">GSA 18F provides <a href="http://cloud.gov">cloud.gov</a> as a turnkey hosting platform that runs on top of Amazon Web Services. The platform has been used since 2017 to host Symphony for GSA activities. Three-year Authorization to Operate was granted by GSA on May 23, 2023, at a FISMA Moderate level using the FedRAMP Moderate baseline. Symphony can be deployed to <a href="http://cloud.gov">cloud.gov</a> on an agency provided account as a cloud computing Software-as-a-Service (SaaS) solution managed by GSA in an environment that is FedRAMP Authorized at the Moderate Impact Level (<a href="http://cloud.gov">cloud.gov</a>)</p>',
    awards: [
      'assets/img/portfolio/brands/vuejs-dark.svg',
      'assets/img/portfolio/brands/deloitte-dark.svg',
    ],
    awardDark: [
      'assets/img/portfolio/brands/vuejs-light.svg',
      'assets/img/portfolio/brands/deloitte-light.svg',
    ],
  },
  {
    image: 'assets/img/portfolio/list/07.png',
    bgColor: 'bg-primary',
    brand: 'assets/img/portfolio/brands/foster-green.svg',
    title: 'Authentication',
    description:
      '<p class="fs-sm pb-3 pb-lg-4 mb-3">Symphony requires 2-factor authentication for all users and enables system administrators or authorized users to manage user roles and change security profiles.</p>',
  },

]

export const contactList: ContactListType = [
  [
    {
      title: "Time zones ain't no thing",
      description:
        'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero.',
      icon: contactTimeZone,
    },
    {
      title: 'Flexible work terms',
      description:
        'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero.',
      icon: contactFlexible,
    },
  ],
  [
    {
      title: 'Full spectrum of services',
      description:
        'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero.',
      icon: contactImpossible,
    },
    {
      title: "Impossible? We're on it",
      description:
        'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero.',
      icon: contactFullSpectrum,
    },
  ],
]
