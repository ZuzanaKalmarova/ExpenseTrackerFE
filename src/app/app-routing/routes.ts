import { Routes } from '@angular/router';

import { CategoriesComponent } from '../categories/categories.component';
import { ExpensesComponent } from '../expenses/expenses.component';
import { SummaryComponent } from '../summary/summary.component';

export const routes: Routes = [
    { path: 'categories', component: CategoriesComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'summary', component: SummaryComponent },
    { path: '', redirectTo: '/summary', pathMatch: 'full' }
]