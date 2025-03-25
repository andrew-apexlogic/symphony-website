import { Component } from '@angular/core'

import { ContactV2FormComponent } from '../../contacts/contact-v2/component/contact-v2-form/contact-v2-form.component'
import { coreValueData, CoreValueType } from './data'
import { DomSanitizer } from '@angular/platform-browser'


@Component({
  selector: 'sym-mission',
  standalone: true,
  imports: [
  ],
  templateUrl: './mission.component.html',
  styles: ``,
})
export class SymMissionComponent {


 allCoreValueData: CoreValueType[] = coreValueData

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.allCoreValueData.forEach((item) => {
      // item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icons);
    })
  }
}
