import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { FinancialComponent } from './financial/financial.component';
import { SupplierFinancialComponenteya } from './pages/supplier-financial/supplier-financial.component';
import { HomeComponent } from './home/home.component';
import { InvoicePredectionComponent } from './pages/InvoicePredection/InvoicePredection.component';
import { AmountInformationComponent } from './pages/amount-information/amount-information.component';
import { SupplierEvaluationComponent } from './pages/supplier-evaluation/supplier-evaluation.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'financial', component: FinancialComponent },
  { path: 'supplier-financial', component: SupplierFinancialComponenteya },
  { path: 'invoice-predection', component: InvoicePredectionComponent },
  { path: 'amount-information', component: AmountInformationComponent },
  { path: 'supplier-evaluation', component: SupplierEvaluationComponent },
  { path: 'supplier-clustring', component: SupplierEvaluationComponent },
  { path: 'register', component: RegisterComponent },
  // Optional fallback
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true // keep if required by your backend setup
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
