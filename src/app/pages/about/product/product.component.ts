import { Component } from '@angular/core'
import { HeroComponent } from './component/hero/hero.component'
import { ClientComponent } from './component/client/client.component'
import { ContactV2FormComponent } from '../../contacts/contact-v2/component/contact-v2-form/contact-v2-form.component'


@Component({
  selector: 'about-product',
  standalone: true,
  imports: [
    HeroComponent,
    // ClientComponent,
    ContactV2FormComponent,
  ],
  templateUrl: './product.component.html',
  styles: ``,
})
export class ProductComponent {}
