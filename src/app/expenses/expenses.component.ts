import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Expense } from '../shared/expense';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ExpensedetailComponent } from '../expensedetail/expensedetail.component';
import { CategoryService } from '../services/category.service';
import { Category } from '../shared/category';
import { YEARS, MONTHS } from '../shared/dates';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[];
  categories: Category[];
  dataSource = new MatTableDataSource<Expense>(this.expenses);
  displayedColumns = ['description', 'category', 'amount', 'date', 'actions'];
  errorMsg: String;
  years = YEARS;
  months = MONTHS;
  // selectedYear: number;
  // selectedMonth: number;
  year = 0;
  month = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private expensesService: ExpensesService, 
    private categoryService: CategoryService, 
    public dialog: MatDialog) { 
    dialog.afterAllClosed.subscribe( () => this.getAllExpenses());
  }
  
  ngOnInit() {
    this.getAllExpenses();
    this.categoryService.getCategories().subscribe(ctgr => this.categories = ctgr,
                                                   errmes => this.errorMsg = errmes);
  }

  openExpenseDetailForm(expense?: Expense) {
    if(!expense) {
      expense = new Expense();
    }
    //console.log(expense);
    let dialogRef = this.dialog.open(ExpensedetailComponent, {data: {
      exp: expense,
      cat: this.categories,
      err: this.errorMsg}
    });
    
    
  }

  getAllExpenses() {
    this.expensesService.getExpenses().subscribe(expenses => this.dataSource.data = expenses,
                                                 errmes => this.errorMsg = errmes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteExpense(expense: Expense) {
    if(confirm('Are you sure you want to delete this record?')) {
      this.expensesService.deleteExpense(expense).subscribe(() => this.getAllExpenses(),
                                                            errmes => this.errorMsg = errmes);
    }
  }

  getExpensesByMonth() {
    this.expensesService.getExpensesByMonth(this.year, this.month)
    .subscribe(expenses => this.dataSource.data = expenses,
                errmes => this.errorMsg = errmes);
  }

  onYearChange(value: any) {
    this.year = value;
    if (this.month != 0) {
      this.getExpensesByMonth();
    }
  }

  onMonthChange(value: any) {
    this.month = value;
    if (this.year != 0) {
      this.getExpensesByMonth();
    }
  }

}


