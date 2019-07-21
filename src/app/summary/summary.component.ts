import { Component, OnInit } from '@angular/core';
import { Summary } from '../shared/summary';
import { SummaryService } from '../services/summary.service';
import { YEARS, MONTHS } from '../shared/dates';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  //types: success, warning, danger
  // type:string = "success";
  // value:number = 170;

  summaries: Summary[];
  errorMsg: String;
  years = YEARS;
  months = MONTHS;
  // selectedYear: number;
  // selectedMonth: number;
  year = 0;
  month = 0;
  
  constructor(private summaryService: SummaryService) { }

  ngOnInit() {
    this.summaryService.getSummary().subscribe(summ => this.summaries = summ,
                                               errmes => this.errorMsg = errmes);
  }

  onYearSelected(value: any) {
    this.year = value;
    if (this.month != 0) {
      this.getSummaryByMonth();
    }
  }

  onMonthSelected(value: any) {
    this.month = value;
    if (this.year != 0) {
      this.getSummaryByMonth();
    }
  }
  
  
  getSummaryByMonth() {
    this.summaryService.getSummaryByMonth(this.year, this.month)
    .subscribe(summ => this.summaries = summ, 
                errmes => this.summaries = errmes);
  }

}
