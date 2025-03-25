import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { UseCaseComponent } from './components/use-case/use-case.component'
import { MapComponent } from './components/map/map.component'
import { VideoComponent } from './components/video/video.component'

@Component({
  selector: 'landings-saas-v4',
  standalone: true,
  imports: [

    HeroComponent,
    // CategoriesComponent,
    UseCaseComponent,
    MapComponent,
    // VideoComponent,
    // TestimonialsComponent,
    // PricingComponent,

  ],
  templateUrl: './saas-v4.component.html',
  styles: ``,
})
export class SaasV4Component {}
