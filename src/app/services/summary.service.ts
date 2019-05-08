import { Injectable } from '@angular/core';
import { Summary } from '../shared/summary';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrMsgService } from './http-err-msg.service';
import { BASEURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  private summaryUrl = BASEURL + 'summary';

  constructor(private http: HttpClient,
    private httpErrMsgService: HttpErrMsgService) { }

  getSummary(): Observable<Summary[]> {
    return this.http.get<Summary[]>(this.summaryUrl)
    .pipe(catchError(this.httpErrMsgService.handleError));
  }

}
