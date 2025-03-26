import { Component } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { MenuItemType } from 'src/app/common/menu-items'
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

  constructor(private router: Router) { }

  companyLinks: FooterLink[] = [
    {
      linkName: 'Who we are',
      path: 'mission'
    },
    {
      linkName: 'Contact Us',
      path: 'contact'
    },
    // {
    //   linkName: 'Careers',
    //   path: 'careers'
    // },
  ]

  supportLinks: FooterLink[] = [
    {
      linkName: 'Customer Support',
      path: 'https://apexlogic.freshdesk.com/support/home'
    },
    // {
    //   linkName: 'Licensing',
    //   path: 'licensing'
    // },
    {
      linkName: 'Technical Specifications',
      path: 'technical-specs'
    },
    {
      linkName: 'Careers',
      path: 'careers'
    }
  ]

  onNavLinkClick(item: FooterLink) {
    if (item.path?.includes('https://')) {
      window.open(item.path, '_blank');
    } else {
      this.router.navigate([item.path]);
    }
  }
}



export type FooterLink = {
  linkName: string
  path: string
}