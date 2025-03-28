import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Router } from '@angular/router'
import type { MenuItemType } from 'src/app/common/menu-items'

@Component({
  selector: 'vertical-menu-item',
  standalone: true,
  styles: `
    :host(vertical-menu-item) {
      display: contents;
    }
  `,
  template: `
    <li [class]="itemClassName">
      <button
        [class]="linkClassName + ' collapse-item'"
        (click)="onNavLinkClick(item)">
        {{ item.label }}
      </button>
    </li>
  `,
})
export class VerticalMenuItemComponent {
  @Input() item!: MenuItemType;
  @Input() linkClassName?: string;
  @Input() itemClassName?: string;
  @Output() closeMenu = new EventEmitter();

  constructor(private router: Router) {}

  onNavLinkClick(item: MenuItemType) {
    if (item.url?.includes('https://')){
      window.open(item.url, "_blank");
    } else {
      this.router.navigate(['/' + item.url]);
    }
    this.closeMenu.emit();
  }
}
