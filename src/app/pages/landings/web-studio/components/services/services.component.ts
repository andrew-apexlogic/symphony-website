import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
import { WebStudioServiceType, webStudioServices } from '../../data'
import { DomSanitizer } from '@angular/platform-browser'
import { Pagination } from 'swiper/modules'
// register Swiper custom elements
register()
@Component({
  selector: 'web-studio-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServicesComponent implements OnInit {
  allwebServicesdata: WebStudioServiceType[] = webStudioServices

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {

  }
}
