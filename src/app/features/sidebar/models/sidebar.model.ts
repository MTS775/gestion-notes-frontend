export interface NavItem {
  id: string;
  label: string;
  icon: string; // Font Awesome class (e.g., 'fa-solid fa-gear')
  route: string;
  isActive: boolean;
}

export interface SidebarItem {
  label: string;
  icon: string;
  route: string;
  active?: boolean;
}

export interface SidebarConfig {
  title: string;
  items: SidebarItem[];
}
