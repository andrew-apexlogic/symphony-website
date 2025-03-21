import { AfterViewInit, Component } from '@angular/core'
import { securitySpecsList, portfolioList2, PortfolioList2Type } from '../../data'
import { RouterModule } from '@angular/router'
import { initAOS } from 'src/app/utils/init-aos'

@Component({
  selector: 'list2-case-studies',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './case-studies.component.html',
  styles: ``,
})
export class CaseStudiesComponent implements AfterViewInit {
  portfolioList: PortfolioList2Type[] = portfolioList2
  securitySpecsList: PortfolioList2Type[] = securitySpecsList

  ngAfterViewInit(): void {
    initAOS()
  }
}
