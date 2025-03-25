import { SafeHtml } from '@angular/platform-browser'
import {
  dashboardFlip,
  dashboardFlipBack,
  reliableFlip,
  reliableFlipBack,
  supportFlip,
  supportFlipBack,
} from '@components/icons'

export type Item = {
  card_flip_front: {
    heading: string
    paragraph: string
    icon: any
    sanitizedIconFront?: SafeHtml
  }
  card_flip_back: {
    heading: string
    paragraph: string
    color: string
    icon: any
    sanitizedIconBack?: SafeHtml
  }
}

export type ParallaxImageType = {
  light_image: string
  dark_image: string
  depth: number
}

export type ClientProductDataType = {
  brand: string
  img: string;
  swapTo?: string
  swapFrom?: {
    darkMode: string
    lightmode: string
  }
}
export type BenefitProductType = {
  item: Item
}

export const benefitsProduct: BenefitProductType[] = [
  {
    item: {
      card_flip_front: {
        heading: 'Support',
        paragraph:
          'Around users and partners can count on 24/7 technical assistance, as well as the help of the technical analytics department and teams of specialized experts.',
        icon: supportFlip,
      },
      card_flip_back: {
        heading: '24/7',
        paragraph:
          'Around users and partners can count on 24/7 technical assistance, as well as the help of the technical analytics department and teams of specialized experts.',
        color: 'bg-primary',
        icon: supportFlipBack,
      },
    },
  },
  {
    item: {
      card_flip_front: {
        heading: 'Individual dashboard',
        paragraph:
          'You can easily identify interdependencies between different indicators, identify tendencies and prevent potential difficulties and problems.',
        icon: dashboardFlip,
      },
      card_flip_back: {
        heading: '136',
        paragraph:
          'You can easily identify interdependencies between different indicators, identify tendencies and prevent potential difficulties and problems.',
        color: 'bg-danger',
        icon: dashboardFlipBack,
      },
    },
  },
  {
    item: {
      card_flip_front: {
        heading: 'Reliable data',
        paragraph:
          'Thanks to our platform, developed using advanced data management methods, data quality reaches 100%, which is 20% better than other platforms.',
        icon: reliableFlip,
      },
      card_flip_back: {
        heading: '100%',
        paragraph:
          'Thanks to our platform, developed using advanced data management methods, data quality reaches 100%, which is 20% better than other platforms.',
        color: 'bg-info',
        icon: reliableFlipBack,
      },
    },
  },
]

export const clientProductData: ClientProductDataType[] = [
  {
    brand: 'GSA',
    img: 'assets/img/symphony/customers/gsa-logo-grey.png',
  },
  {
    brand: 'DHA',
    img: 'assets/img/symphony/customers/dha-logo-grey.png',
  },
  {
    brand: 'NIH',
    img: 'assets/img/symphony/customers/nih-logo-grey.png',
  },
  {
    brand: 'HHS',
    img: 'assets/img/symphony/customers/hhs-logo-grey.png',
  },
  {
    brand: 'ED',
    img: 'assets/img/symphony/customers/ed-logo-grey.png',
  }
]

export const parallaxImage: ParallaxImageType[] = [
  {
    light_image: 'assets/img/about/product/hero/01-light.png',
    dark_image: 'assets/img/about/product/hero/01-dark.png',
    depth: -0.05,
  },
  {
    light_image: 'assets/img/about/product/hero/02-light.png',
    dark_image: 'assets/img/about/product/hero/02-dark.png',
    depth: 0.1,
  },
  {
    light_image: 'assets/img/about/product/hero/03-light.png',
    dark_image: 'assets/img/about/product/hero/03-dark.png',
    depth: 0.2,
  },
  {
    light_image: 'assets/img/about/product/hero/04-light.png',
    dark_image: 'assets/img/about/product/hero/04-dark.png',
    depth: -0.2,
  },
  {
    light_image: 'assets/img/about/product/hero/05-light.png',
    dark_image: 'assets/img/about/product/hero/05-dark.png',
    depth: -0.25,
  },
]
