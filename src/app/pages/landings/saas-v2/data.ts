import { SafeHtml } from '@angular/platform-browser'
import {
  dashboardFlip,
  dashboardFlipBack,
  reliableFlip,
  reliableFlipBack,
  supportFlip,
  supportFlipBack,
} from '@components/icons'

export type BenefitProductType = {
  card_flip_front: {
    heading: string
    paragraph: string
    icon?: any
    image?: string;
    sanitizedIconFront?: SafeHtml
  }
  card_flip_back: {
    heading: string
    paragraph: string
    color: string
    icon?: any
    image?: string;
    sanitizedIconBack?: SafeHtml
  }
}

export type BrandType = {
  name: string
  image_src: string
  width: number
}

export type CustomerAgencyType = {
  name: string
  image_src: string
  width: number
}

export const benefitsProduct: BenefitProductType[] = [
  {
    card_flip_front: {
      heading: 'Audition',
      paragraph:
        'Open Market solicitation, Proposal Configuration, Intake, and Source Selection',
      image: 'assets/img/symphony/audition-icon.png'

    },
    card_flip_back: {
      heading: 'Audition',
      paragraph:
        'Symphony Audition lets you customize proposal  criteria and streamlines the contract vehicle competition process through the automation of proposal validation and evaluation. Easily set up the program and solicitation requirements and receive and validate bidder proposals. ',
      color: 'bg-info',
      image: 'assets/img/symphony/audition-icon.png'
    },
  },

  {
    card_flip_front: {
      heading: 'Performer',
      paragraph:
        'Task Order and Contract Management, Operate and Measure Program Success',
      image: 'assets/img/symphony/performer-icon.png'
    },
    card_flip_back: {
      heading: 'Performer',
      paragraph:
        'Symphony Performer standardizes and manages order placement and contract administration for complex acquisition programs. Symphony can be configured in days to meet the needs of the contract and was designed to withstand and adapt to an ever-changing environment.',
      color: 'bg-info',
      image: 'assets/img/symphony/performer-icon.png'
    },
  },

  {
    card_flip_front: {
      heading: 'Maestro',
      paragraph:
        'Purposeful AI Designed for the Federal Acquisition Community.',
      image: 'assets/img/symphony/maestro-icon.png'
    },
    card_flip_back: {
      heading: 'Maestro',
      paragraph:
        'Maestro will soon be released in beta Symphony Maestro exemplifies Symphony’s application of AI.  Maestro will soon be released in beta',
      color: 'bg-info',
      image: 'assets/img/symphony/maestro-icon.png'
    },
  },
]

export const allCustomerAgency: CustomerAgencyType[] = [
  {
    name: 'GSA',
    image_src: 'assets/img/symphony/customers/gsa-logo-grey.png',
    width: 100,
  },
  {
    name: 'DHA',
    image_src: 'assets/img/symphony/customers/dha-logo-grey.png',
    width: 125,
  },
  {
    name: 'NIH',
    image_src: 'assets/img/symphony/customers/nih-logo-grey.png',
    width: 110,
  },
  {
    name: 'HHS',
    image_src: 'assets/img/symphony/customers/hhs-logo-grey.png',
    width: 110,
  },
  {
    name: 'ED',
    image_src: 'assets/img/symphony/customers/ed-logo-grey.png',
    width: 110,
  },
]
export const brandName: BrandType[] = [
  {
    name: 'DHA',
    image_src: 'assets/img/landing/saas-1/brands/foster-light.svg',
    width: 145,
  },
  {
    name: 'HHS',
    image_src: 'assets/img/landing/saas-1/brands/klinos-light.svg',
    width: 140,
  },
  {
    name: 'GSA',
    image_src: 'assets/img/landing/saas-1/brands/champion-light.svg',
    width: 160,
  },
  {
    name: 'OASIS',
    image_src: 'assets/img/landing/saas-1/brands/airbnb-light.svg',
    width: 130,
  },


]
