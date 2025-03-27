import { AfterViewInit, Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { initAOS } from 'src/app/utils/init-aos'

@Component({
  selector: 'home-subscribe',
  standalone: true,
  imports: [],
  templateUrl: './subscribe.component.html',
  styles: ``,
})
export class SubscribeComponent implements AfterViewInit {
  constructor(private router: Router) {}

  isSending = false
  ngAfterViewInit(): void {
    initAOS()
  }

  subscribe() {
    this.isSending = true
  }

  onLearnMoreMaestro(){
    this.router.navigate(['maestro-overview']);
  }

}


