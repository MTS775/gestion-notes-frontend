import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../../sidebar/components/sidebar/sidebar.component';
import { SidebarConfig } from '../../../sidebar/models/sidebar.model';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  isCollapsed = false;

  sidebarConfig: SidebarConfig = {
    title: 'Gestion Notes',
    items: []
  };

  onSidebarToggle(collapsed: boolean): void {
    this.isCollapsed = collapsed;
  }
}
