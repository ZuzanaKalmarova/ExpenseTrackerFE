import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expense } from '../shared/expense';
import { ExpensesService } from '../services/expenses.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../shared/category';

@Component({
  selector: 'app-expensedetail',
  templateUrl: './expensedetail.component.html',
  styleUrls: ['./expensedetail.component.scss']
})
export class ExpensedetailComponent implements OnInit {

  expenseForm: FormGroup;
  expense: Expense;
  categories: Category[];
  catError: String;
  errorMsg: String;

  constructor(private fb: FormBuilder,
    private expensesService: ExpensesService,
    private categoryService: CategoryService,
    public dialogRef: MatDialogRef<ExpensedetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  { 
    this.expense = data.exp;
    this.categories = data.cat;
    this.createForm();
    
    
    
  }

  ngOnInit() {
    this.categories = this.data.cat;
    if(this.data.err) {this.catError = this.data.err;}
    
  }

  createForm() {
    this.expenseForm = this.fb.group({
      description: [this.expense.description, Validators.required],
      category: [this.expense.category, Validators.required],
      amount: [this.expense.amount, Validators.required],
      date: [this.expense.date, Validators.required]
    });
    //console.log(this.categories);
  }

  onSubmit() {
    let expenseId = this.expense.id;
    this.expense = this.expenseForm.value;
    this.expense.id = expenseId;

    if(this.expense.id == null) {
      this.expensesService.addExpense(this.expense).subscribe( () => this.dialogRef.close(),
                                                                errmes => this.errorMsg = errmes);
    } else {
      this.expensesService.updateExpense(this.expense).subscribe( () => this.dialogRef.close(),
                                                                  errmes => this.errorMsg = errmes);
    }
  }

}
