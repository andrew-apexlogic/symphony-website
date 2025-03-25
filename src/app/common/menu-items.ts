export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  image?: string
  isMega?: boolean
  isNew?: boolean
  url?: string
  href?: string;
  parentKey?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  children?: MenuItemType[]
}

export const MENU_ITEMS: MenuItemType[] = [
 
  {
    key: 'symphony',
    label: 'Symphony',
    url: 'symphony-overview',
    isTitle: true,
    isMega: true,
    target: '_self',
    children: [
      {
        key: 'audition',
        label: 'Audition',
        url: 'audition-overview',
        parentKey: 'symphony',
        image: 'assets/img/megamenu/audition-landing.jpg',
      },
      {
        key: 'performer',
        label: 'Performer',
        url: 'performer-overview',
        parentKey: 'symphony',
        // image: 'assets/img/megamenu/landings.jpg',
      },
      {
        key: 'maestro',
        label: 'Maestro',
        url: 'maestro-overview',
        parentKey: 'symphony',
        // image: 'assets/img/megamenu/landings.jpg',
      },
      // {
      //   key: 'licensing',
      //   label: 'Licensing',
      //   url: 'licensing',
      //   parentKey: 'symphony',
      // },
      {
        key: 'technical-specifications',
        label: 'Technical Specifications',
        url: 'technical-specs',
        parentKey: 'symphony',
      }
     
    ],
  },
  {
    key: 'customers',
    url: 'customers',
    label: 'Customers',
    isTitle: true,
    isMega: true,
    target: '_self',
  },
  {
    key: 'services',
    url: 'services',
    label: 'Services',
    isTitle: true,
    isMega: true,
    target: '_self',
  },
 
  {
    key: 'about-us',
    label: 'About Us',
    isTitle: true,
    // isMega: true,
    target: '_self',
    children: [
      {
        key: 'who-we-are',
        label: 'Who we are',
        url: 'mission',
        parentKey: 'about-us',
      },
      {
        key: 'contact-us',
        label: 'Contact Us',
        url: 'contact',
        parentKey: 'about-us',
      },
     
      // {
      //   key: 'careers',
      //   label: 'Careers',
      //   url: 'careers',
      //   parentKey: 'about-us',
      // }
    ],
  },
  {
    key: 'support',
    url: 'https://apexlogic.freshdesk.com/support/home',
    href: 'https://apexlogic.freshdesk.com/support/home',
    label: 'Support',
    isTitle: true,
    isMega: true,
    target: '_self',
  }
]
