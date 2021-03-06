import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../shared/expense';
import { catchError } from 'rxjs/operators';
import { HttpErrMsgService } from './http-err-msg.service';
import { BASEURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  //private expenseUrl = "http://localhost:8080/expenses";
  private expenseUrl = BASEURL + 'expenses';

  constructor(private http: HttpClient,
    private httpErrMsgService: HttpErrMsgService) { }

  getExpenses(): Observable<Expense []> {
    return this.http.get<Expense[]>(this.expenseUrl)
    .pipe(catchError(this.httpErrMsgService.handleError));
  }

  getExpensesByMonth(year: number, month: number): Observable<Expense []> {
    return this.http.get<Expense[]>(`${this.expenseUrl}/${year}/${month}`)
    .pipe(catchError(this.httpErrMsgService.handleError));
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.expenseUrl, expense)
    .pipe(catchError(this.httpErrMsgService.handleError));
  }

  updateExpense(expense: Expense): Observable<Expense> {
    let expenseId = expense.id;
    return this.http.put<Expense>(`${this.expenseUrl}/${expenseId}`, expense)
    .pipe(catchError(this.httpErrMsgService.handleError));
  }

  deleteExpense(expense: Expense): Observable<Expense> {
    let expenseId = expense.id;
    return this.http.delete<Expense>(`${this.expenseUrl}/${expenseId}`)
    .pipe(catchError(this.httpErrMsgService.handleError));
  }
}
