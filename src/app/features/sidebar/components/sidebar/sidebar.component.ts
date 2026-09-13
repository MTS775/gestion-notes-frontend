import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem, SidebarConfig } from '../../models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() config: SidebarConfig = {
    title: 'Menu',
    items: []
  };

  @Output() menuSelected = new EventEmitter<string>();
  @Output() toggleState = new EventEmitter<boolean>(); // <-- Émet l'état collapsed

  constructor(private router: Router) {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) {
        this.mobileOpen = false; // Ferme le menu mobile si on redimensionne sur grand écran
      }
    });
  }

  isCollapsed = false;
  isMobile = false;
  mobileOpen = false;

  navItems: NavItem[] = [
    { id: 'settings', label: 'Paramètres', route: '/settings', isActive: true, icon: 'fa-solid fa-gear' },
    { id: 'students', label: 'Liste des Élèves', route: '/students', isActive: false, icon: 'fa-solid fa-users' },
    { id: 'weights', label: 'Pondérations', route: '/weights', isActive: false, icon: 'fa-solid fa-scale-balanced' },
    { id: 'notes-t1', label: 'Notes - 1er Trimestre', route: '/notes/t1', isActive: false, icon: 'fa-solid fa-pen' },
    { id: 'notes-t2', label: 'Notes - 2e Trimestre', route: '/notes/t2', isActive: false, icon: 'fa-solid fa-pen' },
    { id: 'notes-t3', label: 'Notes - 3e Trimestre', route: '/notes/t3', isActive: false, icon: 'fa-solid fa-pen' },
    { id: 'report-cards', label: 'Bulletins de Notes', route: '/reports', isActive: false, icon: 'fa-solid fa-file-lines' },
    { id: 'summary', label: 'Rapport de Synthèse', route: '/summary', isActive: false, icon: 'fa-solid fa-chart-pie' },
    { id: 'promotion', label: 'Proposition de Passage', route: '/promotion', isActive: false, icon: 'fa-solid fa-arrow-trend-up' }
  ];

  toggleSidebar(): void {
    if (this.isMobile) {
      this.mobileOpen = !this.mobileOpen;
    } else {
      this.isCollapsed = !this.isCollapsed;
      this.toggleState.emit(this.isCollapsed); // <-- Transmet l'état au parent
    }
  }

  closeMobileSidebar(): void {
    if (this.isMobile) {
      this.mobileOpen = false;
    }
  }

  selectItem(selectedItem: NavItem): void {
    this.navItems.forEach(item => item.isActive = (item.id === selectedItem.id));
    this.menuSelected.emit(selectedItem.id);
    this.closeMobileSidebar();
  }

  onLogout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.closeMobileSidebar();
  }

  toggleMobileMenu(): void {
    if (this.isMobile) {
      this.mobileOpen = !this.mobileOpen;
    }
  }
}
