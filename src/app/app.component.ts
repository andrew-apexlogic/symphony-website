import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { BackToTopComponent } from '@components/back-to-top/back-to-top.component'
import { CustomizerComponent } from '@components/customizer/customizer.component'
import { NavigationBarComponent } from '@components/navigation-bars'
import { PreloaderComponent } from '@components/preloader/preloader.component'
import { TitleService } from '@core/services/title.service'
import { FooterComponent } from './pages/landings/saas-v2/components/footer/footer.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PreloaderComponent,
    BackToTopComponent,
    CustomizerComponent,
    NavigationBarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.init()
  }
}
