import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

// 🔹 Routes pour chaque rôle
const ROUTES_DAF: RouteInfo[] = [
  { path: '/home', title: 'Accueil', icon: 'home', class: '' },
  { path: '/financial', title: 'Tableau de bord', icon: 'dashboard', class: '' },
  { path: '/invoice-predection', title: 'Prédiction des factures', icon: 'description', class: '' },
  { path: '/amount-information', title: 'Informations financières', icon: 'attach_money', class: '' },
  { path: '/supplier-evaluation', title: 'Évaluation fournisseurs', icon: 'assessment', class: '' },
  { path: '/supplier-clustring', title: 'Supplier Clustring', icon: 'assessment', class: '' },
  { path: '/login', title: 'Déconnexion', icon: 'exit_to_app', class: '' }
];

const ROUTES_SUPPLIER_MANAGER: RouteInfo[] = [
  { path: '/home', title: 'Accueil', icon: 'home', class: '' },
  { path: '/financial', title: 'Tableau de bord', icon: 'dashboard', class: '' },
  { path: '/invoice-predection', title: 'Prédiction des factures', icon: 'description', class: '' },
  { path: '/amount-information', title: 'Informations financières', icon: 'attach_money', class: '' },
  { path: '/supplier-evaluation', title: 'Évaluation fournisseurs', icon: 'assessment', class: '' },
  { path: '/supplier-clustring', title: 'Supplier Clustring', icon: 'assessment', class: '' },
  { path: '/login', title: 'Déconnexion', icon: 'exit_to_app', class: '' }
];

const ROUTES_RISK_MANAGER: RouteInfo[] = [
  { path: '/home', title: 'Accueil', icon: 'home', class: '' },
  { path: '/financial', title: 'Tableau de bord', icon: 'dashboard', class: '' },
  { path: '/invoice-predection', title: 'Prédiction des factures', icon: 'description', class: '' },
  { path: '/amount-information', title: 'Informations financières', icon: 'attach_money', class: '' },
  { path: '/supplier-evaluation', title: 'Évaluation fournisseurs', icon: 'assessment', class: '' },
  { path: '/supplier-clustring', title: 'Supplier Clustring', icon: 'assessment', class: '' },
  { path: '/login', title: 'Déconnexion', icon: 'exit_to_app', class: '' }
];

// ✅ Export pour compatibilité avec navbar.component.ts
export const ROUTES = ROUTES_DAF;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[] = [];

  constructor() {}

  ngOnInit() {
    const role = localStorage.getItem('role');

    if (role === 'DAF') {
      this.menuItems = ROUTES_DAF;
    } else if (role === 'SUPPLIER_MANAGER') {
      this.menuItems = ROUTES_SUPPLIER_MANAGER;
    } else if (role === 'RISK_MANAGER') {
      this.menuItems = ROUTES_RISK_MANAGER;
    } else {
      this.menuItems = [];
    }
  }

  isMobileMenu() {
    return window.innerWidth <= 991;
  }
}