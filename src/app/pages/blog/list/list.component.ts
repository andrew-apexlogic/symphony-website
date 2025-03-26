import { Component } from '@angular/core'
import { Breadcrumb1Component } from '@components/breadcrumb/breadcrumb-1/breadcrumb-1.component'
import { NavigationBar2Component } from '@components/navigation-bars'
import { SubscriptionComponent } from './component/subscription/subscription.component'
import { ListBlogComponent } from './component/list-blog/list-blog.component'
import { FooterComponent } from './component/footer/footer.component'
import { FeturesComponent } from '../../landings/saas-v2/components/fetures/fetures.component'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    // Breadcrumb1Component,
    SubscriptionComponent,
    ListBlogComponent,
    FeturesComponent
  ],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent {}
