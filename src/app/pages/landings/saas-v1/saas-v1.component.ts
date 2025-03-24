import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { FeaturesComponent } from './components/features/features.component'
import { FeaturesListComponent } from './components/features-list/features-list.component'
import { IndustriesComponent } from './components/industries/industries.component'
import { PricingComponent } from './components/pricing/pricing.component'
import { CtaComponent } from './components/cta/cta.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'


@Component({
  selector: 'landings-saas-v1',
  standalone: true,
  imports: [

    HeroComponent,
    // FeaturesComponent,
    FeaturesListComponent,
    IndustriesComponent,
    PricingComponent,

  ],
  templateUrl: './saas-v1.component.html',
  styles: ``,
})
export class SaasV1Component {}
