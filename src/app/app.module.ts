import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule, MatSortModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from  '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { AppComponent } from './app.component';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { SummaryComponent } from './summary/summary.component';

import { CategoryService } from './services/category.service';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';

import { ExpensesService } from './services/expenses.service';
import { ExpensedetailComponent } from './expensedetail/expensedetail.component';

import { SummaryService } from './services/summary.service';
import { HttpErrMsgService } from './services/http-err-msg.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    ExpensesComponent,
    SummaryComponent,
    CategorydetailComponent,
    ExpensedetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    NgbModule,
    MatIconModule
  ],
  providers: [CategoryService, ExpensesService, SummaryService, HttpErrMsgService],
  entryComponents: [ CategorydetailComponent, ExpensedetailComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
