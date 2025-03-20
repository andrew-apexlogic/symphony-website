import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { createdBy, developedByLink } from 'src/app/states/constants'

@Component({
  selector: 'saas-v2-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  author = createdBy
  developBy = developedByLink

  companyLinks: FooterLink[]  = [
    {
      linkName: 'Mission',
      path: 'mission'
    },
    {
      linkName: 'Careers',
      path: 'careers'
    },
    {
      linkName: 'Who we are',
      path: 'who-we-are'
    },
    {
      linkName: 'News',
      path: 'news'
    },
  ]

  supportLinks: FooterLink[] = [
    {
      linkName: 'Customer Support',
      path: 'customer-support'
    },
    {
      linkName: 'Licensing',
      path: 'licensing'
    },
    {
      linkName: 'Technical Specifications',
      path: 'technical-specs'
    },
    {
      linkName: 'Privacy Policy',
      path: 'privacy'
    }
  ]
}

export type FooterLink = {
  linkName: string
  path: string
}