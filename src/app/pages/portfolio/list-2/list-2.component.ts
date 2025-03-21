import { Component } from '@angular/core'
import { CaseStudiesComponent } from './components/case-studies/case-studies.component'


@Component({
  selector: 'app-list-2',
  standalone: true,
  imports: [
    CaseStudiesComponent,
  ],
  templateUrl: './list-2.component.html',
  styles: ``,
})
export class List2Component {}
