import { Component } from '@angular/core'
import { NavigationBarComponent } from '@components/navigation-bars'
import { MissionComponent } from './component/mission/mission.component'
import { StepsComponent } from './component/steps/steps.component'
import { TestimonialComponent } from './component/testimonial/testimonial.component'
import { RouterModule } from '@angular/router'
import { ToolsComponent } from '../../landings/saas-v2/components/tools/tools.component'


@Component({
  selector: 'about-agency',
  standalone: true,
  imports: [
    // NavigationBarComponent,
    MissionComponent,
    // StepsComponent,
    TestimonialComponent,
    RouterModule,
    // ToolsComponent
  ],
  templateUrl: './agency.component.html',
  styles: ``,
})
export class AgencyComponent {}
