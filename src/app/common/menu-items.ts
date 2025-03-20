export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  image?: string
  isMega?: boolean
  isNew?: boolean
  url?: string
  parentKey?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  children?: MenuItemType[]
}

export const MENU_ITEMS: MenuItemType[] = [
 
  {
    key: 'symphony',
    label: 'Symphony',
    url: '/symphony-overview',
    isTitle: true,
    isMega: true,
    children: [
      {
        key: 'audition',
        label: 'Audition',
        url: '/audition-overview',
        parentKey: 'landings',
        image: 'assets/img/megamenu/landings.jpg',
      },
      {
        key: 'performer',
        label: 'Performer',
        url: '/performer-overview',
        parentKey: 'landings',
        image: 'assets/img/megamenu/landings.jpg',
      },
      {
        key: 'maestro',
        label: 'Maestro',
        url: '/maestro-overview',
        parentKey: 'landings',
        image: 'assets/img/megamenu/landings.jpg',
      },
     
    ],
  },
  {
    key: 'customers',
    url: '/customers',
    label: 'Customers',
    isTitle: true,
    isMega: true,
    target: '_self',
  },
  {
    key: 'services',
    url: '/services',
    label: 'Services',
    isTitle: true,
    isMega: true,
    target: '_self',
  },
 
  {
    key: 'about-us',
    label: 'About Us',
    isTitle: true,
    children: [
      {
        key: 'mission',
        label: 'Mission',
        url: '/mission',
        parentKey: 'about-us',
      },
     
      {
        key: 'careers',
        label: 'Careers',
        url: '/careers',
        parentKey: 'about-us',
      },
      {
        key: 'who-we-are',
        label: 'Who we are',
        url: '/who-we-are',
        parentKey: 'about-us',
      },
      {
        key: 'news',
        label: 'News',
        url: '/news',
        parentKey: 'about-us',
      },
    ],
  },
  {
    key: 'support',
    label: 'Support',
    isTitle: true,
    children: [
      {
        key: 'customer-support',
        label: 'Customer Support',
        url: '/customer-support',
        parentKey: 'support',
      },
     
      {
        key: 'licensing',
        label: 'Licensing',
        url: '/licensing',
        parentKey: 'support',
      },
      {
        key: 'technical-specifications',
        label: 'Technical Specifications',
        url: '/technical-specs',
        parentKey: 'support',
      }
    ],
  },
]
