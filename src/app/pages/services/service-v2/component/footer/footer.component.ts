import { Component } from '@angular/core'
import { createdBy, developedByLink } from 'src/app/states/constants'

@Component({
  selector: 'service-v2-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  author = createdBy
  developBy = developedByLink
}
