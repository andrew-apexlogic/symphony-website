import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { FeturesComponent } from './components/fetures/fetures.component'
import { EdgeComponent } from './components/edge/edge.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { MobileAppComponent } from './components/mobile-app/mobile-app.component'
import { PricingComponent } from './components/pricing/pricing.component'
import { ToolsComponent } from './components/tools/tools.component'
import { CtaComponent } from './components/cta/cta.component'

@Component({
  selector: 'landings-saas-v3',
  standalone: true,
  imports: [
    HeroComponent,
    FeturesComponent,
    EdgeComponent,
    TestimonialComponent,
  ],
  templateUrl: './saas-v3.component.html',
})
export class SaasV3Component {}
