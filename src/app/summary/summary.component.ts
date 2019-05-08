import { Component, OnInit } from '@angular/core';
import { Summary } from '../shared/summary';
import { SummaryService } from '../services/summary.service';

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
  
  constructor(private summaryService: SummaryService) { }

  ngOnInit() {
    this.summaryService.getSummary().subscribe(summ => this.summaries = summ,
                                               errmes => this.errorMsg = errmes);
  }

}
