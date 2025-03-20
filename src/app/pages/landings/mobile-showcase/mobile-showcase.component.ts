import { Component } from '@angular/core'
import { NavigationBarComponent } from '@components/navigation-bars'
import { HeroComponent } from './components/hero/hero.component'
import { StatsComponent } from './components/stats/stats.component'
import { FeaturesComponent } from './components/features/features.component'
import { InfoComponent } from './components/info/info.component'
import { LogosComponent } from './components/logos/logos.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { FaqComponent } from './components/faq/faq.component'
import { CtaComponent } from './components/cta/cta.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'landings-mobile-showcase',
  standalone: true,
  imports: [
    NavigationBarComponent,
    HeroComponent,
    StatsComponent,
    FeaturesComponent,
    InfoComponent,
    LogosComponent,
    TestimonialComponent,
    FaqComponent,
    CtaComponent,
    FooterComponent,
  ],
  templateUrl: './mobile-showcase.component.html',
  styles: ``,
})
export class MobileShowcaseComponent {}
