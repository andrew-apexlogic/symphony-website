import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { JarallaxDirective } from '@components/jarallax-directive/jarallax-directive.component'
import {
  NgbDateStruct,
  NgbDatepickerConfig,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap'
import type { JarallaxOptions } from 'jarallax'

@Component({
  selector: 'coworking-space-hero',
  standalone: true,
  imports: [JarallaxDirective, NgbDatepickerModule, FormsModule],
  templateUrl: './hero.component.html',
  styles: `
    .jarallax-img {
      background-size: cover;
    }
  `,
})
export class HeroComponent {
  model!: NgbDateStruct

  jarallaxConfig: JarallaxOptions = {
    speed: 0.6,
  }
}
