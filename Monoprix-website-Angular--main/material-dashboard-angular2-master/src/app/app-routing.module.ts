import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialComponent } from './financial/financial.component';
import { OverviewComponent } from './overview/overview.component';
import { SupplierFinancialComponent } from './supplier-financial/supplier-financial.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'financial', component: FinancialComponent},
  {path: 'supplier-financial', component: SupplierFinancialComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
