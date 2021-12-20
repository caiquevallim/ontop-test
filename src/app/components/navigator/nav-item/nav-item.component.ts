import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() title: string;
  @Input() icon: string;
  @Input() id: string;
  @Input() isActive = false;
  @Output() navigate = new EventEmitter<string>();

  onNavigate(): void {
    this.navigate.emit(this.id);
  }
}
