import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {
  role: string = '';
  dashboardUrl: string = '';

  constructor() {}

  ngOnInit() {
    this.role = localStorage.getItem('role') || 'DEFAULT';

    switch (this.role) {
      case 'DAF':
        this.dashboardUrl = 'https://app.powerbi.com/reportEmbed?reportId=1ea2b908-535e-4d3e-9751-a79c5a75c6ed&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';
        break;
      case 'SUPPLIER':
        this.dashboardUrl = 'https://app.powerbi.com/reportEmbed?reportId=1e4b9664-f491-4bdb-bec5-ace9a8eafe88&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';
        break;
      case 'DEFAULT':
      default:
        this.dashboardUrl = 'https://app.powerbi.com/reportEmbed?reportId=41d0dbbf-9f83-474c-bfe3-463813761482&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';
        break;
    }
  }

  isMobileMenu() {
    return window.innerWidth <= 991;
  }
}
